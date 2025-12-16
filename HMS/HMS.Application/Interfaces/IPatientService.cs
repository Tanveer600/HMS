using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Application.Interfaces
{
  public interface IPatientService
  {
    ResponseDataModel Save(Patient patient);
    ResponseDataModel Get(Patient patient);
    ResponseDataModel Remove(Patient patient);

  }
}
