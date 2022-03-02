using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication3.Models;

namespace WebApplication3.Data
{
    public interface ISnakesRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
         Task<User> GetUserForUpdate(int id);
         Task<IEnumerable<Manager>> GetManagers();
         Task <Manager> GetManager(int id);
         Task <IEnumerable<City>> GetCities ();
         Task<SocialLinks> GetSocialLinksForUpdate(int id);
         Task<Manager> GetManagerForUpdate(int id);
         Task<Photo> GetUserPhoto(int id);
    }
}