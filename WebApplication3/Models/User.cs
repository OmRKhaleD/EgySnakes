using System;
using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Sex { get; set; }
        public Town Town { get; set; }
        public int TownId { get; set; }
        public City City { get; set; }
        public int CityId { get; set; }
        public ICollection<SocialLinks> SocialLinks { get; set; }
        public string Phone { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string FullName { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Photo { get; set; }
        public string NationalId { get; set; }
        public ICollection<PhStudent> Students { get; set; }
        public ICollection<PhGraduated> Graduateds { get; set; }
        public ICollection<Assistant> Assistants { get; set; }
        public ICollection<Manager> Managers { get; set; }
        public ICollection<Pharmacy> Pharmacies { get; set; }

    }
}