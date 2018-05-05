import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { store } from '../store';
import renderTextField from './materialUI-text-field';
import validate from '../validators';

import './sign-up-form.css';

export class SignUpForm extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillUpdate(){

  }
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
      this.forceUpdate();
    })
    this.props.reset();
  }

  render() {
    console.log(store.getState());
    let statusCode = store.getState().signUp.statusCode;
    let message;
    if (statusCode >= 400){
      message = (<p>{store.getState().signUp.response}</p>);
    }

    return(
      <div className="sign-up">
        <h2>Sign up</h2>
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
          <div>
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

export default reduxForm({
  form: 'signUpForm',
  validate
})(SignUpForm);
