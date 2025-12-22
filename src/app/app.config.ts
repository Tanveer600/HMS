import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { patientReducer } from './store/Patient/patient.reducer';
import { PatientEffects } from './store/Patient/patient.useeffect';
import { doctorReducer } from './store/Patient/Doctor/doctor.reducer';
import { DoctorEffects } from './store/Patient/Doctor/doctor.useeffect';

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  provideHttpClient(),
  provideStore({ patient: patientReducer,doctor: doctorReducer }),
  provideEffects([PatientEffects,DoctorEffects]),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]

};
