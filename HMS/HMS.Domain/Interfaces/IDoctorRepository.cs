using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Interfaces
{
  public interface IDoctorRepository
  {
    ResponseDataModel Create(Doctor model);
    ResponseDataModel Delete(Doctor model);
    ResponseDataModel Update(Doctor model);
    ResponseDataModel Read(Doctor model);
  }
}
