import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as DoctorActions from './doctor.actions';
import { DoctorService } from '../../../core/services/doctor.service';

@Injectable()
export class DoctorEffects {
  
  private actions$ = inject(Actions);
  private doctorService = inject(DoctorService);

  // 🔹 Load doctors
  loadDoctors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.loadDoctors),
      mergeMap(() =>
        this.doctorService.getDoctors().pipe(
          map(res => DoctorActions.loadDoctorsSuccess({ doctors: res.data || [] })),
          catchError(error => of(DoctorActions.loadDoctorsFailure({ error })))
        )
      )
    )
  );

  // 🔹 Save doctor (Create + Update)
  saveDoctor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.saveDoctor),
      mergeMap(action =>
        this.doctorService.saveDoctor(action.doctor, action.file).pipe(
          map(() => DoctorActions.loadDoctors()), // reload list after save
          catchError(error => of(DoctorActions.loadDoctorsFailure({ error })))
        )
      )
    )
  );

  // 🔹 Delete doctor
  deleteDoctor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.deleteDoctor),
      mergeMap(action =>
        this.doctorService.deleteDoctor({ doctorId: action.doctorId } as any).pipe(
          map(() => DoctorActions.loadDoctors()), // reload list after delete
          catchError(error => of(DoctorActions.loadDoctorsFailure({ error })))
        )
      )
    )
  );
}
