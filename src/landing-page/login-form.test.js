import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { LoginForm } from './login-form';

describe('<LoginForm/>', () => {
  test('Should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <LoginForm />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
