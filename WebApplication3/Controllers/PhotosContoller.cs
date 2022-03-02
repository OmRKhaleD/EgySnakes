using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApplication3.Data;
using WebApplication3.Dtos;
using WebApplication3.Helpers;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    [Authorize]
    [Route("api/user/{userId}/photos")]
    [ApiController]
    public class PhotosContoller : ControllerBase
    {
        private readonly ISnakesRepository _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public PhotosContoller(ISnakesRepository repo, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _cloudinaryConfig = cloudinaryConfig;
            _repo = repo;
            _mapper = mapper;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary (acc);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<IActionResult> GetUserPhoto(int id)
        {
            var photoFromRepo = await _repo.GetUserPhoto(id);
            var photo = _mapper.Map<PhotoDto>(photoFromRepo);
            return Ok(photo);
        }

        [HttpPost]
        public async Task<IActionResult> AddUserPhoto(int userId, [FromForm] PhotoCreationDto photoCreationDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            var userFromRepo = await _repo.GetUser(userId);
            if(userFromRepo.Photo != null)
            {
                var photoFromRepo = await _repo.GetUserPhoto(userFromRepo.Photo.Id);
                if (photoFromRepo.PublicId != null)
                {
                    var deleteParams = new DeletionParams(photoFromRepo.PublicId);
                    var result = _cloudinary.Destroy(deleteParams);
                    if (result.Result == "ok")
                    {
                        _repo.Delete(photoFromRepo);
                    }
                }
                else
                {
                    _repo.Delete(photoFromRepo);
                }

            }
            var file = photoCreationDto.File;
            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            photoCreationDto.Url = uploadResult.Uri.ToString();
            photoCreationDto.PublicId = uploadResult.PublicId;
            photoCreationDto.Type = "profile";
            var photo = _mapper.Map<Photo>(photoCreationDto);
            userFromRepo.Photo = photo;
            
            if (await _repo.SaveAll())
            {
                var photoToReturn = _mapper.Map<PhotoDto>(photo);
                return CreatedAtRoute("GetPhoto", new { id = photoToReturn.Id}, photoToReturn);
            }
            return BadRequest("Coud not add the photo");

        }
    }
}