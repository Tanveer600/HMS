// src/app/core/models/patient.model.ts
export interface Patient {
  patientId?: number;  // optional
  name: string;
  guardianName?: string;
  gender?: string;
  dateOfBirth?: string; // ya Date
  age?: string;
  bloodGroup?: string;
  maritalStatus?: string;
  patientPhoto?: string;
  phone?: string;
  email?: string;
  address?: string;
  remarks?: string;
  anyKnownAllergies?: string;
  tpa?: string;
  tpaId?: string;
  tpaValidity?: string; // ya Date
  nationalIdentificationNumber?: string;
  alternateNumber?: string;
}
