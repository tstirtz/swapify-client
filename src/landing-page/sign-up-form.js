import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../store';
import renderTextField from './materialUI-text-field';
import validate from '../validators';
import { signUp } from '../actions/sign-up-actions';
import { login } from '../actions/login-action';

import './login-signup-form.css';

export class SignUpForm extends React.Component{
  handleFormSubmit(values){
    const newUser = {
      first: values.first,
      last: values.last,
      email: values.email,
      password: values.password,
      username: values.username,
    };
    console.log(newUser);
    this.props.dispatch(signUp(newUser))
    .then((response) => {
      console.log(response);
      console.log(store.getState());
      // this.forceUpdate();
    }).then(() => this.props.dispatch(login({username: values.username, password: values.password})))
    .catch(err => {
      console.log(err);
      console.log(store.getState());
    });
    this.props.reset();
  }

  render() {
    console.log(store.getState());
    const { jwt, error } = this.props;
    let message;
    if (error){
      message = (<p>{error}</p>);
    }
    if( jwt  && jwt !== "undefined" ){
      return <Redirect to='/search' />
    }
    return(
      <div className="redux-form-container">
        <h2
          className='sign-up-heading'
        >
          Sign up
        </h2>
        <form
          id="sign-up-form"
          onSubmit={this.props.handleSubmit(values => this.handleFormSubmit(values))}
        >
          <Field
            name="first"
            component={renderTextField}
            label="First Name"
          />
          <Field
            name="last"
            component={renderTextField}
            label="Last Name"
          />
          <Field
            name="email"
            component={renderTextField}
            label="Email"
          />
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
          <Field
            name="confirmPassword"
            type="password"
            component={renderTextField}
            label="Confirm Password"
          />
          <div
            className="error-message"
          >
            {message}
          </div>
          <RaisedButton
            className="submit-button"
            type="submit"
            htmlFor="sign-up-form"
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
    statusCode: state.login.statusCode,
    jwt: state.login.jwt,
    error: state.signUp.error,
  }
}

const SignUpWithStore = connect(
  mapStateToProps
)(SignUpForm);

export default reduxForm({
  form: 'signUpForm',
  validate
})(SignUpWithStore);
