using HMS.Application.Interfaces;
using HMS.Application.Services;
using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HMS.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DoctorController : ControllerBase
  {
    private readonly IDoctorService _service;
    public DoctorController(IDoctorService service)
    {
      _service = service; 
    }

    [HttpPost("save")]
    public async  Task<ResponseDataModel> Save([FromForm] Doctor model,IFormFile photo)
    {
      if (photo != null)
      {
        var fileName = Guid.NewGuid() + Path.GetExtension(photo.FileName);
        var filePath = Path.Combine("wwwroot/uploads", fileName);

        using var stream = new FileStream(filePath, FileMode.Create);
        await photo.CopyToAsync(stream);

        model.DoctorPhoto = "uploads/" + fileName;
      }
      return _service.Save(model);
    }
    [HttpPost("get")]
    public ResponseDataModel Get(Doctor model)
    {
      return _service.Get(model);
    }
    [HttpPost("delete")]
    public ResponseDataModel Delete
      (Doctor model)
    {
      return _service.Remove(model);
    }
  }
}
