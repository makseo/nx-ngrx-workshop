import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPatientComponent } from './selected-patient.component';

describe('SelectedPatientComponent', () => {
  let component: SelectedPatientComponent;
  let fixture: ComponentFixture<SelectedPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
