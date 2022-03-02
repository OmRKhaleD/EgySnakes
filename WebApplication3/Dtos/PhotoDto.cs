using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.Models;

namespace WebApplication3.Dtos
{
    public class PhotoDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string PublicId { get; set; }
        public string Type { get; set; }

        public static implicit operator PhotoDto(Photo v)
        {
            throw new NotImplementedException();
        }
    }
}
