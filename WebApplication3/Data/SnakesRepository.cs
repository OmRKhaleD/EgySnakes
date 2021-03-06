using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication3.Models;

namespace WebApplication3.Data
{
    public class SnakesRepository : ISnakesRepository
    {
        private readonly DataContext _context;
        public SnakesRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<IEnumerable<City>> GetCities()
        {
            var cities = await _context.Cities.ToListAsync();
            return cities;
        }

        public async Task<Manager> GetManager(int id)
        {
            var manager = await _context.Managers.Include(s => s.User).ThenInclude(s => s.SocialLinks).
            Include(s => s.User).ThenInclude(s => s.City).Include(s => s.User).ThenInclude(s => s.Town).
            Include(s => s.User).ThenInclude(s => s.Photo).
                Include(c => c.City).Include(t =>t.Town).FirstOrDefaultAsync(x => x.Id == id);
            return manager;
        }

        public async Task<Manager> GetManagerForUpdate(int id)
        {
            var manager = await _context.Managers.FirstOrDefaultAsync(x=> x.UserId == id);
            return manager;
        }

        public async Task<IEnumerable<Manager>> GetManagers()
        {
            var managers = await _context.Managers.Include(s => s.User).ThenInclude(s => s.SocialLinks).
            Include(s => s.User).ThenInclude(s => s.City).Include(s => s.User).ThenInclude(s => s.Town).
            Include(s => s.User).ThenInclude(s => s.Photo).
                Include(c => c.City).Include(t =>t.Town).ToListAsync();
            return managers;
        }

        public async Task<SocialLinks> GetSocialLinksForUpdate(int id)
        {
            var socialLinks = await _context.SocialLinks.FirstOrDefaultAsync(x => x.UserId == id);
            return socialLinks;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(s => s.SocialLinks).
                Include(c => c.City).Include(p => p.Photo).Include(t => t.Town).Include(m => m.Managers).FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }

        public async Task<User> GetUserForUpdate(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }

        public async Task<Photo> GetUserPhoto(int id)
        {
            var photo = await _context.Photo.FirstOrDefaultAsync(x => x.Id == id);
            return photo;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(s => s.SocialLinks).
                Include(p => p.Photo).Include(c => c.City).Include(t =>t.Town).ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}