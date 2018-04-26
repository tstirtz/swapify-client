import {shallow} from 'enzyme';
import React from 'react';
import SignUpForm from './sign-up-form';

describe('<SignUpForm', ()=> {
    it('Should render without crashing',() =>{
        shallow(<SignUpForm />);
    });
});
