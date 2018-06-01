import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import validate from '../validators';
import renderTextField from './materialUI-text-field';
import { login } from '../actions/login-action';

import './login-signup-form.css';

const style = {
  background: 'rgb(0, 151, 167)',
  borderRadius: 3,
  border: 0,
  color: 'rgb(48, 48, 48)',
  height: '20px',
  boxShadow: '0 3px 5px 2px rgba(0, 43, 128, .30)',
};

export class LoginFormFields extends React.Component {
  handleLoginSubmit(credentials){
    const userCredentials = {
      username: credentials.username,
      password: credentials.password,
    }
    this.props.dispatch(login(userCredentials))
  }
  render() {
    const { error } = this.props;
    let message;
    if( error ){
      message = (<p>Incorrect username or password</p>);
    }

    return (
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
        <Button
          className="submit-button"
          type="submit"
          htmlFor="loginForm"
          label="Submit"
          disabled={this.props.pristine || this.props.submitting}
          style={style}
        >
          Submit
        </Button>
      </form>)
  }
}

function mapStateToProps(state) {
  return {
    jwt: state.login.jwt,
    error: state.login.error,
    userId: state.login.id,
    username: state.login.username,
  }
}

LoginFormFields.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.string,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const loginProps = connect(
  mapStateToProps
)(LoginFormFields);

export default reduxForm({
  form: 'loginForm',
  validate
})(loginProps);
