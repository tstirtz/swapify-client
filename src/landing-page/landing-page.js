import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import SignUpForm from './sign-up-form';
import LoginForm from './login-form';
import DemoLogin from './demo-login';
import logo from './swapify-logo.png';
import DialogBoxLogin from './dialog-box-login';

import './landing-page.css';

const style = {
  background: 'rgb(0, 151, 167)',
  borderRadius: 3,
  border: 0,
  color: 'rgb(48, 48, 48)',
  height: '20px',
  width: "150px",
  padding: '0 30px',
  margin: '10px',
  boxShadow: '0 3px 5px 2px rgba(0, 43, 128, .30)',
};

export class LandingPage extends React.Component{
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
    let pending;
    if(this.props.pending === true){
      pending =  (
        <CircularProgress
          size={150}
          thickness={10}
          style={{
            zIndex: '3',
            position: 'fixed',
            top: '50%',
          }}
        />
      )
    }
    return(
      <div className='landing-page-container'>
        <img
          src={logo}
          alt='Two hands swaping books'
          className='logo'
        />
        {pending}
        <h2 className="landing-page-sub-title">Why spend hundreds on text books?</h2>
        <div className="app-description">
          <p>
            Save your money and swap text books with other students at your school with <span>Swapify</span>.
          </p>
        </div>
        {this.state.signUpFormRendered &&
          <SignUpForm
            openForm={this.state.signUpFormRendered}
            closeForm={this.closeSignUpForm}
          />
        }

        {this.state.loginFormRendered &&
          <DialogBoxLogin
            openForm={this.state.loginFormRendered}
            closeForm={this.closeLoginForm}
          />
        }

        <div className='signUp-login-buttons'>
          <Button
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
        <DemoLogin />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    pending: state.login.pending
  }
}

LandingPage.propTypes = {
  pending: PropTypes.bool
}


export default connect(mapStateToProps)(LandingPage);
