import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' }) // ✅ Ensure providedIn root
export class PatientService {
  private api = 'https://localhost:7018/api/Patient';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  addPatient(patient: any): Observable<any> {
    return this.http.post(this.api, patient);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.http.put(`${this.api}/${id}`, patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
