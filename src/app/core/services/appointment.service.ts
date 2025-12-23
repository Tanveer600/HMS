
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private api = 'https://localhost:7018/api/Appointment';

  constructor(private http: HttpClient) {}

  // Add or update appointment with optional photo
  saveAppointment(appointment: Appointment, file?: File): Observable<any> {
  const formData = new FormData();

  Object.entries(appointment).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      formData.append(key, value.toString());
    }
  });

  if (file) {
    // 🔥 MUST MATCH backend param name
    formData.append('photo', file);
  }

  return this.http.post(`${this.api}/save`, formData);
}

  // Get appointments
  getAppointments(filter?: Appointment): Observable<any> {
    return this.http.post(`${this.api}/get`, filter || {});
  }

  // Delete appointment
  deleteAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(`${this.api}/delete`, appointment);
  }
}
