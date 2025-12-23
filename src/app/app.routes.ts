import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },

      {
        path: 'patients',
        loadComponent: () =>
          import('./components/patient/patient.component')
            .then(m => m.PatientComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./components/patientList/patientlist.component')
                .then(m => m.PatientlistComponent)
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./components/add-patient/add-patient.component')
                .then(m => m.AddPatientComponent)
          },
          {
            path: 'edit/:id', // ✅ FIXED
            loadComponent: () =>
              import('./components/edit-patient/edit-patient.component')
                .then(m => m.EditPatientComponent)
          }
        ]
      },

      {

        path: 'doctors',
        loadComponent: () => import('./components/doctors/doctor/doctor.component').then(m => m.DoctorComponent),
        children: [
          { path: '', loadComponent: () => import('./components/doctors/doctorslist/doctorslist.component').then(m => m.DoctorslistComponent) },
          { path: 'add', loadComponent: () => import('./components/doctors//add-doctor/add-doctor.component').then(m => m.AddDoctorComponent) },
          { path: 'edit/:id', loadComponent: () => import('./components/doctors/edit-doctor/edit-doctor.component').then(m => m.EditDoctorComponent) }
        ]
      },


      {
        path: 'appointment',
        loadComponent: () =>
          import('./components/appointments/appointment/appointment.component')
            .then(m => m.AppointmentComponent),
        children: [
          { path: '', loadComponent: () => import('./components/appointments/appointmentlist/appointmentlist.component').then(m => m.AppointmentlistComponent) },
          { path: 'add', loadComponent: () => import('./components/appointments//add-appointment/add-appointment.component').then(m => m.AddAppointmentComponent) },
          { path: 'edit', loadComponent: () => import('./components/appointments/edit-appointment/edit-appointment.component').then(m => m.EditAppointmentComponent) }
        ]
      }
    ]
  }
];
