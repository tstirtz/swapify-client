import React from 'react';
import './sign-up-form.css';


export default function SignUpForm(){
    return(
        <form id='sign-up-form'>
            <label for='firstName'>First Name</label>
            <input id= 'firstName'/>

            <label for='lastName'>Last Name</label>
            <input id= 'lastName'/>

            <label for='email'>Email Address</label>
            <input id= 'email'/>

            <label for='userName'>Username</label>
            <input id= 'userName'/>

            <label for='password'>Password</label>
            <input id= 'password'/>

            <label for='confirmPassword'>Confirm Password</label>
            <input id= 'confirmPassword'/>

            <button type='button' for='sign-up-form'>Submit</button>
        </form>
    );
}
