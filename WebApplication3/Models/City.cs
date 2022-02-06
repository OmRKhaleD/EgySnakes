using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<User> Users { get; set; }
        public ICollection<Town> Towns { get; set; }
        public ICollection<Manager> Managers { get; set; }
        public ICollection<Pharmacy> Pharmacies { get; set; }

    }
}