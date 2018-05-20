import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import renderTextField from './materialUI-text-field';
import validate from '../validators';
import { login } from '../actions/login-action';
import store from '../store';
import { saveAuthToken } from '../local-storage';

import './login-signup-form.css';

export class LoginForm extends React.Component {
  handleLoginSubmit(credentials){
    const userCredentials = {
      username: credentials.username,
      password: credentials.password,
    }
    console.log('handleLoginSubmit called');
    this.props.dispatch(login(userCredentials))
    .then(res => {
      saveAuthToken(this.props.jwt);
      localStorage.setItem('userId', this.props.userId);
      localStorage.setItem('username', this.props.username);
    }).catch(err => {console.log(err)});
    this.props.reset();
  }
  render(){
      const {jwt, error } = this.props;
      let message;
      if( error ){
        message = (<p>Incorrect username or password</p>);
      }
      if( jwt  && jwt !== "undefined" ){
        return <Redirect to='/search' />
      }
      return(
        <div className="redux-form-container">
          <h2 className='login-heading'>Login</h2>
          <form
            id='loginForm'
            onSubmit={this.props.handleSubmit(values => this.handleLoginSubmit(values))}
          >
            <Field
              name="username"
              component={renderTextField}
              label="Username"
            />
            <Field
              name="password"
              type="password"
              component={renderTextField}
              label="Password"
            />
            <div
              className="error-message"
            >
              {message}
            </div>
            <RaisedButton
              className="submit-button"
              type="submit"
              htmlFor="loginForm"
              label="Submit"
              primary={true}
              disabled={this.props.pristine || this.props.submitting}
            />
          </form>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    status: state.login.statusText,
    jwt: state.login.jwt,
    error: state.login.error,
    userId: state.login.id,
    username: state.login.username,
  }
}

const loginProps = connect(
  mapStateToProps
)(LoginForm);

export default reduxForm({
  form: 'loginForm',
  validate
})(loginProps);
