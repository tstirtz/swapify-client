import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return(
      <div className="signUp-login-buttons">
        <Link to='/sign-up-form'>
          <RaisedButton
            label="Sign up"
            primary={true}
          />
        </Link>
        <Link to='/login-form'>
          <RaisedButton
            label="Login"
            primary={true}
          />
        </Link>
      </div>
    );
}
