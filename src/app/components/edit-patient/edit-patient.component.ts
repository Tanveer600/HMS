import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Patient } from '../../core/models/patient.model';
import { PatientService } from '../../core/services/patient.service';

@Component({
  selector: 'app-edit-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-patient.component.html',
  styleUrl: './edit-patient.component.css'
})
export class EditPatientComponent implements OnInit {

  patient: Patient = {
    patientId: 0,              // 🔥 MUST
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      // 🔥 Load patient for edit
      this.patientService.getPatients({ patientId: id } as any)
        .subscribe(res => {
          if (res.data?.length) {
            this.patient = res.data[0];
          }
        });
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  updatePatient() {
    console.log('Updating patient:', this.patient);

    this.patientService.savePatient(this.patient, this.selectedFile)
      .subscribe({
        next: () => this.router.navigate(['/patients']),
        error: err => console.error('Update failed', err)
      });
  }

  cancel() {
    this.router.navigate(['/patients']);
  }
}
