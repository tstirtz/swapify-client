import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { store } from '../store';
import { setFirstName, setLastName, setEmail, setUsername, setPassword, signUp } from '../actions/sign-up-actions';

import './sign-up-form.css';


export class SignUpForm extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     username: '',
  //     password: '',
  //     error: '',
  //   }
  // }
//   signUp() {
//     console.log('signUp function called');
//     // const newUser ={
//     //   firstName: store.getState().userInfo.user.first,
//     //   lastName: store.getState().userInfo.user.last,
//     //   email: store.getState().userInfo.user.email,
//     //   username: store.getState().userInfo.user.username,
//     //   password: store.getState().userInfo.user.password,
//     // }
//     const newUser = store.getState().userInfo.user;
//     console.log(newUser);
//     console.log(JSON.stringify(newUser));
//     fetch(`${API_BASE_URL}/sign-up`, {
//       body: JSON.stringify(newUser),
//       // cache: 'default',
//       // credentials: 'include',
//       headers: {
//         'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
//         'content-type': 'application/json',
//       },
//       method: 'POST',
//       mode: 'cors',
//       redirect: 'follow',
//       // referrer: 'no-referrer',
//     }).then(response => response.json())
//     .then((res) => {
//       // if(!res.ok){
//       //   return Promise.reject(new Error(res.statusText));
//       // }
//       console.log(res);
//       return res;
//     }).then(user => {
//       return Promise.resolve(console.log(user))
//     }).catch(err => console.log(err))
// }
  handleFormSubmit(){
    const newUser = store.getState().userInfo.user;
    this.props.dispatch(signUp(newUser));
  }
  handleFirstNameChange(event){
    this.props.dispatch(setFirstName(event.target.value));
    console.log(store.getState().userInfo.user);
  }

  handleLastNameChange(event){
    this.props.dispatch(setLastName(event.target.value));
    console.log(store.getState().userInfo.user);
  }

  handleEmailChange(event){
    this.props.dispatch(setEmail(event.target.value));
    console.log(store.getState().userInfo);
  }

  handleUsernameChange(event){
    this.props.dispatch(setUsername(event.target.value));
    console.log(store.getState().userInfo);
  }

  handlePasswordChange(event){
    this.props.dispatch(setPassword(event.target.value));
    console.log(store.getState().userInfo.user);
  }

  render() {
    return(
      <div className= "sign-up">
          <h2>Sign up</h2>
        <form id="sign-up-form" onSubmit={e => {e.preventDefault(); this.handleFormSubmit()}} >
          <TextField
            id="firstName"
            floatingLabelText="First Name"
            type="text"
            value={this.props.firstName}
            onChange={e => this.handleFirstNameChange(e)}
          /><br />
          <TextField
            id="lastName"
            floatingLabelText="Last Name"
            type="text"
            value={this.props.lastName}
            onChange={e => this.handleLastNameChange(e)}
          /><br />
          <TextField
            id="email"
            floatingLabelText="Email"
            type="text"
            value={this.props.email}
            onChange={e => this.handleEmailChange(e)}
          /><br />
          <TextField
            id="userName"
            floatingLabelText="Username"
            type="text"
            value={this.props.username}
            onChange={e => this.handleUsernameChange(e)}
          /><br />
          <TextField
            id="password"
            floatingLabelText="Password"
            type="password"
            value={this.props.password}
            onChange={e => this.handlePasswordChange(e)}
          /><br />
          <TextField
            id="confirmPassword"
            floatingLabelText="Confirm Password"
            type="password"
          /><br />
          <RaisedButton className="submit-button" type="submit" htmlFor="sign-up-form" label="Submit" primary={true} />
          {/* <button type='submit' htmlFor='sign-up-form'>Submit</button> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.userInfo.user.first,
  lastName: state.userInfo.user.last,
  email: state.userInfo.user.email,
  username: state.userInfo.user.username,
  password: state.userInfo.user.password,
});

export default connect(mapStateToProps)(SignUpForm);
