import { shallow, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUpForm from './sign-up-form';
import validate from '../validators';
import store from '../store';

describe('<SignUpForm>', ()=> {
    it('Should render without crashing',() =>{
        shallow(<SignUpForm />);
    });

    xit('Should update input', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MuiThemeProvider>
            <SignUpForm />
          </MuiThemeProvider>
        </Provider>
      );

      wrapper.find('input[name="first"]').simulate("change", {target: {val: 'Test'}})
      expect(wrapper).toMatchSnapshot();
    });
  });
describe('validate function', () => {
    it('Should set error for a missing field', () => {
      const values = {
        test: 'Test',
      }

      const validateError = validate(values);

      expect(validateError.first).toEqual('Required');
    });

    it('Should set error on invalid email', () => {
      const values = {
        first: 'Test',
        last: 'Test',
        email: 'Test',
        username: 'Test',
        password: 'Test',
        confirmPassword: 'Test',
      }

      const validateError = validate(values);

      expect(validateError.email).toEqual('Invalid email address');

    });

    it('Should set error when password and confirmPassword are not equal', () => {
      const values = {
        first: 'Test',
        last: 'Test',
        email: 'Test',
        username: 'Test',
        password: 'Test1',
        confirmPassword: 'Test',
      }

      const validateError = validate(values);

      expect(validateError.confirmPassword).toEqual('Passwords must match');

    });
});
