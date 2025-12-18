import { createReducer, on } from '@ngrx/store';
import * as PatientActions from './patient.actions';
import { initialState } from './patient.state';

export const patientReducer = createReducer(
  initialState,

  on(PatientActions.loadPatients, state => ({
    ...state,
    loading: true
  })),

  on(PatientActions.loadPatientsSuccess, (state, { patients }) => ({
    ...state,
    patients,
    loading: false
  })),

  // ✅ NOW THIS WILL WORK
  on(PatientActions.addPatient, (state, { patient }) => ({
    ...state,
    patients: [...state.patients, patient]
  }))
);
