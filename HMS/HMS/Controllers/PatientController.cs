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
  public class PatientController : ControllerBase
  {
    private readonly IPatientService _service;
    public PatientController(IPatientService service)
    {
        _service= service;  
    }
    [HttpPost("save")]
    public async Task<ResponseDataModel> Save([FromForm] Patient model, IFormFile photo)
     {
      if (photo != null)
      {
        var fileName = Guid.NewGuid() + Path.GetExtension(photo.FileName);
        var filePath = Path.Combine("wwwroot/uploads", fileName);

        using var stream = new FileStream(filePath, FileMode.Create);
        await photo.CopyToAsync(stream);

        model.PatientPhoto = "uploads/" + fileName;
      }

      //if (photo != null)
      //{
      //  var filePath = Path.Combine("wwwroot/uploads", photo.FileName);
      //  using (var stream = new FileStream(filePath, FileMode.Create))
      //  {
      //    await photo.CopyToAsync(stream);
      //  }
      //  model.PatientPhoto = "uploads/" + photo.FileName;
      //}
      return _service.Save(model);
    }

    [HttpPost("get")]
    public ResponseDataModel Get(Patient model)
    {
      return _service.Get(model);
    }
    [HttpPost("delete")]
    public ResponseDataModel Delete (Patient model)
    {
      return _service.Remove(model);
    }
  }
}
