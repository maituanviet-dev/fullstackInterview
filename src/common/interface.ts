import Immutable from 'immutable';

export interface IScreenProps {
  setHudVisible?(visible: boolean): void;
  showAlert?(mess: string): void;
}

export interface IBaseProps {
  navigation?: any;
  screenProps?: IScreenProps;
}

export interface IImmutableMap<R> extends Immutable.Map<keyof R, any> {
  toJS(): R;
  get<K extends keyof R>(key: K): R[K];
  set<K extends keyof R>(key: K, value: R[K]): this;
}
