import {shallow} from 'enzyme';
import React from 'react';
import LoginButton from './login-button';
import Dashboard from '../dashboard/dashboard';

describe('<LoginButton', ()=> {
    it('Should render without crashing', ()=>{
        shallow(<LoginButton />);
    });
});
