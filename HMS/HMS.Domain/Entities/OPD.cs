using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Entities
{
    public class OPD
    {
        public int OPDOutPatientId { get; set; }

        public DateTime AppointmentDate { get; set; }

        public string? Case { get; set; }

        public string? Casualty { get; set; }

        public string? OldPatient { get; set; }

        public string? Reference { get; set; }

        public string? ConsultantDoctor { get; set; }

        public bool ApplyTPA { get; set; }

        public string? ChargeCategory { get; set; }

        public string? Charge { get; set; }

        public decimal StandardCharge { get; set; }

        public decimal AppliedCharge { get; set; }

        public decimal Discount { get; set; }

        public decimal Tax { get; set; }

        public decimal Amount { get; set; }

        public string ? PaymentMode { get; set; }

        public decimal PaidAmount { get; set; }

        public string ? LiveConsultation { get; set; }
    }

}

