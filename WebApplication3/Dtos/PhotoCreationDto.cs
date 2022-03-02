using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Dtos
{
    public class PhotoCreationDto
    {
        public string Url { get; set; }
        public string PublicId { get; set; }
        public string Type { get; set; }
        public IFormFile File { get; set; }
    }
}
