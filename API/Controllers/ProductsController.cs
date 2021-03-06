using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Amazon.S3;
using API.Data;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController :BaseApiController
    {
        private readonly StoreContext _context;
        public  ProductsController(StoreContext context){
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(string? orderBy= null, 
                                                                    string? serchTerm=null,
                                                                    string? brands = null,
                                                                    string? types = null        
                                                                       )
        {
            var query = _context.Products
                 .Sort(orderBy)
                 .Search(serchTerm)
                 .Filter(brands,types)
                 .AsQueryable();

            return await query.ToListAsync();
        } 

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
         {
            var product= await _context.Products.FindAsync(id);

            if(product==null) return NotFound();

            return product;
        }

        //[HttpPost]
        //public async Task Post(IFormFile formFile)
        //{
        //    var client = new AmazonS3Client();

        //}
    }
}