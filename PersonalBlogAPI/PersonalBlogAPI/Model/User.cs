namespace PersonalBlogAPI.Model{
    public class User
    {
        public Guid Id {get; set;}
        public string Username {get; set;}= string.Empty;
        public string Password {get; set;}= string.Empty;
        public string RefreshToken {get; set;}= string.Empty;
        public DateTime RefreshTokenExpiryTime {get; set;}
    } 
}