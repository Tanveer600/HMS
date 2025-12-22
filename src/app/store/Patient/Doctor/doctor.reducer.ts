import { createReducer, on } from '@ngrx/store';
import * as DoctorActions from './doctor.actions';  
import { initialState } from './doctor.state';

export const doctorReducer = createReducer(
  initialState,

  on(DoctorActions.loadDoctors, state => ({
    ...state,
    loading: true
  })),

  on(DoctorActions.loadDoctorsSuccess, (state, { doctors }) => ({
    ...state,
    doctors,
    loading: false
  })),

  // ✅ NOW THIS WILL WORK
  on(DoctorActions.saveDoctor, (state, { doctor }) => ({
    ...state,
    doctors: [...state.doctors, doctor]
  }))
);
