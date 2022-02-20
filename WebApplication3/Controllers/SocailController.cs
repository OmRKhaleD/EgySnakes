using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Data;
using WebApplication3.Dtos;

namespace WebApplication3.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SocailController: ControllerBase
    {
        private readonly ISnakesRepository _repo;
        private readonly IMapper _mapper;

        public SocailController(ISnakesRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        [HttpGet]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSocail(int id)
        {
            var socail = await _repo.GetSocialLinksForUpdate(id);
            return Ok(socail);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSocail(int id, SocialForUpdateDto socialForUpdateDto){
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            var socailFromRepo = await _repo.GetSocialLinksForUpdate(id);
            _mapper.Map(socialForUpdateDto, socailFromRepo);
            if(await _repo.SaveAll())
                return NoContent();
            throw new Exception($"Updating social with {id} faild on save");    
        }
        
    }
}