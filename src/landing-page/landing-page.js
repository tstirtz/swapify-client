import React from 'react';
import LoginButton from './login-button';
import SignUpButton from './sign-up-button';

export default function LandingPage(){
    return(
      <div className="signUp-login-buttons">
        <SignUpButton />
        <LoginButton />
      </div>
    );
}
