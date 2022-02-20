using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class SocialLinks
    {
        public int Id { get; set; }
        public string Whatsapp { get; set; }
        public string Telegram { get; set; }
        public string Email { get; set; }
        public string Facebook { get; set; }
        public string Twitter { get; set; }
        public string Instagram { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}