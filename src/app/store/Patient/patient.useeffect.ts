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
          map(patients =>
            PatientActions.loadPatientsSuccess({ patients })
          ),
          catchError(error =>
            of(PatientActions.loadPatientsFailure({ error }))
          )
        )
      )
    )
  );
}
