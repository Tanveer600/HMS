import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appointment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './edit-appointment.component.html',
  styleUrl: './edit-appointment.component.css'
})
export class EditAppointmentComponent {
/**
 *
 */
constructor(private router:Router) {}
cancel(){
  this.router.navigate(['/appointment']);
}
}
