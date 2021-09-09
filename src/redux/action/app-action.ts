import { createTypeSagaAction, createTypeAction } from '../redux-type-saga';

export const initApplicationAction = createTypeSagaAction('INIT_APPLICATION');
export const updateAppLoadingAction = createTypeAction(
  'UPDATE_APP_LOADING_STATE',
);
