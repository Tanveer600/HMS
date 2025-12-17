using HMS.Domain.DataModel;
using HMS.Domain.Entities;
using HMS.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Infrastructure.Repositories
{
  public class DoctorRepopsitory:IDoctorRepository
  {
    private readonly DbDataContext _dbDataContext;
    public DoctorRepopsitory(DbDataContext dbDataContext)
    {
      _dbDataContext = dbDataContext;
    }
    public ResponseDataModel Create(Doctor patient)
    {
      ResponseDataModel response = new ResponseDataModel();
      try
      {
        _dbDataContext.Add(patient);
        _dbDataContext.SaveChanges();
        response.IsSuccess = true;
        response.Message = "data created successfully";
      }
      catch (Exception ex)
      {

        response.IsSuccess = false;
        response.Message = ex.Message;

      }
      return response;
    }

    public ResponseDataModel Delete(Doctor patient)
    {
      ResponseDataModel response = new ResponseDataModel();
      try
      {
        var deletedata = _dbDataContext.doctors.FirstOrDefault(x => x.ID == patient.ID);
        if (deletedata != null)
        {
          _dbDataContext.Entry(deletedata).State = EntityState.Deleted;
          int n = _dbDataContext.SaveChanges();
          if (n > 0)
          {
            response.IsSuccess = true;
            response.Data = new List<Doctor> { patient };
            response.Message = "data deleted successfully";
            if (n == 0)
            {
              response.Message = "data not deleted";
            }
          }
        }
      }
      catch (Exception ex)
      {

        response.Message = ex.Message;
        response.IsSuccess = false;
      }
      return response;
    }

    public ResponseDataModel Read(Doctor patient)
    {
      ResponseDataModel response = new ResponseDataModel();
      try
      {
        var patientList = _dbDataContext.doctors.AsQueryable();
        if (patientList.Any())
        {
          response.IsSuccess = true;
          response.Data = patientList.ToList();
        }
      }
      catch (Exception ex)
      {

        response.IsSuccess = false;
        response.Message = (string)ex.Message;

      }
      return response;
    }

    public ResponseDataModel Update(Doctor patient)
    {
      ResponseDataModel response = new ResponseDataModel();
      try
      {
        var list = _dbDataContext.doctors.FirstOrDefault(x => x.ID == patient.ID);
        if (list != null)
        {
          list.Province = patient.Province;
          list.ShortBioGraphy = patient.ShortBioGraphy;
          list.DateOfBirth = patient.DateOfBirth;
          list.FirstName = patient.FirstName;
          list.DateOfBirth = patient.DateOfBirth;
          list.City = patient.City;
          list.Gender = patient.Gender;
          list.Country = patient.Country;
          list.Email = patient.Email;
          
          _dbDataContext.Entry(list).State = EntityState.Modified;
          int n = _dbDataContext.SaveChanges();
          if (n > 0)
          {
            response.IsSuccess = true;
            response.Data = new List<Doctor> { patient };
            response.Message = "data is not deleted";
          }
        }
      }
      catch (Exception ex)
      {

        response.IsSuccess = false;
        response.ErrorResponse = ex;
      }
      return response;
    }
  }
}
