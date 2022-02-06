namespace WebApplication3.Models
{
    public class Pharmacy
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public Town Town { get; set; }
        public int TownId { get; set; }
        public City City { get; set; }
        public int CityId { get; set; }
        public string DetailedAddress { get; set; }
        public string LicensePhoto { get; set; }

    }
}