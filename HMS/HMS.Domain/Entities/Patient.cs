using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Entities
{
    public class Patient
    {
        public int PatientId { get; set; }

        [Required]
        public string ? Name { get; set; }

        public string? GuardianName { get; set; }

        // Dropdown
        public string? Gender { get; set; }

        // Date Picker
        public DateTime DateOfBirth { get; set; }

        // Auto calculated (yy-mm-dd)
        public string? Age { get; set; }

        // Dropdown
        public string? BloodGroup { get; set; }

        // Dropdown
        public string? MaritalStatus { get; set; }

        // Patient photo path
        public string? PatientPhoto { get; set; }

        [Phone]
        public string? Phone { get; set; }

        [EmailAddress]
        public string ? Email { get; set; }

        public string? Address { get; set; }

        public string? Remarks { get; set; }

        public string? AnyKnownAllergies { get; set; }

        // Dropdown (Yes / No or TPA Name)
        public string? TPA { get; set; }

        public string? TPAId { get; set; }

        public DateTime? TPAValidity { get; set; }

        public string NationalIdentificationNumber { get; set; }

        public string AlternateNumber { get; set; }
    }
}
