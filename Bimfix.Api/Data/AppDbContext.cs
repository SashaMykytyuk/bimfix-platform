using Microsoft.EntityFrameworkCore;
using Bimfix.Api.Models;

namespace Bimfix.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<ServiceRequest> ServiceRequests => Set<ServiceRequest>();
}