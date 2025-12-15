using HMS.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMS.Infrastructure
{
    public class DbDataContext:DbContext
    {
        public DbDataContext(DbContextOptions<DbDataContext>options)
            : base(options) 
        {           
        }
         public DbSet<Pharmacy> pharmacies { get; set; }
         public DbSet<Doctor> doctors { get; set; }
         public DbSet<IPD> ipds { get; set; }
         public DbSet<OPD> opds { get; set; }
         public DbSet<Patient> patients { get; set; }
         public DbSet<Appointment> appointments { get; set; }
    }
}
