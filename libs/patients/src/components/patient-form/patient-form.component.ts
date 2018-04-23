import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}
