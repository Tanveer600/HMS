import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DoctorState } from './doctor.state';

export const selectDoctorState = createFeatureSelector<DoctorState>('doctor');

export const selectDoctors = createSelector(
  selectDoctorState,
  state => state.doctors
);

export const selectLoading = createSelector(
  selectDoctorState,
  state => state.loading
);

export const selectError = createSelector(
  selectDoctorState,
  state => state.error
);
