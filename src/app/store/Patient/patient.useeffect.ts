import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PatientActions from './patient.actions';
import { PatientService } from '../../core/services/patient.service';

@Injectable()
export class PatientEffects {

  private actions$ = inject(Actions);          // ✅ FIX
  private patientService = inject(PatientService);

 loadPatients$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PatientActions.loadPatients),
    mergeMap(() =>
      this.patientService.getPatients().pipe(
        map(res => PatientActions.loadPatientsSuccess({ patients: res.data || [] })),
        catchError(error => of(PatientActions.loadPatientsFailure({ error })))
      )
    )
  )
);
 // ✅ Add patient effect
  addPatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.addPatient),
      mergeMap(action =>
        this.patientService.savePatient(action.patient).pipe(
          map(() => PatientActions.loadPatients()), // reload list
          catchError(error => of(PatientActions.loadPatientsFailure({ error })))
        )
      )
    )
  );
}
