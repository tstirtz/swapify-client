import React from 'react';

export default function LoginForm(){
    return(
        <form id='loginForm'>
            <label for='username'>Username</label>
            <input id='username'/>

            <label for='password'>Password</label>
            <input id='password'/>
            <button type='button' for='loginForm'>Login</button>
        </form>
    );
}
