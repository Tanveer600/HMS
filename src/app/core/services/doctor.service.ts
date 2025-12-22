import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private api = 'https://localhost:7018/api/Doctor';

  constructor(private http: HttpClient) {}

  // Add or update doctor with optional photo
  saveDoctor(doctor: Doctor, file?: File): Observable<any> {
  const formData = new FormData();

  Object.entries(doctor).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      formData.append(key, value.toString());
    }
  });

  if (file) {
    // MUST MATCH backend param name
    formData.append('photo', file);
  }

  return this.http.post(`${this.api}/save`, formData);
}

  // Get doctors
  getDoctors(filter?: Doctor): Observable<any> {
    return this.http.post(`${this.api}/get`, filter || {});
  }

  // Delete doctor
  deleteDoctor(doctor: Doctor): Observable<any> {
    return this.http.post(`${this.api}/delete`, doctor);
  }
}
