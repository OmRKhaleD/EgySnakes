using System;
using System.Collections.Generic;

namespace WebApplication3.Dtos
{
    public class UserForManagerDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Sex { get; set; }
        public TownDto Town { get; set; }
        public CityDto City { get; set; }
        public int Age { get; set; }
        public string FullName { get; set; }
        public DateTime LastActive { get; set; }
        public string Photo { get; set; }
    }
}