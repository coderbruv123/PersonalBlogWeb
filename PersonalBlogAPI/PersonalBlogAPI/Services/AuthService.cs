using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PersonalBlogAPI.Data;
using PersonalBlogAPI.Model;

namespace PersonalBlogAPI.Services
{
    public class AuthService(BlogDbContext context, IConfiguration configuration) : IAuthServices
    {

        public async Task<TokenResponseDto?> LoginAsync(UserDTO request)
        {  
        var user = await context.Users.FirstOrDefaultAsync(x => x.Username == request.Username);
        if(user is null)
        {
            return null;
        }
       if(new PasswordHasher<User>().VerifyHashedPassword(user, user.Password, request.Password) == PasswordVerificationResult.Failed){
            return null;
        }
        var response = new TokenResponseDto
        {
            AccessToken = CreateToken(user),
            RefreshToken = await GenerateandsaveRefreshToken(user)
        };
        return response;
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
    
        private string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
          using var rng = RandomNumberGenerator.Create();
         rng.GetBytes(randomNumber);
             return Convert.ToBase64String(randomNumber);
            
        }

        private async Task<string> GenerateandsaveRefreshToken(User user)
        {
            var refreshToken = GenerateRefreshToken();
            user.RefreshToken = refreshToken;
            user.RefreshTokenExpiryTime = DateTime.Now.AddDays(7);
            await context.SaveChangesAsync();
            return refreshToken;
        }

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