using HMS.Application.Interfaces;
using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using HMS.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Application.Services
{
  public class AppointmentService:IAppointmentService
  {
    private readonly IAppointmentRepository _repository;
    public AppointmentService(IAppointmentRepository repository)
    {
      _repository = repository;
    }
    public ResponseDataModel Remove(Appointment model)
    {
      return _repository.Delete(model);

    }

    public ResponseDataModel Get(Appointment model)
    {
      return _repository.Read(model);

    }

    public ResponseDataModel Save(Appointment model)
    {
      if (model.AppointmentId > 0)
        return _repository.Update(model);
      else
        return _repository.Create(model);
    }
  }
}
