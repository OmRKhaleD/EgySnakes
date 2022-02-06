using System.Collections.Generic;
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
    public class UserController : ControllerBase
    {
        private readonly ISnakesRepository _repo;
        private readonly IMapper _mapper;

        public UserController(ISnakesRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            var users = await _repo.GetUsers();
            var usersToShow = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToShow);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToShow =  _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToShow);
        }
    }
}