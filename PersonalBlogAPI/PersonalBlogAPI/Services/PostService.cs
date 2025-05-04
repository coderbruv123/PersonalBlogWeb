using Microsoft.EntityFrameworkCore;
using PersonalBlogAPI.Data;
using PersonalBlogAPI.Model;

namespace PersonalBlogAPI.Services
{
public class PostService : IPostServices
{
    private readonly BlogDbContext _context;

    public PostService(BlogDbContext context)
    {
        _context = context;
    }

    public async Task<Post?> AddPostAsync(PostDTO post)
    {
        var newPost = new Post
        {
            Title = post.Title,
            Content = post.Content,
            UploadAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
            ImageUrl = post.ImageUrl,
            Category = post.Category
        };

        _context.Posts.Add(newPost);
        await _context.SaveChangesAsync();

        return newPost;
    }

    public async Task<IEnumerable<Post>> GetPostsAsync()
    {
        return await _context.Posts.ToListAsync();
    }

    public async Task<Post?> GetPostByIdAsync(int id)
    {
        return await _context.Posts.FindAsync(id);
    }

    public async Task<bool> UpdatePostAsync(int id, PostDTO post)
    {
        var existingPost = await GetPostByIdAsync(id);
        if (existingPost == null) return false;

        existingPost.Title = post.Title;
        existingPost.Content = post.Content;
        existingPost.UpdatedAt = DateTime.UtcNow;
        existingPost.ImageUrl = post.ImageUrl;
        existingPost.Category = post.Category;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeletePostAsync(int id)
    {
        var postToDelete = await GetPostByIdAsync(id);
        if (postToDelete == null) return false;

        _context.Posts.Remove(postToDelete);
        await _context.SaveChangesAsync();
        return true;
    }

}}