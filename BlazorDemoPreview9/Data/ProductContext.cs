using Microsoft.EntityFrameworkCore;
using System;

namespace BlazorDemoPreview9.Data
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options) { }
        public virtual DbSet<Product> Products { get; set; }
    }
}
