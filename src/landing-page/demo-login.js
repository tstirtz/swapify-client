import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/login-action';
import { saveAuthToken } from '../local-storage';

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
  constructor(props){
    super(props)

    // this.demoLogin = this.demoLogin.bind(this)
  }
  demoLogin(){
    const userCredentials = {
      username: "demoAccount",
      password: "demopassword",
    };

    this.props.dispatch(login(userCredentials))
      // .then(() => {
        // console.log(this.props.jwt);
        // saveAuthToken(this.props.jwt);
        //
        // localStorage.setItem('userId', this.props.userId);
        // localStorage.setItem('username', this.props.username);
      // }).catch(err => {console.log(err)});
      // this.props.reset();
  }
  render(){
    // if(this.props.jwt !== undefined){
    //   saveAuthToken(this.props.jwt);
    // }
    // if(this.props.userId !== undefined){
    //   localStorage.setItem('userId', this.props.userId);
    // }
    // if(this.props.username !== undefined){
    //   localStorage.setItem('username', this.props.username);
    // }
    const userCredentials = {
      username: "demoAccount",
      password: "demopassword",
    };
    const {jwt, error } = this.props;
    let message;
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

// function mapDispatchToProps(dispatch){
//   return({
//     dispatchLogin: (credentials) => dispatch(login(credentials))
//   })
// }

export default connect(mapStateToProps)(DemoLoginButton);

// export default demoLogin;
