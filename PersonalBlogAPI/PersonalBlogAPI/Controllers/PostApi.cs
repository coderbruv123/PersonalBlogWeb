using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalBlogAPI.Data;
using PersonalBlogAPI.Model;

namespace PersonalBlogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostApi : ControllerBase
    {

        public readonly BlogDbContext _context;


        public PostApi(BlogDbContext context)
        {
            _context = context;
        }

        [HttpGet] 
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
        {
            try{
            var posts = await _context.Posts.ToListAsync();

            return Ok(posts);
            }
            catch(Exception ex){
                return StatusCode(500,"Internal error " + ex.Message);
            }
        }

        [HttpPost]
        // [Authorize]
        public async Task< ActionResult<PostDTO>> AddPost(PostDTO post)
        {
            try{
            var newposts = new
             Post {
                Title = post.Title,
                Content = post.Content,
                UploadAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                ImageUrl = post.ImageUrl,
                Category = post.Category
            };

          _context.Posts.Add(newposts);


          await _context.SaveChangesAsync();

          var createdPost = new Post{
            Title = post.Title,
            Content= post.Content,
            UpdatedAt= DateTime.UtcNow,
            UploadAt = DateTime.UtcNow,
            ImageUrl = post.ImageUrl,
            Category = post.Category
          };
            return CreatedAtAction(nameof(AddPost), new{id= newposts.Id}, createdPost);
            }
            catch(Exception ex){
                return StatusCode(500, "Internal error" + ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult GetPost(int id)
        {
            try{

            var Post = _context.Posts.FirstOrDefault(p => p.Id ==id);
            if (Post == null)
            {
                return NotFound();
            }
            
            return Ok(Post);
        }
            catch(Exception ex){
                return StatusCode(500, "Error is "+ex);
            }
        
        }

        [HttpDelete("{id:int}")]
        public  async  Task<IActionResult> DeletePost(int id)
        {

            try{
            var Post = await _context.Posts.FirstOrDefaultAsync(p=> p.Id==id);
            if(Post== null)
            {
                return NotFound();
            }
            _context.Posts.Remove(Post);
             await _context.SaveChangesAsync();
            return NoContent();       
        }  
        
        catch( Exception ex){
            return StatusCode(500,"The action couldn't be performed due to "+ex);
        }
           }
          
        [HttpPut("{id:int}")]
        public IActionResult EditPost(int id,Post Upost)
        {
            
            if(Upost.Id != id){
                return BadRequest();
            }
            try{
                
            var post=_context.Posts.FirstOrDefault(post =>post.Id==id);
            if(post==null){
                return BadRequest();
            }
            post.Category=Upost.Category;
            post.Content = Upost.Content;
            post.UpdatedAt = Upost.UpdatedAt;
            _context.SaveChanges();
            return Ok(); 
        }
        catch(Exception ex){
            return StatusCode(500,"External error"+ex.Message);
        }
        }

        [HttpPatch("{id:int}")]
        public async Task<IActionResult> UpdatePost(int id, [FromBody] PostDTO updatedPost)
        {
            try
            {
                var post = await _context.Posts.FindAsync(id);
                if (post == null)
                {
                    return NotFound();
                }

                if (!string.IsNullOrEmpty(updatedPost.Title))
                    post.Title = updatedPost.Title;
                
                if (!string.IsNullOrEmpty(updatedPost.Content))
                    post.Content = updatedPost.Content;
                
                if (!string.IsNullOrEmpty(updatedPost.Category))
                    post.Category = updatedPost.Category;
                
                post.UpdatedAt = DateTime.UtcNow; // Always update timestamp

                await _context.SaveChangesAsync();
                return Ok(post);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal error: " + ex.Message);
            }
        }


    }
}
