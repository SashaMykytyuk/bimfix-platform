namespace Bimfix.Api.Models;

public class RequestFile
{
    public int Id { get; set; }

    public int ServiceRequestId { get; set; }
    public ServiceRequest ServiceRequest { get; set; } = null!;

    public string LogicalName { get; set; } = null!;
    public string OriginalName { get; set; } = null!;
    public string StoredPath { get; set; } = null!;

    public DateTime UploadedAt { get; set; } = DateTime.UtcNow;
}