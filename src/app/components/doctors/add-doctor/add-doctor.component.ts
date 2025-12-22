import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DoctorService } from '../../../core/services/doctor.service';
import { Doctor } from '../../../core/models/doctor.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})


export class AddDoctorComponent {

  doctor: Doctor = {
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    city: '',
    doctorPhoto: '',
    country: '',
    email: '',
    PostalCode: '',
    shortBioGraphy: '',
    province: ''
  };

  selectedFile?: File;

  constructor(private router: Router, private doctorService: DoctorService) {}

 cancel(){
  this.router.navigate(['/doctors']);
}

onFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
    this.doctor.doctorPhoto = this.selectedFile.name; // optional
  }
}


  createDoctor() {
    console.log('SUBMIT CLICKED', this.doctor);
    console.log('Doctor data before save:', this.doctor, this.selectedFile);

    this.doctorService.saveDoctor(this.doctor, this.selectedFile).subscribe({
      next: (res) => {
        console.log('Doctor saved:', res);
        this.router.navigate(['/doctors']);
      },
      error: (err) => console.error('Error saving doctor:', err)
    });
  }
}



