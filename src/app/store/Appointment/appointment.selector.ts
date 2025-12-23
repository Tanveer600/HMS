import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppointmentState } from './appointment.state';

export const selectAppointmentState = createFeatureSelector<AppointmentState>('appointment');

export const selectAppointments = createSelector(
  selectAppointmentState,
  state => state.appointments   
);

export const selectLoading = createSelector(
  selectAppointmentState,
  state => state.loading
);

export const selectError = createSelector(
  selectAppointmentState,
  state => state.error
);
