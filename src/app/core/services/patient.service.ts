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

    for (const key in patient) {
      if (patient[key as keyof Patient] != null) {
        formData.append(key, patient[key as keyof Patient] as string);
      }
    }

    if (file) {
      formData.append('photo', file, file.name);
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
