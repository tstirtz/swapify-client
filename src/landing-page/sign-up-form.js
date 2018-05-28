import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import Dialog from 'material-ui/Dialog';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store';
import renderTextField from './materialUI-text-field';
import validate from '../validators';
import { signUp } from '../actions/sign-up-actions';
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

export class SignUpForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      formRendered: false,
    }
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
      // this.forceUpdate();
    }).then(() => this.props.dispatch(login({username: values.username, password: values.password})))
    // .then(res => {
    //   localStorage.setItem('userId', this.props.userId);
    //   localStorage.setItem('username', this.props.username);
    // })
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
        <Dialog
          title="Sign up"
          titleStyle={{
            fontSize: "18px",
            width: "80%",
            marginTop: "15px",
            marginBottom: "15px",
            padding: "0px",
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
            <Button
              className="submit-button"
              type="submit"
              htmlFor="sign-up-form"
              label="Submit"
              disabled={this.props.pristine || this.props.submitting}
              style={style}
            >
              Submit
            </Button>
          </form>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    statusCode: state.login.statusCode,
    jwt: state.login.jwt,
    error: state.signUp.error,
    userId: state.login.id,
    username: state.login.username,
  }
}

const SignUpWithStore = connect(
  mapStateToProps
)(SignUpForm);

export default reduxForm({
  form: 'signUpForm',
  validate
})(SignUpWithStore);
