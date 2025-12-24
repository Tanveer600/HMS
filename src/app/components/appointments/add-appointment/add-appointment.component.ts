import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Appointment } from '../../../core/models/appointment.model';
import { AppointmentService } from '../../../core/services/appointment.service';

import * as PatientActions from '../../../store/Patient/patient.actions';
import * as DoctorActions from '../../../store/Patient/Doctor/doctor.actions';

import { selectPatients } from '../../../store/Patient/patient.selectors';
import { selectDoctors } from '../../../store/Patient/Doctor/doctor.selectors';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './add-appointment.component.html'
})
export class AddAppointmentComponent implements OnInit {

  // ✅ Appointment model
  appoint: Appointment = {
    patientId: null!,
    doctorId: null!,
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: '',
    status: 'Active',
    reason: '',
    tokenNumber: 0,
    consultationFee: 0,
    createdOn: new Date().toISOString(),
    remarks: ''
  };

  // ✅ Dropdown data from store
  patients$!: Observable<any[]>;
  doctors$!: Observable<any[]>;
console: any;

  constructor(
    private router: Router,
    private appointmentService: AppointmentService,
    private store: Store
  ) { }

  ngOnInit(): void {
    // Load data once
    this.store.dispatch(PatientActions.loadPatients());
    this.store.dispatch(DoctorActions.loadDoctors());

    //  Select from store
    this.patients$ = this.store.select(selectPatients);
    this.doctors$ = this.store.select(selectDoctors);
  }

createAppointment() {
  if (!this.appoint.doctorId) { alert('Please select doctor'); return; }
  if (!this.appoint.patientId) { alert('Please select patient'); return; }

  // Convert strings to proper DateTime and TimeSpan formats
  const payload = {
    patientId: this.appoint.patientId,
    doctorId: this.appoint.doctorId,
    appointmentDate: this.appoint.appointmentDate, // "yyyy-MM-dd"
    appointmentTime: this.appoint.appointmentTime + ':00', // "HH:mm:ss"
    appointmentType: this.appoint.appointmentType,
    reason: this.appoint.reason,
    tokenNumber: this.appoint.tokenNumber,
    consultationFee: this.appoint.consultationFee,
    status: this.appoint.status,
    remarks: this.appoint.remarks,
    createdOn: new Date().toISOString()
  };

  console.log('Payload:', payload);

  this.appointmentService.saveAppointment(payload).subscribe({
    next: () => this.router.navigate(['/appointments']),
    error: err => console.error('API Error:', err)
  });
}
  cancel() {
    this.router.navigate(['/appointment']);
  }
}
