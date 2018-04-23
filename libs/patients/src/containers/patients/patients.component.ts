import { Component, OnInit } from '@angular/core';
import {Patient} from "@red-workshop/models/src/patient";
import {Store} from "@ngrx/store";
import {PatientsData} from "@red-workshop/patients/src/state/patients.reducer";
import {LoadPatients} from "@red-workshop/patients/src/state/patients.actions";
import {Observable} from "rxjs/Observable";
import {selectAllPatients} from "@red-workshop/patients/src/state";
import {MatDialog} from "@angular/material";
import {PatientNewDialogComponent} from "@red-workshop/patients/src/containers/patient-new-dialog/patient-new-dialog.component";

@Component({
  selector: 'patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients$: Observable<Patient[]>;

  constructor(
    private store: Store<PatientsData>,
    public dialog: MatDialog,
  ) {
    this.patients$ = store.select(selectAllPatients);
  }

  ngOnInit() {
    // this.store.dispatch({type: '[Patients] Load Data'});
    this.store.dispatch(new LoadPatients());
  }

  openPatientNewDialog(): void {
    this.dialog.open(PatientNewDialogComponent);
  }
}
