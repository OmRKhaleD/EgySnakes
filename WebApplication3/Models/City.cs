using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Town Town { get; set; }
        public ICollection<User> Users { get; set; }
    }
}