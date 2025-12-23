import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Doctor } from '../../../core/models/doctor.model';
import { DoctorService } from '../../../core/services/doctor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-doctor',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './edit-doctor.component.html',
  styleUrl: './edit-doctor.component.css'
})

/////
export class EditDoctorComponent implements OnInit {

  doctor: Doctor = {
    doctorId: 0,              
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      // 🔥 Load patient for edit
      this.doctorService.getDoctors({ doctorId: id } as any)
        .subscribe(res => {
          if (res.data?.length) {
            this.doctor = res.data[0];
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

  updateDoctor() {
    console.log('Updating doctor:', this.doctor);

    this.doctorService.saveDoctor(this.doctor, this.selectedFile)
      .subscribe({
        next: () => this.router.navigate(['/doctors']),
        error: err => console.error('Update failed', err)
      });
  }
cancel(){
  this.router.navigate(['/doctors']);
}
}