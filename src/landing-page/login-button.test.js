import {shallow} from 'enzyme';
import React from 'react';
import LoginButton from './login-button';

describe('<LoginButton', ()=> {
    it('should render without crashing', ()=>{
        shallow(<LoginButton />);
    });
});
