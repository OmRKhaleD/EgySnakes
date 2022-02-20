using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication3.Data;
using WebApplication3.Dtos;

namespace WebApplication3.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly ISnakesRepository _repo;
        private readonly IMapper _mapper;
        public ValuesController(DataContext context, ISnakesRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities = await _repo.GetCities();
            var citiesToShow = _mapper.Map<IEnumerable<CityDto>> (cities);
            return Ok(citiesToShow);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTowns(int id)
        {
            var towns = await _context.Towns.Where(x => x.CityId == id).ToListAsync();
            var townsToShow = _mapper.Map<IEnumerable<TownDto>> (towns);
            return Ok(townsToShow);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
