export interface AppointmentState {
  appointments: any[];
  loading: boolean;
  error: any;
}

export const initialState: AppointmentState = {
  appointments: [],
  loading: false,
  error: null
};
