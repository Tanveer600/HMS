import { createAction, props } from '@ngrx/store';

// Load Patients
export const loadPatients = createAction('[Patient] Load');
export const loadPatientsSuccess = createAction(
  '[Patient] Load Success',
  props<{ patients: any[] }>()
);
export const loadPatientsFailure = createAction(
  '[Patient] Load Failure',
  props<{ error: any }>()
);

// Add Patient
export const addPatient = createAction(
  '[Patient] Add',
  props<{ patient: any }>()
);
export const addPatientSuccess = createAction(
  '[Patient] Add Success',
  props<{ patient: any }>()
);
export const addPatientFailure = createAction(
  '[Patient] Add Failure',
  props<{ error: any }>()
);

// Update Patient
export const updatePatient = createAction(
  '[Patient] Update',
  props<{ id: number; patient: any }>()
);
export const updatePatientSuccess = createAction(
  '[Patient] Update Success',
  props<{ patient: any }>()
);
export const updatePatientFailure = createAction(
  '[Patient] Update Failure',
  props<{ error: any }>()
);

// Delete Patient
export const deletePatient = createAction(
  '[Patient] Delete',
  props<{ id: number }>()
);
export const deletePatientSuccess = createAction(
  '[Patient] Delete Success',
  props<{ id: number }>()
);
export const deletePatientFailure = createAction(
  '[Patient] Delete Failure',
  props<{ error: any }>()
);
