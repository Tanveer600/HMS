export interface Appointment {
  appointmentId?: number;        // int
  patientId: number;             // int
  doctorId: number;              // int
  appointmentDate: string;       // DateTime → ISO string (yyyy-MM-dd)
  appointmentTime: string;       // TimeSpan → "HH:mm:ss"
  appointmentType?: string;      // string?
  status?: string;               // string?
  reason?: string;               // string?
  tokenNumber: number;           // int
  consultationFee: number;       // decimal
  createdOn?: string;            // DateTime
  remarks?: string;              // string?
}
