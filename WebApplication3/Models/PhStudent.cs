using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication3.Models
{
    public class PhStudent
    {
        public int Id { get; set; }
        public string University { get; set; }
        public string CollageType { get; set; }
        public string Year { get; set; }
        public string CollageCardPhoto { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}