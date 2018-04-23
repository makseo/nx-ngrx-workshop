import { PatientsLoaded } from './patients.actions';
import { patientsReducer, initialState } from './patients.reducer';

describe('patientsReducer', () => {
  it('should work', () => {
    const action: PatientsLoaded = new PatientsLoaded({});
    const actual = patientsReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
