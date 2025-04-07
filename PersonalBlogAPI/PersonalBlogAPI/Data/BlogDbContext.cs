using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PersonalBlogAPI.Model;

namespace PersonalBlogAPI.Data
{
    public class BlogDbContext: DbContext
    {
       public BlogDbContext (DbContextOptions<BlogDbContext> options) : base(options) { }
       public DbSet<Post> Posts { get; set;}
    }
}
