namespace Bimfix.Api.Models;

public class ServiceRequest
{
    public int Id { get; set; }

    public string ServiceType { get; set; } = null!;

    public string Name { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string? Telegram { get; set; }

    public string? Vin { get; set; }
    public string? Comment { get; set; }

    public string Status { get; set; } = "New";

    public string Currency { get; set; } = "UAH";
    public decimal? Amount { get; set; }
    public string PaymentStatus { get; set; } = "NotPaid";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public List<RequestFile> Files { get; set; } = new();
}