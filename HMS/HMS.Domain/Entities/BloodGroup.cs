using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Entities
{
    public class BloodGroup
    {
        public int ID { get; set; }

        public string? DonorName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string? BloodGroupS { get; set; }

        public string? Gender { get; set; }

        public string? FatherName { get; set; }

        public string? ContactNo { get; set; }

        public string? Address { get; set; }
    }
}
