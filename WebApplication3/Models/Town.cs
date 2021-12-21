using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class Town
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<City> Cities { get; set; }
        public ICollection<User> Users { get; set; }

    }
}