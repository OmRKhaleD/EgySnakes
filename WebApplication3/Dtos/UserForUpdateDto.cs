using System;

namespace WebApplication3.Dtos
{
    public class UserForUpdateDto
    {
        public string UserName { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string FullName { get; set; }
        public string NationalId { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int CityId { get; set; }
        public int TownId { get; set; }
    }
}