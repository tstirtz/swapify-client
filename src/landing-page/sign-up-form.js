import React from 'react';
import './sign-up-form.css';

const {API_BASE_URL} = require('./../config');


export default class SignUpForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      error: '',
    }
  }
  signUp() {
    console.log('signUp function called');
    const newUser ={
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    }
    console.log(JSON.stringify(newUser));
    fetch(`${API_BASE_URL}/sign-up`, {
      body: JSON.stringify(newUser),
      cache: 'default',
      // credentials: 'include',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    }).then(response => response.json())
    .then((res) => {
      // if(!res.ok){
      //   return Promise.reject(new Error(res.statusText));
      // }
      console.log(res);
      return res;
    }).then(user => {
      return Promise.resolve(console.log(user))
    }).catch(err => console.log(err))
}

  handleFirstNameChange(event){
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event){
    this.setState({lastName: event.target.value});
  }

  handleEmailChange(event){
    this.setState({email: event.target.value});
  }

  handleUsernameChange(event){
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  render() {
    return(
      <form id='sign-up-form' onSubmit={e => {e.preventDefault(); this.signUp()}} >
        <label htmlFor='firstName'>First Name</label>
        <input id='firstName' value={this.state.firstName} onChange={e => this.handleFirstNameChange(e)} />

        <label htmlFor='lastName'>Last Name</label>
        <input id='lastName' value={this.state.lastName} onChange={e => this.handleLastNameChange(e)} />

        <label htmlFor='email'>Email Address</label>
        <input id='email' value={this.state.email} onChange={e => this.handleEmailChange(e)} />

        <label htmlFor='userName'>Username</label>
        <input id='userName' value={this.state.username} onChange={e => this.handleUsernameChange(e)} />

        <label htmlFor='password'>Password</label>
        <input id='password' value={this.state.password} onChange={e => this.handlePasswordChange(e)} />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input id='confirmPassword' />

        <button type='submit' htmlFor='sign-up-form'>Submit</button>
      </form>
    );
  }
}
