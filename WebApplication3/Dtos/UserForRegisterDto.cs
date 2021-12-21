using System.ComponentModel.DataAnnotations;

namespace WebApplication3.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 8, ErrorMessage ="You password must be 8 charchters")]
        public string Password { get; set; }
    }
}