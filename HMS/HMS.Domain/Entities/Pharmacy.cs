using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Domain.Entities
{
    public class Pharmacy
    {
        public int ID { get; set; }

        public string? MedicineName { get; set; }

        public string? MedicineCompany { get; set; }

        public string? MedicineComposition { get; set; }

        public string? MedicineCategory { get; set; }

        public string? MedicineGroup { get; set; }

        public string? Unit { get; set; }

        public int MinLevel { get; set; }

        public int ReOrderLevel { get; set; }

        public decimal Tax { get; set; }

        public string? BoxPacking { get; set; }

        public string? VatAC { get; set; }

        public string? RackNumber { get; set; }

        public string? Note { get; set; }

        public string? MedicinePhoto { get; set; }
    }
}
