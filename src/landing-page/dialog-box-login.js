import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import LoginForm from './login-form';

import './login-signup-form.css';

export default class DialogBoxLogin extends React.PureComponent {
  render() {
    return (
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
        <LoginForm {...this.props} />
      </Dialog>)
  }
}

DialogBoxLogin.propTypes = {
  openForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
}
