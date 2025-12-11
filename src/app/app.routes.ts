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
            .then(m => m.PatientComponent)
      },

      {
        path: 'doctors',
        loadComponent: () =>
          import('./components/doctor/doctor.component')
            .then(m => m.DoctorComponent)
      }
    ]
  }
];
