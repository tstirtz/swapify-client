import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import renderTextField from './materialUI-text-field';
import validate from '../validators';
import { login } from '../actions/login-action';
import { store } from '../store';

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
      console.log(res); console.log(store.getState());
      this.forceUpdate();
    });
    this.props.reset();
  }
  render(){
      const status = store.getState().login.statusText;
      let message;
      if( status === 'Unauthorized'){
        message = (<p>Incorrect username or password</p>);
      }
      return(
        <div className="redux-form-container">
          <h2>Login</h2>
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
            <div>
              {message}
            </div>
            <Link
              to="/search"
              className="link-component"
            >
              <RaisedButton
                className="submit-button"
                type="submit"
                htmlFor="loginForm"
                label="Submit"
                primary={true}
                disabled={this.props.pristine || this.props.submitting}
              />
            </Link>
          </form>
        </div>
      );
  }
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);
