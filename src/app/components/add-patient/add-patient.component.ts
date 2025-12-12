import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  /**
   *
   */
  constructor(private router:Router) { }
cancel(){
  this.router.navigate(['/patients']);
}
}
