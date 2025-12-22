import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({ providedIn: 'root' })
export class PatientService {
  private api = 'https://localhost:7018/api/Patient';

  constructor(private http: HttpClient) {}

  // Add or update patient with optional photo
  savePatient(patient: Patient, file?: File): Observable<any> {
  const formData = new FormData();

  Object.entries(patient).forEach(([key, value]) => {
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

  // Get patients
  getPatients(filter?: Patient): Observable<any> {
    return this.http.post(`${this.api}/get`, filter || {});
  }

  // Delete patient
  deletePatient(patient: Patient): Observable<any> {
    return this.http.post(`${this.api}/delete`, patient);
  }
}
