using System;
using System.Collections.Generic;
using WebApplication3.Models;

namespace WebApplication3.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public TownDto Town { get; set; }
        public CityDto City { get; set; }
        public SocialForDetailedDto SocialLinks { get; set; }
        public string Phone { get; set; }
        public int Age { get; set; }
        public string FullName { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public PhotoDto Photo { get; set; }
        public string NationalId { get; set; }
        public DateTime DateOfBirth { get; set; }
        public ManagerForListDto managers { get; set; }
        public int CityId { get; set; }
        public int TownId { get; set; }
    }
}