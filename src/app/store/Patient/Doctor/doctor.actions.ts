import { createAction, props } from '@ngrx/store';

export const loadDoctors = createAction('[Doctor] Load');

export const loadDoctorsSuccess = createAction(
  '[Doctor] Load Success',
  props<{ doctors: any[] }>()
);

export const loadDoctorsFailure = createAction(
  '[Doctor] Load Failure',
  props<{ error: any }>()
);

// ✅ ADD THIS
// 🔥 SAVE (Create + Update)
export const saveDoctor = createAction(
  '[Doctor] Save',
  props<{ doctor: any; file?: File }>()
);
// ✅ DELETE
export const deleteDoctor = createAction(
  '[Doctor] Delete',
  props<{ doctorId: number }>()
);

export function loadPatients(): any {
  throw new Error('Function not implemented.');
}
