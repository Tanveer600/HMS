export interface PatientState {
  patients: any[];
  loading: boolean;
  error: any;
}

export const initialState: PatientState = {
  patients: [],
  loading: false,
  error: null
};
