import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import './landing-page.css';

export default function LandingPage(){
    return(
      <div className="signUp-login-buttons">
        <Link to='/sign-up-form'>
          <RaisedButton
            className='sign-up-button button'
            label='Sign up'
            primary={true}
          />
        </Link>
        <Link to='/login-form'>
          <RaisedButton
            className='login-button button'
            label='Login'
            primary={true}
          />
        </Link>
      </div>
    );
}
