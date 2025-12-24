import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from '../../../core/models/appointment.model';
import { Store } from '@ngrx/store';
import * as AppointmentActions from '../../../store/Appointment/appointment.actions';
import * as PatientActions from '../../../store/Patient/patient.actions';
import * as DoctorActions from '../../../store/Patient/Doctor/doctor.actions';  
import { selectAppointments, selectError, selectLoading } from '../../../store/Appointment/appointment.selector';
import { selectPatients } from '../../../store/Patient/patient.selectors';
import { selectDoctors } from '../../../store/Patient/Doctor/doctor.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-appointmentlist',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']  // ✅ fix here
})
export class AppointmentlistComponent implements OnInit {
  appointments$!: Observable<Appointment[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;
  patients$!: Observable<any[]>;
  doctors$!: Observable<any[]>;
  patientsList: any[] = [];
  doctorsList: any[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AppointmentActions.loadAppointments());
    this.store.dispatch(PatientActions.loadPatients());
    this.store.dispatch(DoctorActions.loadDoctors());

    this.appointments$ = this.store.select(selectAppointments);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.store.select(selectPatients).subscribe(p => (this.patientsList = p));
    this.store.select(selectDoctors).subscribe(d => (this.doctorsList = d));
  }

  getPatientName(id: number): string {
    const patient = this.patientsList.find(p => p.patientId === id);
    return patient ? patient.name : '-';
  }

  getDoctorName(id: number): string {
    const doctor = this.doctorsList.find(d => d.doctorId === id);
    return doctor ? doctor.firstName : '-';
  }

  deleteAppointment(id?: number): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this patient?')) return;

    this.store.dispatch(AppointmentActions.deleteAppointment({ appointmentId: id }));
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.getFullYear()}`;
  }
}
