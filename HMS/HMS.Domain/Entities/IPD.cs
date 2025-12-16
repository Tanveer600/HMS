using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Entities
{
    public class IPD
    {
        public int ID { get; set; }

        public DateTime AdmissionDate { get; set; }

        public string? Case { get; set; }

        public string? TPA { get; set; }

        public string? Casualty { get; set; }

        public string? OldPatient { get; set; }

        public decimal CreditLimit { get; set; }

        public string? Reference { get; set; }

        public string? ConsultantDoctor { get; set; }

        public string? BedGroup { get; set; }

        public string? BedNumber { get; set; }

        public string? LiveConsultation { get; set; }
    }
}
