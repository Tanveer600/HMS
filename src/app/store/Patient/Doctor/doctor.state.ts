export interface DoctorState {
  doctors: any[];
  loading: boolean;
  error: any;
}

export const initialState: DoctorState = {
  doctors: [],
  loading: false,
  error: null
};
