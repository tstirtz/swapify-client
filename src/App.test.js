import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import store from './store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(
  //   <Provider store={store}>
  //     <MuiThemeProvider>
  //       <App />
  //     </MuiThemeProvider>
  //   </Provider>, div);
  // ReactDOM.unmountComponentAtNode(div);
  shallow(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
});
