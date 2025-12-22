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
// 🔥 SAVE (Create + Update)
export const savePatient = createAction(
  '[Patient] Save',
  props<{ patient: any; file?: File }>()
);
// ✅ DELETE
export const deletePatient = createAction(
  '[Patient] Delete',
  props<{ patientId: number }>()
);