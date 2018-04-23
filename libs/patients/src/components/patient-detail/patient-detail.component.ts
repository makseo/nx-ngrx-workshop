import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Patient} from "@red-workshop/models/src/patient";

@Component({
  selector: 'patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientDetailComponent {
  @Input() patient: Patient;
}
