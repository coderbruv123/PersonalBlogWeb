namespace PersonalBlogAPI.Model
{
    public class PostDTO
    {

        public required string Title { get; set; }
        public required string Content { get; set; }

        public required string Category {get; set;}
    }
}
