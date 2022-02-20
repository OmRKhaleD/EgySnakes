using System;
using System.Collections.Generic;

namespace WebApplication3.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public Town Town { get; set; }
        public int TownId { get; set; }
        public City City { get; set; }
        public int CityId { get; set; }
        public SocialLinks SocialLinks { get; set; }
        public string Phone { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string FullName { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Photo { get; set; }
        public string NationalId { get; set; }
        PhStudent Students { get; set; }
        public PhGraduated Graduateds { get; set; }
        Assistant Assistants { get; set; }
        public Manager Managers { get; set; }
        public ICollection<Pharmacy> Pharmacies { get; set; }

    }
}