import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {shallow} from 'enzyme';
import App from './App';
import store from './store';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
