namespace WebApplication3.Models
{
    public class PhGraduated
    {
        public int Id { get; set; }
        public string University { get; set; }
        public string CollageType { get; set; }
        public int YearOfGraduation { get; set; }
        public string JobType { get; set; } //نوع وظيفته
        public Photo MainGuildCard { get; set; }
        public Photo SubGuildCard { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}