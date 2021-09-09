import { sGetAppStatus, sGetIndicatorState } from '../selectors'
import { InitialState } from '../store'

describe('Store Selectors', () => {
  it('sGetAppStatus', () => {
    expect(sGetAppStatus(InitialState)).toEqual(InitialState.appState.get('status'))
  });
  it('sGetIndicatorState', () => {
    expect(sGetIndicatorState(InitialState)).toEqual(InitialState.appState.get('loading'))
  });
})