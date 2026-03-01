using Microsoft.AspNetCore.Http;

namespace Bimfix.Api.Dtos;

public class CreateRequestFormDto
{
    public string ServiceType { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string? Telegram { get; set; }

    public string? Vin { get; set; }
    public string? Comment { get; set; }

    public string? Currency { get; set; }
    public decimal? Amount { get; set; }

    public IFormFile? File1 { get; set; }
    public IFormFile? File2 { get; set; }
}