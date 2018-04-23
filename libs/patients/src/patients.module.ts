import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PatientsComponent} from './containers/patients/patients.component';
import {PatientsService} from '@red-workshop/patients/src/services/patients.service';
import {PatientDetailComponent} from './components/patient-detail/patient-detail.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {patientsReducer, initialState as patientsInitialState} from './state/patients.reducer';
import {PatientsEffects} from './state/patients.effects';
import {PatientsTableComponent} from './components/patients-table/patients-table.component';
import {MaterialModule} from "@red-workshop/material";
import {PatientFormComponent} from './components/patient-form/patient-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PatientNewDialogComponent} from "@red-workshop/patients/src/containers/patient-new-dialog/patient-new-dialog.component";
import {NgxErrorsModule} from "@ultimate/ngxerrors";
import {SelectedPatientComponent} from './containers/selected-patient/selected-patient.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: PatientsComponent},
      {path: 'detail/:patientId', component: SelectedPatientComponent},
    ]),
    StoreModule.forFeature('patients', patientsReducer, {initialState: patientsInitialState}),
    EffectsModule.forFeature([PatientsEffects]),
    MaterialModule,
    NgxErrorsModule,
  ],
  declarations: [PatientsComponent, PatientDetailComponent, PatientsTableComponent, PatientFormComponent, PatientNewDialogComponent, SelectedPatientComponent],
  providers: [PatientsService, PatientsEffects],
  entryComponents: [
    PatientNewDialogComponent,
  ]
})
export class PatientsModule {}
