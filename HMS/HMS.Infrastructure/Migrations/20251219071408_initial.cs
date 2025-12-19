using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HMS.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "appointments",
                columns: table => new
                {
                    AppointmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    DoctorId = table.Column<int>(type: "int", nullable: false),
                    AppointmentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AppointmentTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    AppointmentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TokenNumber = table.Column<int>(type: "int", nullable: false),
                    ConsultationFee = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    IsFollowUp = table.Column<bool>(type: "bit", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_appointments", x => x.AppointmentId);
                });

            migrationBuilder.CreateTable(
                name: "doctors",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<bool>(type: "bit", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Province = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShortBioGraphy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_doctors", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ipds",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdmissionDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Case = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TPA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Casualty = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OldPatient = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreditLimit = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Reference = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConsultantDoctor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BedGroup = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BedNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LiveConsultation = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ipds", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "opds",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppointmentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Case = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Casualty = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OldPatient = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Reference = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConsultantDoctor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ApplyTPA = table.Column<bool>(type: "bit", nullable: false),
                    ChargeCategory = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Charge = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StandardCharge = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    AppliedCharge = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Discount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Tax = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PaymentMode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaidAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LiveConsultation = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_opds", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "patients",
                columns: table => new
                {
                    PatientId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GuardianName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Age = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BloodGroup = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MaritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientPhoto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnyKnownAllergies = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TPA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TPAId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TPAValidity = table.Column<DateTime>(type: "datetime2", nullable: true),
                    NationalIdentificationNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AlternateNumber = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patients", x => x.PatientId);
                });

            migrationBuilder.CreateTable(
                name: "pharmacies",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MedicineName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MedicineCompany = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MedicineComposition = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MedicineCategory = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MedicineGroup = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Unit = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MinLevel = table.Column<int>(type: "int", nullable: false),
                    ReOrderLevel = table.Column<int>(type: "int", nullable: false),
                    Tax = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    BoxPacking = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VatAC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RackNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MedicinePhoto = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pharmacies", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "appointments");

            migrationBuilder.DropTable(
                name: "doctors");

            migrationBuilder.DropTable(
                name: "ipds");

            migrationBuilder.DropTable(
                name: "opds");

            migrationBuilder.DropTable(
                name: "patients");

            migrationBuilder.DropTable(
                name: "pharmacies");
        }
    }
}
