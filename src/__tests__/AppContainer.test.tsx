import 'react-native';
import React from 'react';
import AppContainer from '../AppContainer';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('AppContainer.tsx', () => {
  it('renders correctly', () => {
    expect(
      renderer.create(
        <Provider store={store}>
          <AppContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
