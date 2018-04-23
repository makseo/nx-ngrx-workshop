import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Patient} from "@red-workshop/models/src/patient";

const PATIENTS: Patient[] = [
  {id: '1', firstName: 'Rafael', lastName: 'Nadal'},
  {id: '2', firstName: 'Roger', lastName: 'Federer'},
  {id: '3', firstName: 'Marin', lastName: 'Cilic'},
  {id: '4', firstName: 'Alexander', lastName: 'Zverev'},
  {id: '5', firstName: 'Grigor', lastName: 'Dimitrov'},
  {id: '6', firstName: 'Dominic', lastName: 'Thiem'},
  {id: '7', firstName: 'Kevin', lastName: 'Anderson'},
  {id: '8', firstName: 'John', lastName: 'Isner'},
  {id: '9', firstName: 'David', lastName: 'Goffin'},
  {id: '10', firstName: 'Lucas', lastName: 'Pouille'},
  {id: '11', firstName: 'Novak', lastName: 'Djokovic'},
  {id: '11', firstName: 'Sam', lastName: 'Querrey'},
];

@Injectable()
export class PatientsService {

  search(): Observable<Patient[]> {
    // return this.httpClient.get(`/patients`);
    return Observable.of(PATIENTS);
  }

  save(patient: any): Observable<Patient> {
    // return this.httpClient.post(`/patients`, patient);
    return Observable.of(<Patient>{
      ...patient,
      id: String(Math.round(Math.random() * 1000))
    });
  }

  get(patientId: string): Observable<Patient> {
    return Observable.of(PATIENTS.find((patient: Patient) => patient.id === patientId));
  }
}
