namespace WebApplication3.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string PublicId { get; set; }
        public string Type { get; set; }
        public Assistant Assistant { get; set; }
        public int? AssistantId { get; set; }
        public PhStudent PhStudent { get; set; }
        public int? PhStudentId { get; set; }
        public Pharmacy Pharmacy { get; set; }
        public int? PharmacyId { get; set; }
        public User User { get; set; }
        public int? UserId { get; set; }
    }
}