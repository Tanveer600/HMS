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
  public class PatientService : IPatientService
  {
    private readonly IPatientRepository _repository;
    public PatientService(IPatientRepository repository)
    {
        _repository = repository;
    }
    public ResponseDataModel Remove(Patient patient)
    {   
        return _repository.Delete(patient);
 
    }

    public ResponseDataModel Get(Patient patient)
    {
      return _repository.Read(patient);

    }

    public ResponseDataModel Save(Patient patient)
    {
      if(patient.PatientId>0)
        return _repository.Update(patient);
      else
         return _repository.Create(patient);  
    }
  }
}
