// src/app/core/models/patient.model.ts
export interface Doctor {

  doctorId?: number;  // optional
  firstName: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: string; // ya Date
  city?: string;
  doctorPhoto?: string;
  country?: string;
  email?: string;
  PostalCode?: string;
  shortBioGraphy?: string;
  province?: string;

}
