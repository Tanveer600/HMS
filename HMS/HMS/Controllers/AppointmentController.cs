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
  public class AppointmentController : ControllerBase
  {
    private readonly IAppointmentService _service;
    public AppointmentController(IAppointmentService service)
    {
        _service = service;
    }
    [HttpPost("save")]
    public ResponseDataModel Save([FromBody] Appointment model)
    {
      return _service.Save(model);
    }
    [HttpPost("get")]
    public ResponseDataModel Get([FromBody] Appointment model)
    {
      return _service.Get(model);
    }
    [HttpPost("delete")]
    public ResponseDataModel Delete ([FromBody] Appointment model)
    {
      return _service.Remove(model);
    }
  }
}
