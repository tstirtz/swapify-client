import {shallow} from 'enzyme';
import React from 'react';
import SignUpForm from './sign-up-form';
import validate from '../validators';

describe('<SignUpForm', ()=> {
    it('Should render without crashing',() =>{
        shallow(<SignUpForm />);
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

    it('Should set error password and confirmPassword are not equal', () => {
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
