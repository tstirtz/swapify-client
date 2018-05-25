import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
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

export default function LandingPage(){
    return(
      <div className='landing-page-container'>
        <img
          src='https://www.colourbox.com/preview/13896125-doodle-recycle-symbol.jpg'
          alt='three arrows makings a triangle'
          className='logo'
        />
        <div className='signUp-login-buttons'>
          <Link to='/sign-up-form'>
            <Button
              className='sign-up-button button'
              label='Sign up'
              style={style}
            >
              Sign up
            </Button>
          </Link>
          <Link to='/login-form'>
            <Button
              className='login-button button'
              label='Login'
              style={style}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    );
}
