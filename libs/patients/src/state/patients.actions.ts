import { Action } from '@ngrx/store';

export enum PatientsActionTypes {
  LoadPatients = '[Patients] Load Data',
  PatientsLoaded = '[Patients] Data Loaded',

  LoadPatient = '[Patient] Load Data',
  PatientLoaded = '[Patient] Data Loaded',

  PatientSave = '[Patients] Patient Save',
  PatientSaveSuccess = '[Patients] Patient Save Success',
}

export class LoadPatients implements Action {
  readonly type = PatientsActionTypes.LoadPatients;
}

export class PatientsLoaded implements Action {
  readonly type = PatientsActionTypes.PatientsLoaded;
  constructor(public payload: any) {}
}

export class LoadPatient implements Action {
  readonly type = PatientsActionTypes.LoadPatient;
  constructor(public payload: string) {}
}

export class PatientLoaded implements Action {
  readonly type = PatientsActionTypes.PatientLoaded;
  constructor(public payload: any) {}
}

export class PatientSave implements Action {
  readonly type = PatientsActionTypes.PatientSave;
  constructor(public payload: any) {}
}

export class PatientSaveSuccess implements Action {
  readonly type = PatientsActionTypes.PatientSaveSuccess;
  constructor(public payload: any) {}
}

export type PatientsActions =
  | LoadPatients
  | PatientsLoaded
  | LoadPatient
  | PatientLoaded
  | PatientSave
  | PatientSaveSuccess;
