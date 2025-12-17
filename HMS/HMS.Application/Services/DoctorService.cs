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
  public class DoctorService:IDoctorService
  {
    private readonly IDoctorRepository _repository;
    public DoctorService(IDoctorRepository repository)
    {
      _repository = repository;
    }
    public ResponseDataModel Remove(Doctor model)
    {
      return _repository.Delete(model);

    }

    public ResponseDataModel Get(Doctor model)
    {
      return _repository.Read(model);

    }

    public ResponseDataModel Save(Doctor model)
    {
      if (model.ID > 0)
        return _repository.Update(model);
      else
        return _repository.Create(model);
    }
  }
}
