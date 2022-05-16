using API.Entities;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string orderBy)
        {
            if (string.IsNullOrWhiteSpace(orderBy)) return query.OrderBy(p => p.Name);
            
            query = orderBy switch
            {
                "price" => query.OrderBy(p => p.Price),
                "priceDesc" => query.OrderByDescending(p => p.Price),
               _ => query.OrderBy(p => p.Name)
            };
            return query;
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string serchTerm)
        {
            if (string.IsNullOrWhiteSpace(serchTerm)) return query;

            var lowerCaseSerchTerm = serchTerm.Trim().ToLower();

            return query.Where(p => p.Name.ToLower().Contains(lowerCaseSerchTerm));
        }
    }
}
