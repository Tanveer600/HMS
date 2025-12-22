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
 // 🔥 SAVE (Create + Update)
  savePatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.savePatient),
      mergeMap(action =>
        this.patientService.savePatient(action.patient, action.file).pipe(
          map(() => PatientActions.loadPatients()), // refresh list
          catchError(error =>
            of(PatientActions.loadPatientsFailure({ error }))
          )
        )
      )
    )
  );
   // ✅ DELETE EFFECT
  deletePatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.deletePatient),
      mergeMap(action =>
        this.patientService.deletePatient({ patientId: action.patientId } as any).pipe(
          map(() => PatientActions.loadPatients()), // 🔥 refresh list
          catchError(error =>
            of(PatientActions.loadPatientsFailure({ error }))
          )
        )
      )
    )
  );
}
