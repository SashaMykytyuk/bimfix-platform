using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Bimfix.Api.Data;
using Bimfix.Api.Models;
using Bimfix.Api.Dtos;

namespace Bimfix.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RequestsController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly IWebHostEnvironment _env;

    public RequestsController(AppDbContext db, IWebHostEnvironment env)
    {
        _db = db;
        _env = env;
    }

    // ✅ JSON endpoint (працює як і раніше) — публічний
    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Create(ServiceRequest request)
    {
        request.CreatedAt = DateTime.UtcNow;
        request.Status = "New";

        _db.ServiceRequests.Add(request);
        await _db.SaveChangesAsync();

        return Ok(new { message = "Request saved", id = request.Id });
    }

    // ✅ FORM endpoint — публічний (для сайту)
    [HttpPost("form")]
    [AllowAnonymous]
    [Consumes("multipart/form-data")]
    [RequestSizeLimit(200_000_000)] // 200 MB
    public async Task<IActionResult> CreateForm([FromForm] CreateRequestFormDto dto)
    {
        // 1) Створюємо заявку в БД
        var req = new ServiceRequest
        {
            ServiceType = dto.ServiceType,
            Name = dto.Name,
            Phone = dto.Phone,
            Email = dto.Email,
            Telegram = dto.Telegram,
            Vin = dto.Vin,
            Comment = dto.Comment,
            Currency = string.IsNullOrWhiteSpace(dto.Currency) ? "UAH" : dto.Currency!,
            Amount = dto.Amount,
            PaymentStatus = "NotPaid",
            Status = "New",
            CreatedAt = DateTime.UtcNow
        };

        _db.ServiceRequests.Add(req);
        await _db.SaveChangesAsync();

        // 2) Зберігаємо файли (якщо є) + пишемо метадані в БД
        var uploadsRoot = Path.Combine(_env.ContentRootPath, "Data", "Uploads", req.Id.ToString());
        Directory.CreateDirectory(uploadsRoot);

        async Task<RequestFile?> SaveFile(IFormFile? file, string logicalName)
        {
            if (file == null || file.Length == 0) return null;

            var safeFileName = Path.GetFileName(file.FileName);
            var destPath = Path.Combine(uploadsRoot, $"{logicalName}_{safeFileName}");

            await using (var stream = System.IO.File.Create(destPath))
            {
                await file.CopyToAsync(stream);
            }

            var rf = new RequestFile
            {
                ServiceRequestId = req.Id,
                LogicalName = logicalName,
                OriginalName = safeFileName,
                StoredPath = destPath,
                UploadedAt = DateTime.UtcNow
            };

            _db.RequestFiles.Add(rf);
            await _db.SaveChangesAsync();

            return rf;
        }

        var saved1 = await SaveFile(dto.File1, "file1");
        var saved2 = await SaveFile(dto.File2, "file2");

        return Ok(new
        {
            message = "Request saved (form)",
            id = req.Id,
            vinProvided = !string.IsNullOrWhiteSpace(dto.Vin),
            file1Saved = saved1 != null,
            file2Saved = saved2 != null
        });
    }

    // ✅ Список заявок (для адмінки) — ТІЛЬКИ після login (cookie)
    [HttpGet]
    [Authorize]
    public IActionResult List(int take = 50)
    {
        take = Math.Clamp(take, 1, 200);

        var items = _db.ServiceRequests
            .OrderByDescending(x => x.CreatedAt)
            .Take(take)
            .Select(x => new
            {
                x.Id,
                x.ServiceType,
                x.Name,
                x.Phone,
                x.Email,
                x.Vin,
                x.Status,
                x.PaymentStatus,
                x.Amount,
                x.Currency,
                x.CreatedAt
            })
            .ToList();

        return Ok(items);
    }

    // ✅ Деталі заявки + файли — ТІЛЬКИ після login (cookie)
    [HttpGet("{id:int}")]
    [Authorize]
    public IActionResult Get(int id)
    {
        var request = _db.ServiceRequests
            .Include(x => x.Files)
            .FirstOrDefault(x => x.Id == id);

        if (request == null)
            return NotFound();

        return Ok(request);
    }

    // ✅ Скачати конкретний файл — ТІЛЬКИ після login (cookie)
    [HttpGet("{id:int}/files/{fileId:int}")]
    [Authorize]
    public IActionResult DownloadFile(int id, int fileId)
    {
        var file = _db.RequestFiles.FirstOrDefault(f => f.Id == fileId && f.ServiceRequestId == id);
        if (file == null) return NotFound();

        if (!System.IO.File.Exists(file.StoredPath))
            return NotFound(new { message = "File missing on disk" });

        var bytes = System.IO.File.ReadAllBytes(file.StoredPath);
        return File(bytes, "application/octet-stream", file.OriginalName);
    }
}