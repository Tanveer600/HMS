import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as PatientActions from './patient.actions';
import { PatientService } from '../../core/services/patient.service';

@Injectable()
export class PatientEffects {
  constructor(private actions$: Actions, private patientService: PatientService) {}

  loadPatients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.loadPatients),
      mergeMap(() =>
        this.patientService.getPatients().pipe(
          map(patients => PatientActions.loadPatientsSuccess({ patients })),
          catchError(error => of(PatientActions.loadPatientsFailure({ error })))
        )
      )
    )
  );

  addPatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.addPatient),
      mergeMap(action =>
        this.patientService.addPatient(action.patient).pipe(
          map(patient => PatientActions.addPatientSuccess({ patient })),
          catchError(error => of(PatientActions.addPatientFailure({ error })))
        )
      )
    )
  );

  updatePatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.updatePatient),
      mergeMap(action =>
        this.patientService.updatePatient(action.id, action.patient).pipe(
          map(patient => PatientActions.updatePatientSuccess({ patient })),
          catchError(error => of(PatientActions.updatePatientFailure({ error })))
        )
      )
    )
  );

  deletePatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.deletePatient),
      mergeMap(action =>
        this.patientService.deletePatient(action.id).pipe(
          map(() => PatientActions.deletePatientSuccess({ id: action.id })),
          catchError(error => of(PatientActions.deletePatientFailure({ error })))
        )
      )
    )
  );
}
