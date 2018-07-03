import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import SignUpForm from './sign-up-form';
import DemoLogin from './demo-login';
import logo from './swapify-logo.png';
import messageIcon from './messaging-icon.png';
import moneyIcon from './money-icon.png'
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
        {pending}
        <div className='button-container'>
          <h2 className="landing-page-sub-title">Why spend hundreds on text books?</h2>
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
            <DemoLogin />
          </div>
        </div>
        <div className="app-description">
          <div className='tile-container'>
            <div className='logo'>
              <img 
                className='money-icon'
                src={moneyIcon}
                alt='dollar sign'
              />
            </div>
            <p>
              Save your money
            </p>
          </div>
          <div className='tile-container'>
            <div className='logo'>
              <img
                className='swapping-icon'
                src={logo}
                alt='Two hands swaping books'
                // className='logo'
              />
            </div>
            <p>
              Swap textbooks with other students
            </p>
          </div>
          <div className='tile-container'>
            <div className='logo'>
              <img
                className='messaging-icon'
                src={messageIcon}
                alt='Two message bubbles'
                // className='logo'
              />
            </div>
            <p>
              Message students on campus to coordinate exchange
            </p>
          </div>
        </div>
        {/* <h2 className="landing-page-sub-title">Why spend hundreds on text books?</h2> */}
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

        {/* <div className='signUp-login-buttons'>
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
          <DemoLogin />
        </div> */}
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
