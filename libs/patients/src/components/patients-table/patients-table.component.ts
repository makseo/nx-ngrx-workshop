import { ChangeDetectionStrategy, Component, Input, OnChanges, TrackByFunction } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Patient } from "@red-workshop/models/src/patient";

@Component({
  selector: 'patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsTableComponent implements OnChanges {

  displayedColumns = ['firstName', 'lastName', 'action'];
  dataSource: MatTableDataSource<Patient>;

  @Input() patients: Patient[];
  trackByFn: TrackByFunction<Patient> = (index, item) => item.id;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.patients);
  }
}
