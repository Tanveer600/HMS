import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { patientReducer } from './store/Patient/patient.reducer';
import { PatientEffects } from './store/Patient/patient.useeffect';

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  provideHttpClient(),
  provideStore({ patient: patientReducer }),
  provideEffects([PatientEffects]),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]

};
