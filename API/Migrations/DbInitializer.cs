using API.Data;
using API.Entities;

namespace API.Migrations
{
    public class DbInitializer
    {
        private StoreContext _storeContext;

        public DbInitializer(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        public void Initialize()
        {
            if (!_storeContext.Products.Any())
            {
                var products = new List<Product>
            {
                new Product
                {
                    Name = "Workstation",
                    Description =
                        "This is a really fun project that looks absolutely incredible!",
                    Price = 20000,
                    PictureUrl = "/images/products/Workstation.jpg",
                    Brand = "@bobo",
                    Type = "DYI",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "WOODEN WORLD MAP",
                    Description = "WOODEN WORLD MAP WITH INDIRECT LED LIGHT",
                    Price = 15000,
                    PictureUrl = "/images/products/WORLD MAP.jpg",
                    Brand = "@bobo",
                    Type = "DYI",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Articulating Lamp",
                    Description = "Modern wooden lamp",
                    Price = 18000,
                    PictureUrl = "/images/products/Articulating Lamp.jpg",
                    Brand = "@bobo",
                    Type = "DYI",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Wooden Gear Clock",
                    Description ="Glider - wood kinetic sculpture",
                    Price = 30000,
                    PictureUrl = "/images/products/WoodenClock.jpg",
                    Brand = "@bobo",
                    Type = "DYI",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Wood Decor Wall Hanging",
                    Description ="Exotic woods are used to create each piece of art. All woods used, are their own natural wood-tone color (not stained)",
                    Price = 25000,
                    PictureUrl = "/images/products/intransia.jpg",
                    Brand = "@bobo",
                    Type = "DYI",
                    QuantityInStock = 100
                },
                };
                _storeContext.Products.AddRange(products);
                _storeContext.SaveChanges();
            };
        }
    }
}
