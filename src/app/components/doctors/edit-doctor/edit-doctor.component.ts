import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-doctor',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './edit-doctor.component.html',
  styleUrl: './edit-doctor.component.css'
})
export class EditDoctorComponent {
/**
 *
 */
constructor(private router:Router) {}
cancel(){
  this.router.navigate(['/doctors']);
}
}
