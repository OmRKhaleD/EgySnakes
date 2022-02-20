using System;

namespace WebApplication3.Dtos
{
    public class ManagerForUpdateDto
    {
        public DateTime AvilableDate { get; set; }
        public string JobType { get; set; } //فتح وغلق vs  دائم
        public string Drugs { get; set; } //جدول vs بدون
        public double Salary { get; set; }
        public int CityId { get; set; }
        public int TownId { get; set; }
    }
}