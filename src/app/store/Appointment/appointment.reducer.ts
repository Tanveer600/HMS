import { createReducer, on } from '@ngrx/store';
import * as AppointmentActions from './appointment.actions';
import { initialState } from './appointment.state';

export const appointmentReducer = createReducer(
  initialState,

  on(AppointmentActions.loadAppointments, state => ({
    ...state,
    loading: true
  })),

  on(AppointmentActions.loadAppointmentsSuccess, (state, { appointments }) => ({
    ...state,
    appointments,
    loading: false
  })),

  // ✅ NOW THIS WILL WORK
  on(AppointmentActions.saveAppointment, (state, { appointment }) => ({
    ...state,
    appointments: [...state.appointments, appointment]
  }))
);
