using Microsoft.EntityFrameworkCore;
using WebApplication3.Models;

namespace WebApplication3.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {
            
        }
        public DbSet<Value> Values { get; set; }
        public DbSet<Town> Towns { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<SocialLinks> SocialLinks { get; set; }
        public DbSet<User> Users { get; set; }
    } 
}