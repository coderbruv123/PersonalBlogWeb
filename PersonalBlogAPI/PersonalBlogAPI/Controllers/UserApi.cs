using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PersonalBlogAPI.Model;
using PersonalBlogAPI.Services;

namespace PersonalBlogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserApi(IAuthServices authServices) : ControllerBase
    {


        

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserDTO request){
           var user =await  authServices.RegisterAsync(request);
           if(user is null){
            return BadRequest("Username already exists");
           };
            return Ok(user);
        }

        [HttpPost("login")]
        public  async Task <ActionResult<String>> Login(UserDTO request){

           var token= await authServices.LoginAsync(request);
           if(token is null){
            return BadRequest("Invalid username or password");
            }
            return Ok(token);

        }

        [Authorize]
        [HttpGet]
        public IActionResult AuthenticatedOnlyEndpoint()
        {
          return Ok("You are authenticated!");
        }
        

    }
}