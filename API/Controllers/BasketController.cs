using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("[controller]")]
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;

        public BasketController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await RetriveBasket();

            if (basket == null) return NotFound();

            return basket;
        }


        [HttpPost] //api/basket?productId=3&quantity=2
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetriveBasket();
            if (basket == null) basket = CreateBasket();
            var product = await _context.Products.FindAsync(productId);
            if(product == null) return NotFound();
            basket.AddItem(product,quantity);
            var result = await _context.SaveChangesAsync()>0;
            if (result) return StatusCode(201);
            return BadRequest(new ProblemDetails{Title="Problem saving item to basket"})
        }

      

        [HttpDelete]
        public async Task<ActionResult> RemuveBasketItem(int productId, int quantity)
        {

            //get basket
            //remuve item or reducequantity 
            //save changes
            return Ok();
        }



        private async Task<Basket> RetriveBasket()
        {
            return await _context.Baskets
                        .Include(i => i.Items)
                        .ThenInclude(p => p.Product)
                        .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        }

          private Basket? CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOption = new CookieOptions{IsEssential = true, Expires = DateTime.Now.AddDays(30)}:
            Response.Cookies.Append("buierId", buyerId,cookieOption);
            var basket = new Basket{BuyerId = buyerId};
            _context.Baskets.Add(basket);
            return basket;
            }
    }
}