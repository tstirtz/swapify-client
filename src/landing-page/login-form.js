import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from 'material-ui/Dialog';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import renderTextField from './materialUI-text-field';
import validate from '../validators';
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

export class LoginForm extends React.Component {
  handleLoginSubmit(credentials){
    const userCredentials = {
      username: credentials.username,
      password: credentials.password,
    }
    this.props.dispatch(login(userCredentials))
  }
  render(){
      const {jwt, error } = this.props;
      let message;
      let loading;
      if(this.props.pending === true){
        loading = (
          <LinearProgress
            mode="indeterminate"
            color="rgb(255, 64, 129)"
            style={{
              width: '80%',
              marginLeft: '10%',
              marginRight: '10%',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          />);
      }
      if( error ){
        message = (<p>Incorrect username or password</p>);
      }
      if( jwt  && jwt !== "undefined" ){
        return <Redirect to='/search' />
      }
      return(
        <div className="redux-form-container">
          <Dialog
            title="Login"
            titleStyle={{
              fontSize: "18px",
              width: "80%",
              textAlign: "center",
              marginRight: "10%",
              marginLeft: "10%",
            }}
            open={this.props.openForm}
            onRequestClose={this.props.closeForm}
            contentClassName='modal-content-container'
            autoScrollBodyContent={true}
          >
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
            </form>
            {loading}
          </Dialog>
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
    pending: state.login.pending
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func,
  jwt: PropTypes.string,
  error: PropTypes.string,
  openForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
  pending: PropTypes.bool
}

const loginProps = connect(
  mapStateToProps
)(LoginForm);

export default reduxForm({
  form: 'loginForm',
  validate
})(loginProps);
