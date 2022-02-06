using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using WebApplication3.Models;

namespace WebApplication3.Data
{
    public class Seed
    {
        private readonly DataContext _context;

        public Seed(DataContext context)
        {
            _context = context;
        }
        private void CreatePasswordHash(string password, out byte[] paswwordHash, out byte[] passwordSalt)
        {
            using( var hmac= new System.Security.Cryptography.HMACSHA512()){
                passwordSalt= hmac.Key;
                paswwordHash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        public void SeedUser() {
            Random rnd = new Random();
            var userData = System.IO.File.ReadAllText("Data/SeedingDaata.json");
            /*var users = JsonConvert.DeserializeObject<List<User>>(userData);
            foreach (var user in users)
            {
             byte [] passwordHash, passwordSalt;
             CreatePasswordHash("password",out passwordHash,out passwordSalt); 
             user.PasswordHash = passwordHash;
             user.PasswordSalt = passwordSalt; 
             user.UserName = user.UserName.ToLower();
             user.TownId=1;
             user.CityId=rnd.Next(1,15);
             
             _context.Users.Add(user);
            }
            _context.SaveChanges();
        }*/
       /* var users = JsonConvert.DeserializeObject<List<SocialLinks>>(userData);
        int i= 21;
        foreach (var user in users)
        {
            user.UserId=i;
            _context.SocialLinks.Add(user);
            i++;
        }
        _context.SaveChanges();*/
    }
    }
}