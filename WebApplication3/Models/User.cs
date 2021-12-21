namespace WebApplication3.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Sex { get; set; }
        public Town Town { get; set; }
        public City Address { get; set; }
        public SocialLinks SocialLinks { get; set; }
        public string Phone { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}