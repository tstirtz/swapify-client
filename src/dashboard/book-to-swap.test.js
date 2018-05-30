import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createShallow } from '@material-ui/core/test-utils';
import { shallow, mount } from 'enzyme';
import store from '../store';
import BooksToSwap from './books-to-swap';

describe('BookToSwap component', () => {
  it('Should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <BooksToSwap />
        </MuiThemeProvider>
      </Provider>);
  });
});
