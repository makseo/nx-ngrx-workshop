import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {PatientsData} from "@red-workshop/patients/src/state/patients.reducer";
import {MatDialogRef} from "@angular/material";
import {PatientSave} from "@red-workshop/patients/src/state/patients.actions";

@Component({
  selector: 'patient-new-dialog',
  templateUrl: './patient-new-dialog.component.html',
  styleUrls: ['./patient-new-dialog.component.scss']
})
export class PatientNewDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<PatientNewDialogComponent>,
    private store: Store<PatientsData>,
  ) {}

  save(event: Event): void {
    this.store.dispatch(new PatientSave(event));
    this.dialogRef.close();
  }
}
