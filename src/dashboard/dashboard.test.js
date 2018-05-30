import { shallow, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DashBoard from './dashboard';
import BooksToSwap from './books-to-swap';
import store from '../store';

describe('Dashboard page', () => {
  it('<Dashboard /> should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <DashBoard />
        </MuiThemeProvider>
      </Provider>);
  });
});
