import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { PatientsEffects } from './patients.effects';
import { LoadPatients, PatientsLoaded } from './patients.actions';

import { Observable } from 'rxjs/Observable';

describe('PatientsEffects', () => {
  let actions$: Observable<any>;
  let effects$: PatientsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        PatientsEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(PatientsEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadPatients({}) });
      expect(effects$.loadPatients$).toBeObservable(
        hot('-a-|', { a: new PatientsLoaded({}) })
      );
    });
  });
});
