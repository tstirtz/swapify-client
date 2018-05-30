import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { SearchPage } from './search-page';
import store from '../store';

describe('SearchPage componenet', () => {
  it('Should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <SearchPage />
        </MuiThemeProvider>
      </Provider>
    );
  })
})
