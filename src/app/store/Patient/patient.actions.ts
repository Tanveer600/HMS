import { createAction, props } from '@ngrx/store';

export const loadPatients = createAction('[Patient] Load');

export const loadPatientsSuccess = createAction(
  '[Patient] Load Success',
  props<{ patients: any[] }>()
);

export const loadPatientsFailure = createAction(
  '[Patient] Load Failure',
  props<{ error: any }>()
);

// ✅ ADD THIS
export const addPatient = createAction(
  '[Patient] Add',
  props<{ patient: any }>()
);
