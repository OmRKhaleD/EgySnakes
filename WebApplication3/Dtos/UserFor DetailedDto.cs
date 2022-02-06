using System;
using System.Collections.Generic;
using WebApplication3.Models;

namespace WebApplication3.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Sex { get; set; }
        public Town Town { get; set; }
        public City City { get; set; }
        public ICollection<SocialForDetailedDto> SocialLinks { get; set; }
        public string Phone { get; set; }
        public int Age { get; set; }
        public string FullName { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Photo { get; set; }
        public string NationalId { get; set; }
    }
}