import { createReducer, on } from '@ngrx/store';
import * as PatientActions from './patient.actions';
import { initialState } from './patient.state';

export const patientReducer = createReducer(
  initialState,

  // Load
  on(PatientActions.loadPatients, state => ({ ...state, loading: true })),
  on(PatientActions.loadPatientsSuccess, (state, { patients }) => ({
    ...state,
    patients,
    loading: false
  })),
  on(PatientActions.loadPatientsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Add
  on(PatientActions.addPatient, state => ({ ...state, loading: true })),
  on(PatientActions.addPatientSuccess, (state, { patient }) => ({
    ...state,
    patients: [...state.patients, patient],
    loading: false
  })),
  on(PatientActions.addPatientFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Update
  on(PatientActions.updatePatient, state => ({ ...state, loading: true })),
  on(PatientActions.updatePatientSuccess, (state, { patient }) => ({
    ...state,
    patients: state.patients.map(p => p.patientId === patient.patientId ? patient : p),
    loading: false
  })),
  on(PatientActions.updatePatientFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Delete
  on(PatientActions.deletePatient, state => ({ ...state, loading: true })),
  on(PatientActions.deletePatientSuccess, (state, { id }) => ({
    ...state,
    patients: state.patients.filter(p => p.patientId !== id),
    loading: false
  })),
  on(PatientActions.deletePatientFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
