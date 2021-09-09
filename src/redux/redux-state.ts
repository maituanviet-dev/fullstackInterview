import Immutable from 'immutable';
import { ITypeReduxPendingState } from './redux-type-saga';
import { IImmutableMap } from '../common/interface';

// Store
export interface IStore extends ITypeReduxPendingState {
  appState: IImmutableAppState;
}
export type IImmutableStore = Immutable.Record<IStore> & Readonly<IStore>;
export type IImmutableAppState = IImmutableMap<IAppState>;
// AppState
export enum AppStatus {
  Unload,
  Loading,
  Ready,
}

export interface IAppState {
  status: AppStatus;
  loading: boolean;
}
