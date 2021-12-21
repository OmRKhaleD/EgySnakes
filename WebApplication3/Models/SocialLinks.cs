using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class SocialLinks
    {
        public int Id { get; set; }
        public string Whatsaspp { get; set; }
        public string Telegram { get; set; }
        public string Email { get; set; }
        public string Facebook { get; set; }
        public string Twitter { get; set; }
        public string Instgram { get; set; }
        public ICollection<User> Users { get; set; }
    }
}