import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNewDialogComponent } from './patient-new-dialog.component';

describe('PatientNewDialogComponent', () => {
  let component: PatientNewDialogComponent;
  let fixture: ComponentFixture<PatientNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
