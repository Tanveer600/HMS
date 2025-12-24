import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Appointment } from '../../../core/models/appointment.model';
import { FormsModule } from '@angular/forms';
import * as PatientActions from '../../../store/Patient/patient.actions'; 
import * as DoctorActions from '../../../store/Patient/Doctor/doctor.actions';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../../core/services/appointment.service';
import { Observable } from 'rxjs';
import { selectPatients } from '../../../store/Patient/patient.selectors';
import { selectDoctors } from '../../../store/Patient/Doctor/doctor.selectors';
@Component({
  selector: 'app-edit-appointment',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './edit-appointment.component.html',
  styleUrl: './edit-appointment.component.css'
})

export class EditAppointmentComponent implements OnInit {

   // ✅ Appointment model
  appoint: Appointment = {
     appointmentId: 0,
    patientId: null!,
    doctorId: null!,
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: '',
    status: '',
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
  store: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
     // Load data once
        this.store.dispatch(PatientActions.loadPatients());
        this.store.dispatch(DoctorActions.loadDoctors());
    
        //  Select from store
        this.patients$ = this.store.select(selectPatients);
        this.doctors$ = this.store.select(selectDoctors);
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      // 🔥 Load patient for edit
      this.appointmentService.getAppointments({ patientId: id } as any)
        .subscribe(res => {
          if (res.data?.length) {
            this.appoint = res.data[0];
          }
        });
    }
  }



  updateAppointment() {
    console.log('Updating appointment:', this.appoint);

    this.appointmentService.saveAppointment(this.appoint)
      .subscribe({
        next: () => this.router.navigate(['/patients']),
        error: err => console.error('Update failed', err)
      });
  }

  cancel() {
    this.router.navigate(['/appointment']);
  }
}