using HMS.Application.Services;
using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HMS.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AppointmentController : ControllerBase
  {
    private readonly AppointmentService _service;

    [HttpPost("save")]
    public ResponseDataModel Save(Appointment model)
    {
      return _service.Save(model);
    }
    [HttpPost("read")]
    public ResponseDataModel read(Appointment model)
    {
      return _service.Get(model);
    }
    [HttpPost("delete")]
    public ResponseDataModel Delete
      (Appointment model)
    {
      return _service.Remove(model);
    }
  }
}
