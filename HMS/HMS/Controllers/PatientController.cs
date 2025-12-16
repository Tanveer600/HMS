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
    private readonly PatientService _service;

    [HttpPost("save")]
    public ResponseDataModel  Save(Patient model)
    {
      return _service.Save(model);
    }
    [HttpPost("read")]
    public ResponseDataModel read(Patient model)
    {
      return _service.Get(model);
    }
    [HttpPost("delete")]
    public ResponseDataModel Delete
      (Patient model)
    {
      return _service.Remove(model);
    }
  }
}
