using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Interfaces
{
  public interface IAppointmentRepository
  {
    ResponseDataModel Create(Appointment model);
    ResponseDataModel Delete(Appointment model);
    ResponseDataModel Update(Appointment model);
    ResponseDataModel Read(Appointment model);
  }
}
