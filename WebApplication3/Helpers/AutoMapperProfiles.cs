using AutoMapper;
using WebApplication3.Dtos;
using WebApplication3.Models;

namespace WebApplication3.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<SocialLinks, SocialForDetailedDto>();
            CreateMap<Manager, ManagerForListDto>();
            CreateMap<City, CityDto>();
            CreateMap<Town, TownDto>();
            CreateMap<ManagerForUpdateDto, Manager>();
            CreateMap<SocialForUpdateDto, SocialLinks>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<SocialForUpdateDto, SocialLinks>();
            CreateMap<ManagerForUpdateDto, Manager>();
            CreateMap<User, UserForManagerDto>().ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
        }
    }
}