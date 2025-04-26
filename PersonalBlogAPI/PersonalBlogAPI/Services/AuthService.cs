using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PersonalBlogAPI.Data;
using PersonalBlogAPI.Model;

namespace PersonalBlogAPI.Services
{
    public class AuthService(BlogDbContext context, IConfiguration configuration) : IAuthServices
    {

        public async Task<string?> LoginAsync(UserDTO request)
        {  
        var user = await context.Users.FirstOrDefaultAsync(x => x.Username == request.Username);
        if(user is null)
        {
            return null;
        }
       if(new PasswordHasher<User>().VerifyHashedPassword(user, user.Password, request.Password) == PasswordVerificationResult.Failed){
            return null;
        }
    ;
        return CreateToken(user);
              }

        public async Task<User?> RegisterAsync(UserDTO request)
        {
            
        if(await context.Users.AnyAsync(x => x.Username == request.Username))
        {
            return null;
        }
        var user = new User();
        var hashedPassword = new PasswordHasher<User>().HashPassword(user, request.Password);
       
            user.Username = request.Username;
            user.Password = hashedPassword;

            context.Users.Add(user);
            await context.SaveChangesAsync();
            return user;        }
    

        private string CreateToken(User user){
            var claims = new List<Claim>{
                new(ClaimTypes.Name, user.Username),
                new(ClaimTypes.NameIdentifier, user.Id.ToString())
            };
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(configuration.GetValue<string>("AppSettings:Token")!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var tokenDescriptor = new JwtSecurityToken(
                    issuer: configuration.GetValue<string>("AppSettings:issuer"),
                    audience: configuration.GetValue<string>("AppSettings:audience"),
                    claims: claims,
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: creds

            );

            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }
}}