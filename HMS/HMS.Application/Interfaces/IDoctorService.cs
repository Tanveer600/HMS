using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Application.Interfaces
{
  public interface IDoctorService
  {
    ResponseDataModel Save(Doctor model);
    ResponseDataModel Get(Doctor model);
    ResponseDataModel Remove(Doctor model);
  }
}
