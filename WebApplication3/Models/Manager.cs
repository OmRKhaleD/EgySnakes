using System;

namespace WebApplication3.Models
{
    public class Manager
    {
        public int Id { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public Town Town { get; set; }
        public int TownId { get; set; }
        public City City { get; set; }
        public int CityId { get; set; }
        public DateTime AvilableDate { get; set; }
        public string JobType { get; set; } //فتح وغلق vs  دائم
        public string Drugs { get; set; } //جدول vs بدون
        public double Salary { get; set; }
    }
}