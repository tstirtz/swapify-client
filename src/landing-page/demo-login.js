import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/login-action';

const style = {
  background: 'rgba(255, 64, 129, .4)',
  borderRadius: 3,
  border: 0,
  color: 'rgb(48, 48, 48)',
  height: '20px',
  width: '100px',
  padding: '0 30px',
  margin: '2.5px',
  fontSize: '12px',
  boxShadow: '0 3px 5px 2px rgba(0, 43, 128, .30)',
};

export class DemoLoginButton extends React.Component{
  demoLogin(){
    const userCredentials = {
      username: "demoAccount",
      password: "demopassword",
    };

    this.props.dispatch(login(userCredentials))
  }
  render(){
    const userCredentials = {
      username: "demoAccount",
      password: "demopassword",
    };
    const {jwt, error } = this.props;
    if( error ){
      message = (<p>Incorrect username or password</p>);
    }
    if( jwt  && jwt !== "undefined" ){
      return <Redirect to='/search' />
    }
    return(
      <div className="demo-login-container">
        <Button
          className='demo-login-button button'
          label='Demo Account'
          style={style}
          onClick={() => this.props.dispatch(login(userCredentials))}
        >
          Demo Login
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    status: state.login.statusText,
    jwt: state.login.jwt,
    error: state.login.error,
    userId: state.login.id,
    username: state.login.username,
  }
}

export default connect(mapStateToProps)(DemoLoginButton);
