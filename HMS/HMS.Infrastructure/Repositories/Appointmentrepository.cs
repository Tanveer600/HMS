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
  public class Appointmentrepository:IAppointmentRepository
  {
    private readonly DbDataContext _dbDataContext;
    public Appointmentrepository(DbDataContext dbDataContext)
    {
      _dbDataContext = dbDataContext;
    }
    public ResponseDataModel Create(Appointment patient)
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

    public ResponseDataModel Delete(Appointment patient)
    {
      ResponseDataModel response = new ResponseDataModel();
      try
      {
        var deletedata = _dbDataContext.appointments.FirstOrDefault(x => x.PatientId == patient.PatientId);
        if (deletedata != null)
        {
          _dbDataContext.Entry(deletedata).State = EntityState.Deleted;
          int n = _dbDataContext.SaveChanges();
          if (n > 0)
          {
            response.IsSuccess = true;
            response.Data = new List<Appointment> { patient };
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

    public ResponseDataModel Read(Appointment patient)
    {
      ResponseDataModel response = new ResponseDataModel();
      try
      {
        var patientList = _dbDataContext.appointments.AsQueryable();
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

    public ResponseDataModel Update(Appointment appointment)
    {
      ResponseDataModel response = new ResponseDataModel();
      try
      {
        var list = _dbDataContext.appointments.FirstOrDefault(x => x.PatientId == appointment.PatientId);
        if (list != null)
        {
          list.Remarks = appointment.Remarks;
          list.Status = appointment.Status;
          list.ConsultationFee = appointment.ConsultationFee;
          list.CreatedOn = appointment.CreatedOn;
          list.TokenNumber = appointment.TokenNumber;
          list.AppointmentDate = appointment.AppointmentDate;
          list.AppointmentTime = appointment.AppointmentTime;
          list.AppointmentType = appointment.AppointmentType;
          list.DoctorId = appointment.DoctorId;
          list.PatientId = appointment.PatientId;
          
          _dbDataContext.Entry(list).State = EntityState.Modified;
          int n = _dbDataContext.SaveChanges();
          if (n > 0)
          {
            response.IsSuccess = true;
            response.Data = new List<Appointment> { appointment };
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
