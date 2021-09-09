import { createTypeReducer } from '../redux-type-saga';
import { AppStatus, IImmutableAppState } from '../redux-state';
import { fromJS } from 'immutable';
import {
  initApplicationAction,
  updateAppLoadingAction,
} from '../action/app-action';

export function createInitAppState(): IImmutableAppState {
  return fromJS({
    status: AppStatus.Unload,
    displayIndicator: false,
  });
}

export const initApplicationReducer = initApplicationAction.done.reducer<
  IImmutableAppState
>((state, action) => {
  return state.set('status', action.payload);
});

export const setIndicatorReducer = updateAppLoadingAction.reducer<
  IImmutableAppState
>((state, action) => {
  return state.set('loading', !!action.payload);
});

const appReducer = createTypeReducer<IImmutableAppState>(
  createInitAppState(),
  initApplicationReducer,
  setIndicatorReducer,
);

export default appReducer;
