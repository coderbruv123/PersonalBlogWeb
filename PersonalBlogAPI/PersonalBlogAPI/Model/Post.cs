namespace PersonalBlogAPI.Model
{
    public class Post
    {

        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Content { get; set; }

        public required string Category {get; set;}

        public DateTime UploadAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
