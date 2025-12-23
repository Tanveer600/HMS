import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AppointmentActions from './appointment.actions';
import { AppointmentService } from '../../core/services/appointment.service';

@Injectable()
export class AppointmentEffects {

  private actions$ = inject(Actions);
  private appointmentService = inject(AppointmentService);

  // 🔹 LOAD appointments
  loadAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentActions.loadAppointments),
      mergeMap(() =>
        this.appointmentService.getAppointments().pipe(
          map(res =>
            AppointmentActions.loadAppointmentsSuccess({
              appointments: res.data || []
            })
          ),
          catchError(error =>
            of(AppointmentActions.loadAppointmentsFailure({ error }))
          )
        )
      )
    )
  );

  // 🔹 SAVE appointment (Create + Update)
  saveAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentActions.saveAppointment),
      mergeMap(action =>
        this.appointmentService.saveAppointment(action.appointment).pipe(
          map(() => AppointmentActions.loadAppointments()), // refresh list
          catchError(error =>
            of(AppointmentActions.loadAppointmentsFailure({ error }))
          )
        )
      )
    )
  );

  // 🔹 DELETE appointment
  deleteAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentActions.deleteAppointment),
      mergeMap(action =>
        this.appointmentService
          .deleteAppointment({ appointmentId: action.appointmentId } as any)
          .pipe(
            map(() => AppointmentActions.loadAppointments()),
            catchError(error =>
              of(AppointmentActions.loadAppointmentsFailure({ error }))
            )
          )
      )
    )
  );
}
