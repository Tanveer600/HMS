import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../../core/models/appointment.model';
import { AppointmentService } from '../../../core/services/appointment.service';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {

  // ✅ Define appointment model
  appoint: Appointment = {
    appointmentId: 0,
    patientId: 0,
    doctorId: 0,
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: '',
    status: 'Active',
    reason: '',
    tokenNumber: 0,
    consultationFee: 0,
    createdOn: new Date().toISOString(), // initialize to current date
    remarks: ''
  };

  constructor(private router: Router, private appointmentService: AppointmentService) {}

  // ✅ Submit form
  createAppointment() {
    console.log('Appointment data before save:', this.appoint);

    this.appointmentService.saveAppointment(this.appoint).subscribe({
      next: (res) => {
        console.log('Appointment saved:', res);
        this.router.navigate(['/appointments']); // navigate to appointment list
      },
      error: (err) => console.error('Error saving appointment:', err)
    });
  }

  // ✅ Cancel button
  cancel() {
    this.router.navigate(['/appointments']);
  }
}
