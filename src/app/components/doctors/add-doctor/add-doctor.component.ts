import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
/**
 *
 */
constructor(private router:Router) { }
cancel(){
  this.router.navigate(['/doctors']);
}
}
