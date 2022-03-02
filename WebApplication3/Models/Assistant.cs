using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class Assistant
    {
        public int Id { get; set; }
        public Photo NationalIdPhoto { get; set; }
        public string CV { get; set; }
        public string Qualification { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}