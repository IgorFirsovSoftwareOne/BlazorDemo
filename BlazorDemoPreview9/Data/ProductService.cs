using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorDemoPreview9.Data
{
    public class ProductService
    {

        private readonly ProductContext _context;

        public ProductService(ProductContext context)
        {
            _context = context;
        }
        public async Task<Product[]> GetProductsAsync(string searchString = null)
        {
            return await _context.Products
                .Where(p => string.IsNullOrEmpty(searchString) || p.ProductName.Contains(searchString))
                .ToArrayAsync();

            //var products = from p in _context.Products
            //               select p;
            //if (!string.IsNullOrEmpty(searchString))
            //{
            //    products = products.Where(p => p.ProductName.Contains(searchString));
            //}
            //return await products.ToArrayAsync();
        }
    }
}
