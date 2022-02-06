using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class Town
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public City City { get; set; }
        public int CityId { get; set; }
        public ICollection<User> Users { get; set; }
        public ICollection<Manager> Managers { get; set; }
        public ICollection<Pharmacy> Pharmacies { get; set; }

    }
}