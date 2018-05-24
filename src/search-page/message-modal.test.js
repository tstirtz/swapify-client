import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../store';
import { MessageModal } from './message-modal';

describe('<MessageModal/>', () => {
  test('Should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <MessageModal />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
