using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalBlogAPI.Data;
using PersonalBlogAPI.Model;
using PersonalBlogAPI.Services;

namespace PersonalBlogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostApi(IPostServices postServices) : ControllerBase
    {





        [HttpGet] 
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
        {
            try{
            var posts = await postServices.GetPostsAsync();
            if (posts == null || !posts.Any())
            {
                return NotFound("No posts found.");
            }

            return Ok(posts);
            }
            catch(Exception ex){
                return StatusCode(500,"Internal error " + ex.Message);
            }
        }

        [HttpPost]
        public async Task< ActionResult<PostDTO>> AddPost(PostDTO post)
        {
            
            try{
            if (post == null)
            {
                return BadRequest("Post data is null.");
            }

            var newPost = await postServices.AddPostAsync(post);
            if (newPost == null)
            {
                return BadRequest("Failed to create post.");
            }

            return CreatedAtAction(nameof(GetPost), new { id = newPost.Id }, newPost);
        }
        catch(Exception ex){
            return StatusCode(500,"Internal error "+ex.Message);
        }}

        [HttpGet("{id:int}")]
        public IActionResult GetPost(int id)
        {
            
        var post = postServices.GetPostByIdAsync(id);
        if (post == null)
            {
                return NotFound("Post not found.");
            }

            return Ok(post);
        }

        [HttpDelete("{id:int}")]
        public  async  Task<IActionResult> DeletePost(int id)
        {

         var post = await postServices.DeletePostAsync(id);
       
            if(post ==true){
                return NotFound("Post not found.");
            }
            return Ok("Post deleted successfully.");
           }
          
        [HttpPut("{id:int}")]
        public IActionResult EditPost(int id,PostDTO Upost)
        {
            
        var post = postServices.UpdatePostAsync(id,Upost);
        if (post == null)
            {
                return NotFound("Post not found.");
            }

            return Ok(post);    
        }
       
    

        // [HttpPatch("{id:int}")]
        // public async Task<IActionResult> UpdatePost(int id, [FromBody] PostDTO updatedPost)
        // {
          
        // }


    }
}
