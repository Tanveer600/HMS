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
    private readonly DoctorService _service;

    [HttpPost("save")]
    public ResponseDataModel Save(Doctor model)
    {
      return _service.Save(model);
    }
    [HttpPost("read")]
    public ResponseDataModel read(Doctor model)
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
