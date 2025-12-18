import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PatientState } from './patient.state';

export const selectPatientState = createFeatureSelector<PatientState>('patient');

export const selectPatients = createSelector(
  selectPatientState,
  state => state.patients
);

export const selectLoading = createSelector(
  selectPatientState,
  state => state.loading
);

export const selectError = createSelector(
  selectPatientState,
  state => state.error
);
