using System;
using System.Collections.Generic;
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
    public class ManagerController : ControllerBase
    {
        private readonly ISnakesRepository _repo;
        private readonly IMapper _mapper;
        public ManagerController(ISnakesRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;   
        }
        [HttpGet]
        public async Task<IActionResult> GetManager()
        {
            var managers = await _repo.GetManagers();
            var managersToShow = _mapper.Map<IEnumerable<ManagerForListDto>>(managers);
            return Ok(managersToShow);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetManager(int id)
        {
            var manager = await _repo.GetManager(id);
            var managerToShow =  _mapper.Map<ManagerForListDto>(manager);

            return Ok(managerToShow);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateManager(int id, ManagerForUpdateDto managerForUpdateDto){
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            var managerFromRepo = await _repo.GetManagerForUpdate(id);
            _mapper.Map(managerForUpdateDto, managerFromRepo);
            if(await _repo.SaveAll())
                return NoContent();
            throw new Exception($"Updating manager with {id} faild on save");    
        }
    }
}