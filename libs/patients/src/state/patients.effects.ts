import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { PatientsState } from './patients.reducer';
import { DataPersistence } from '@nrwl/nx';
import {PatientsService} from "@red-workshop/patients/src/services/patients.service";
import {Patient} from "@red-workshop/models/src/patient";
import { map } from 'rxjs/operators';
import * as patientsActions from './patients.actions';

@Injectable()
export class PatientsEffects {

  @Effect()
  loadPatients$ = this.dataPersistence.fetch(patientsActions.PatientsActionTypes.LoadPatients, {
    run: (action: patientsActions.LoadPatients, state: PatientsState) => {
      return this.patientsService
        .search()
        .pipe(
          map((patients: Patient[]) => new patientsActions.PatientsLoaded(patients))
        );
    },

    onError: (action: patientsActions.LoadPatients, error) => {
      console.error('Error', error);
      return null;
    }
  });

  @Effect()
  loadPatient$ = this.dataPersistence.fetch(patientsActions.PatientsActionTypes.LoadPatient, {
    run: (action: patientsActions.LoadPatient, state: PatientsState) => {
      return this.patientsService
        .get(action.payload)
        .pipe(
          map((patient: Patient) => {
            return new patientsActions.PatientLoaded(patient)
          })
        )
    },

    onError: (action: patientsActions.LoadPatient, error) => {
      console.error('Error', error);
      return null;
    }
  });

  @Effect()
  addPatient$ = this.dataPersistence.pessimisticUpdate(patientsActions.PatientsActionTypes.PatientSave, {
    run: (action: patientsActions.PatientSave, state: PatientsState) => {
      return this.patientsService
        .save(action.payload)
        .pipe(
          map((patient: Patient) => new patientsActions.PatientSaveSuccess(patient))
        )
    },

    onError: (action: patientsActions.PatientSave, error) => {
      console.error('Error', error);
      return null;
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PatientsState>,
    private patientsService: PatientsService,
  ) {}
}
