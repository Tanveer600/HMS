using System.Globalization;
using HMS.Application.Interfaces;
using HMS.Application.Services;
using HMS.Domain.Interfaces;
using HMS.Infrastructure;
using HMS.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

// ✅ CULTURE FIX (MUST BE HERE)
CultureInfo.DefaultThreadCurrentCulture = CultureInfo.InvariantCulture;
CultureInfo.DefaultThreadCurrentUICulture = CultureInfo.InvariantCulture;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// 🔹 CORS policy
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowAngular", builder =>
  {
    builder.WithOrigins("http://localhost:4200")
           .AllowAnyHeader()
           .AllowAnyMethod();
  });
});


builder.Services.AddDbContext<DbDataContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("conn")));

builder.Services.AddScoped<IDoctorService, DoctorService>();
builder.Services.AddScoped<IDoctorRepository, DoctorRepopsitory>();
builder.Services.AddScoped<IAppointmentService, AppointmentService>();
builder.Services.AddScoped<IAppointmentRepository, Appointmentrepository>();
builder.Services.AddScoped<IPatientService, PatientService>();
builder.Services.AddScoped<IPatientRepository, PatientRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseStaticFiles(); // ye already ho sakta hai

// Serve uploads folder
app.UseStaticFiles(new StaticFileOptions
{
  FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads")),
  RequestPath = "/uploads"
});
// 🔹 Use CORS
app.UseCors("AllowAngular");

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
