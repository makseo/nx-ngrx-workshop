import { PatientsActions, PatientsActionTypes } from './patients.actions';
import {Patient} from "@red-workshop/models/src/patient";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

/**
 * Interface for the 'Patients' data used in
 *  - PatientsState, and
 *  - patientsReducer
 */
export interface PatientsData extends EntityState<Patient> {
  loading: boolean;
  selectedPatient: Patient;
}

/**
 * Interface to the part of the Store containing PatientsState
 * and other information related to PatientsData.
 */
export interface PatientsState {
  readonly patients: PatientsData;
}

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();

export const initialState: PatientsData = adapter.getInitialState({
  loading: false,
  selectedPatient: null,
});

export function patientsReducer(state, action: PatientsActions): PatientsData {
  switch (action.type) {

    case PatientsActionTypes.PatientSave:
      return {
        ...state,
        loading: true,
      };

    case PatientsActionTypes.PatientsLoaded: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
      });
    }

    case PatientsActionTypes.PatientLoaded: {
      return {
        ...state,
        loading: false,
        selectedPatient: action.payload,
      }
    }

    case PatientsActionTypes.PatientSaveSuccess: {
      return adapter.addOne(action.payload, {
        ...state,
        loading: false,
      })
    }

    default:
      return state;
  }
}

export const getSelectedPatient = (state: PatientsData) => state.selectedPatient;

export const {

  selectAll: selectAllPatients,

  selectEntities: selectPatientEntities,

  selectIds: selectPatientIds,

  selectTotal: selectTotalPatientsCount,

} = adapter.getSelectors();
