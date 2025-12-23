import { createAction, props } from '@ngrx/store';

export const loadAppointments = createAction('[Appointment] Load');

export const loadAppointmentsSuccess = createAction(
  '[Appointment] Load Success',
  props<{ appointments: any[] }>()
);

export const loadAppointmentsFailure = createAction(
  '[Appointment] Load Failure',
  props<{ error: any }>()
);

// ✅ ADD THIS
// 🔥 SAVE (Create + Update)
export const saveAppointment = createAction(
  '[Appointment] Save',
  props<{ appointment: any; file?: File }>()
);
// ✅ DELETE
export const deleteAppointment = createAction(
  '[Appointment] Delete',
  props<{ appointmentId: number }>()
);