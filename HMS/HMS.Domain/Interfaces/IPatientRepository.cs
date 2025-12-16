using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Interfaces
{
  public interface IPatientRepository
  {
    ResponseDataModel Create(Patient patient);
    ResponseDataModel Delete(Patient patient);
    ResponseDataModel Update(Patient patient);
    ResponseDataModel Read(Patient patient);
  }
}
