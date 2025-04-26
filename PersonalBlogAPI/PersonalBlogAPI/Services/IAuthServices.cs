using PersonalBlogAPI.Model;

namespace PersonalBlogAPI.Services
{
    public interface IAuthServices
    {

        Task<User?> RegisterAsync(UserDTO request);
        Task<string?> LoginAsync(UserDTO request); 
    }
}