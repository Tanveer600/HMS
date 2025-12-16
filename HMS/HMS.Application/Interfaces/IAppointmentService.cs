using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Application.Interfaces
{
  public interface IAppointmentService
  {
    ResponseDataModel Save(Appointment model);
    ResponseDataModel Get(Appointment model);
    ResponseDataModel Remove(Appointment model);
  }
}
