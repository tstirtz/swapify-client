import {shallow} from 'enzyme';
import React from 'react';
import SignUpButton from './sign-up-button';

describe('<SignUpButton />', ()=>{
    it('Should render without crashing', () => {
            shallow(<SignUpButton />);
    });
});
