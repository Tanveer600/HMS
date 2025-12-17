using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Entities
{
    public class Appointment
    {
        public int AppointmentId { get; set; }

        public int PatientId { get; set; }

        public int DoctorId { get; set; }

        public DateTime AppointmentDate { get; set; }

        public TimeSpan AppointmentTime { get; set; }

        public string? AppointmentType { get; set; }

        public string? Status { get; set; }

        public string? Reason { get; set; }

        public int TokenNumber { get; set; }

        public decimal ConsultationFee { get; set; }

        public bool IsFollowUp { get; set; }

        public DateTime CreatedOn { get; set; }

        public string? Remarks { get; set; }
    }
}
