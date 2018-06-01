import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import LoginFormFields from './login-form-fields';

import './login-signup-form.css';

export class LoginForm extends React.PureComponent {
  render(){
      const { jwt } = this.props;
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

      if( jwt  && jwt !== "undefined" ){
        return <Redirect to='/search' />
      }
      return(
        <div>
          <LoginFormFields {...this.props} />
          {loading}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    jwt: state.login.jwt,
    pending: state.login.pending
  }
}

LoginForm.propTypes = {
  jwt: PropTypes.string,
  error: PropTypes.string,
  pending: PropTypes.bool,
}

export default connect(
  mapStateToProps
)(LoginForm);
