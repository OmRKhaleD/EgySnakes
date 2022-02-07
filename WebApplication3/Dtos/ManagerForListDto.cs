using System;
using WebApplication3.Models;

namespace WebApplication3.Dtos
{
    public class ManagerForListDto
    {
        public int Id { get; set; }
        public UserForDetailedDto User { get; set; }
        public TownDto Town { get; set; }
        public CityDto City { get; set; }
        public DateTime AvilableDate { get; set; }
        public string JobType { get; set; } //فتح وغلق vs  دائم
        public string Drugs { get; set; } //جدول vs بدون
        public double Salary { get; set; }
    }
}