using Microsoft.AspNetCore.Mvc;
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

    // ✅ JSON endpoint (працює як і раніше)
    [HttpPost]
    public async Task<IActionResult> Create(ServiceRequest request)
    {
        request.CreatedAt = DateTime.UtcNow;
        request.Status = "New";

        _db.ServiceRequests.Add(request);
        await _db.SaveChangesAsync();

        return Ok(new { message = "Request saved", id = request.Id });
    }

    // ✅ FORM endpoint (Swagger більше не падає)
    [HttpPost("form")]
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

        // 2) Зберігаємо файли (якщо є)
        var uploadsRoot = Path.Combine(_env.ContentRootPath, "Data", "Uploads", req.Id.ToString());
        Directory.CreateDirectory(uploadsRoot);

        async Task<string?> SaveFile(IFormFile? file, string logicalName)
        {
            if (file == null || file.Length == 0) return null;

            var safeFileName = Path.GetFileName(file.FileName);
            var destPath = Path.Combine(uploadsRoot, $"{logicalName}_{safeFileName}");

            await using var stream = System.IO.File.Create(destPath);
            await file.CopyToAsync(stream);

            return destPath;
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
}