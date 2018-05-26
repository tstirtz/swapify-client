import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import SignUpForm from './sign-up-form';
import LoginForm from './login-form';

import './landing-page.css';

const style = {
  background: 'rgb(0, 151, 167)',
  borderRadius: 3,
  border: 0,
  color: 'rgb(48, 48, 48)',
  height: '20px',
  padding: '0 30px',
  margin: '10px',
  boxShadow: '0 3px 5px 2px rgba(0, 43, 128, .30)',
};

export default class LandingPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      signUpFormRendered: false,
      loginFormRendered: false,
    }
    this.openSignUpForm = this.openSignUpForm.bind(this);
    this.closeSignUpForm = this.closeSignUpForm.bind(this);
    this.openLoginForm = this.openLoginForm.bind(this);
    this.closeLoginForm = this.closeLoginForm.bind(this);
  }

  openSignUpForm(){
    console.log("openSignUpForm called");
    this.setState({signUpFormRendered: true});
  }

  closeSignUpForm(){
    this.setState({signUpFormRendered: false});
  }

  openLoginForm(){
    this.setState({loginFormRendered: true});
  }

  closeLoginForm(){
    this.setState({loginFormRendered: false});
  }
  render(){
    return(
      <div className='landing-page-container'>
        <img
          src='https://www.colourbox.com/preview/13896125-doodle-recycle-symbol.jpg'
          alt='three arrows makings a triangle'
          className='logo'
        />

        {this.state.signUpFormRendered &&
          <SignUpForm
            openForm={this.openSignUpForm}
            closeForm={this.closeSignUpForm}
          />
        }

        <div className='signUp-login-buttons'>
          <Button
            className='sign-up-button button'
            label='Sign up'
            style={style}
            onClick={this.openSignUpForm}
          >
            Sign up
          </Button>
          <Button
            className='login-button button'
            label='Login'
            style={style}
            onClick={this.openLoginForm}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}
