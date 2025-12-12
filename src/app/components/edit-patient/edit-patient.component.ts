import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-patient',
  standalone: true,
  imports: [],
  templateUrl: './edit-patient.component.html',
  styleUrl: './edit-patient.component.css'
})
export class EditPatientComponent {
  /**
   *
   */
  constructor(private router:Router) {}
  cancel(){
    this.router.navigate(['/patients']);
  }
}
