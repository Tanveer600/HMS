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
  public class PatientRepository : IPatientRepository
  {
    private readonly DbDataContext _dbDataContext;
    public PatientRepository(DbDataContext dbDataContext)
    {
        _dbDataContext = dbDataContext;
    }
    public ResponseDataModel Create(Patient patient)
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

    public ResponseDataModel Delete(Patient patient)
    {
     ResponseDataModel response = new ResponseDataModel();
      try
      {
        var deletedata = _dbDataContext.patients.FirstOrDefault(x => x.PatientId == patient.PatientId);
        if (deletedata != null)
        {
          _dbDataContext.Entry(deletedata).State = EntityState.Deleted;
          int n = _dbDataContext.SaveChanges();
          if (n > 0)
          {
            response.IsSuccess=true;
            response.Data=new List<Patient> { patient};
            response.Message = "data deleted successfully";
            if(n==0)
            {
              response.Message = "data not deleted";
            }
          }
        }
      }
      catch (Exception ex)
      {

      response.Message=ex.Message;
      response.IsSuccess = false;
      }
      return response;
    }

    public ResponseDataModel Read(Patient patient)
    {
      ResponseDataModel response=new ResponseDataModel();
      try
      {
        var patientList = _dbDataContext.patients.AsQueryable();
        if (patientList.Any())
        {
          response.IsSuccess = true;
          response.Data=patientList.ToList(); 
      }
      }
      catch (Exception ex)
      {

     response.IsSuccess=false;
        response.Message=(string)ex.Message;
        
      }
      return response;
    }

    public ResponseDataModel Update(Patient patient)
    {
      ResponseDataModel response=new ResponseDataModel();
      try
      {
        var list = _dbDataContext.patients.FirstOrDefault(x => x.PatientId == patient.PatientId);
        if (list != null)
        {
          list.Remarks = patient.Remarks;
          list.MaritalStatus = patient.MaritalStatus;
          list.BloodGroup = patient.BloodGroup;
          list.PatientPhoto = patient.PatientPhoto;
          list.DateOfBirth = patient.DateOfBirth;
          list.Phone = patient.Phone;
          list.Address = patient.Address;
          list.TPA = patient.TPA;
          list.Email = patient.Email;
          list.TPAId = patient.TPAId;
          list.AlternateNumber = patient.AlternateNumber;
          list.AnyKnownAllergies = patient.AnyKnownAllergies;
          list.TPAValidity = patient.TPAValidity;
          _dbDataContext.Entry(list).State = EntityState.Modified;
          int n = _dbDataContext.SaveChanges();
          if (n > 0)
          {
            response.IsSuccess = true;
            response.Data=new List<Patient> { patient };
            response.Message = "data is not deleted";
          }
        }
      }
      catch (Exception ex)
      {

      response.IsSuccess=false;
        response.ErrorResponse = ex;
      }
      return response;
    }
  }
}
