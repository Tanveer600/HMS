import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../core/models/patient.model';
import { PatientService } from '../../core/services/patient.service';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patient: Patient = {
    name: '',
    guardianName: '',
    gender: '',
    dateOfBirth: '',
    age: '',
    bloodGroup: '',
    maritalStatus: '',
    phone: '',
    email: '',
    address: '',
    remarks: '',
    anyKnownAllergies: '',
    tpa: '',
    tpaId: '',
    tpaValidity: '',
    nationalIdentificationNumber: '',
    alternateNumber: '',
    patientPhoto: ''
  };

  selectedFile?: File;

  constructor(private router: Router, private patientService: PatientService) {}

  cancel() {
    this.router.navigate(['/patients']);
  }

onFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
    this.patient.patientPhoto = this.selectedFile.name; // optional
  }
}


  createPatient() {
    console.log('Patient data before save:', this.patient, this.selectedFile);

    this.patientService.savePatient(this.patient, this.selectedFile).subscribe({
      next: (res) => {
        console.log('Patient saved:', res);
        this.router.navigate(['/patients']);
      },
      error: (err) => console.error('Error saving patient:', err)
    });
  }
}
