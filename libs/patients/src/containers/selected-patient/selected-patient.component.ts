import { Component, OnInit } from '@angular/core';
import { Patient } from '@red-workshop/models/src/patient';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromPatients from '@red-workshop/patients/src/state';
import * as patientsActions from '@red-workshop/patients/src/state/patients.actions';
import { PatientsData } from '@red-workshop/patients/src/state/patients.reducer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'selected-patient',
  templateUrl: './selected-patient.component.html',
  styleUrls: ['./selected-patient.component.scss']
})
export class SelectedPatientComponent implements OnInit {

  patient$: Observable<Patient>;

  constructor(
    private store: Store<PatientsData>,
    private route: ActivatedRoute,
  ) {
    this.patient$ = store.select(fromPatients.getSelectedPatient);
  }

  ngOnInit(): void {
    const selectedPatientId: string = this.route.snapshot.params.patientId;
    this.store.dispatch(new patientsActions.LoadPatient(selectedPatientId));
  }
}
