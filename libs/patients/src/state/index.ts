import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PatientsData} from "@red-workshop/patients/src/state/patients.reducer";
import * as fromPatients from './patients.reducer';

export const selectPatientsState = createFeatureSelector<PatientsData>('patients');
export const selectAllPatients = createSelector(selectPatientsState, fromPatients.selectAllPatients);
export const selectPatientIds = createSelector(selectPatientsState, fromPatients.selectPatientIds);
export const selectPatientEntities = createSelector(selectPatientsState, fromPatients.selectPatientEntities);
export const selectTotalPatientsCount = createSelector(selectPatientsState, fromPatients.selectTotalPatientsCount);
export const getSelectedPatient = createSelector(selectPatientsState, fromPatients.getSelectedPatient);
