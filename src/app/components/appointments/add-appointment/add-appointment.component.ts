import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {
  /**
   *
   */
  constructor(private router:Router) {}
cancel(){
  this.router.navigate(['/appointment']);
}
}
