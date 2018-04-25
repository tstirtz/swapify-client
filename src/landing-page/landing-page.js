import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function LandingPage(){
    return(
        <div className="signUp-login-buttons">
            <button>Sign Up</button>
            <button><Link to='/dashboard'>Login</Link></button>
        </div>
    );
}
