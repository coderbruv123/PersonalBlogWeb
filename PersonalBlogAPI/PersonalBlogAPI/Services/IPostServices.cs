using PersonalBlogAPI.Model;

namespace PersonalBlogAPI.Services
{

    public interface IPostServices
    {
        Task<Post?> AddPostAsync(PostDTO post);
        Task<IEnumerable<Post>> GetPostsAsync();
        Task<Post?> GetPostByIdAsync(int id);
        Task<bool> UpdatePostAsync(int id, PostDTO post);
        Task<bool> DeletePostAsync(int id);
    }
    
}