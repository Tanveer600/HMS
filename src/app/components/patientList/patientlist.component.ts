import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import * as PatientActions from '../../store/Patient/patient.actions';
import {
  selectPatients,
  selectLoading,
  selectError
} from '../../store/Patient/patient.selectors';

interface Patient {
  patientId?: number;
  name: string;
  guardianName: string;
  gender: string;
  dateOfBirth: string;
  age: string;
  bloodGroup: string;
  maritalStatus: string;
  phone: string;
  email: string;
  address: string;
  remarks: string;
  anyKnownAllergies: string;
  tpa: string;
  tpaId: string;
  tpaValidity: string;
  nationalIdentificationNumber: string;
  alternateNumber: string;
  patientPhoto?: string;
}

@Component({
  selector: 'app-patientlist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  patients$!: Observable<Patient[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // 🔥 Dispatch action
    this.store.dispatch(PatientActions.loadPatients());

    // 🔥 Select data from store
    this.patients$ = this.store.select(selectPatients);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  deletePatient(id?: number): void {
    if (!id) return;

    if (!confirm('Are you sure you want to delete this patient?')) return;

    // Simple approach: delete via API then reload
    // (NgRx delete effect bhi bana sakte hain next)
    this.store.dispatch(PatientActions.loadPatients());
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.getFullYear()}`;
  }
}
