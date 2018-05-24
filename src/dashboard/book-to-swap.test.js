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
  // it('Should render error message', () => {
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <MuiThemeProvider>
  //         <BooksToSwap response="Already exists as a needed book" />
  //       </MuiThemeProvider>
  //     </Provider>);
  //
  //
  //   console.log(wrapper.props());
  //
  //   expect(wrapper.find('.add-book-response')).toHaveLength(1);
  // })
});
