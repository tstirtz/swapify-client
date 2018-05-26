import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Dashboard from './dashboard/dashboard';
import LandingPage from './landing-page/landing-page';
import SignUpForm from './landing-page/sign-up-form';
import LoginForm from './landing-page/login-form';
import SearchPage from './search-page/search-page';
import MessagesOverview from './messages/messages-overview';
import MessageThread from './messages/message-thread';
import { navAction } from './actions/nav-action';
import './App.css';

export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      menuIconDisabled: true,
    }

    this.handleNav = this.handleNav.bind(this);
    this.handleKeyPressEvent = this.handleKeyPressEvent.bind(this);
  }
  handleNav(){
    this.props.dispatch(navAction(!this.props.open));
  }
  handleKeyPressEvent(event){
    if(event.key === 'Enter'){
      this.props.dispatch(navAction(!this.props.open));
    }
  }
  toggleMenuIcon(){
    console.log(localStorage.getItem('authToken'));
    if(localStorage.getItem('authToken').length !== 0){
      this.setState({menuIconDisabled: true});
    }
  }
  // componentWillRecieveProps(){
  //   console.log(localStorage.getItem('authToken'));
  //   if(localStorage.getItem('authToken').length !== 0){
  //     this.setState({menuIconDisabled: true})
  //   }else{
  //     return
  //   }
  // }
  render() {
//Disable menu icon if no user is logged in
    let menuIcon;
    // if(localStorage.getItem('authToken') !== null){
    //   menuIcon = (
    //     <IconButton
    //       disabled={false}
    //       onClick={this.handleNav}
    //       onKeyPress={this.handleKeyPressEvent}
    //     >
    //       <FontIcon
    //         className="fas fa-bars"
    //         color="rgb(48, 48, 48)"
    //         hoverColor="rgb(255, 64, 129)"
    //         style={{
    //           fontSize:"18px",
    //           margin: "15px"
    //         }}
    //       />
    //     </IconButton>)
    // }else{
      menuIcon = (
        <IconButton
          disabled={false}
          onClick={this.handleNav}
          onKeyPress={this.handleKeyPressEvent}
        >
          <FontIcon
            className="fas fa-bars"
            color="rgb(48, 48, 48)"
            hoverColor="rgb(255, 64, 129)"
            style={{
              fontSize:"18px",
              margin: "15px"
            }}
          />
        </IconButton>)
    // }
    return (
      <Router>
        <div className='app'>
          <AppBar
            title='Swapify'
            iconElementLeft={
              menuIcon
            }
            // onLeftIconButtonClick={this.handleNav}
          />
          <Drawer
            open={this.props.open}
            docked={false}
            onRequestChange={() => this.props.dispatch(navAction(!this.props.open))}
          >
            <Link to={`/${localStorage.getItem('userId')}/dashboard`}>
              <MenuItem onClick={this.handleNav}>My Books</MenuItem>
            </Link>
            <Link to={`/${localStorage.getItem('userId')}/messages`}>
              <MenuItem onClick={this.handleNav}>Messages</MenuItem>
            </Link>
            <Link to={`/search`}>
              <MenuItem onClick={this.handleNav}>Search Books</MenuItem>
            </Link>
          </Drawer>
          <main>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/:username/dashboard' component={Dashboard} />
            <Route exact path='/login-form' component={LoginForm} />
            <Route exact path='/sign-up-form' component={SignUpForm} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/:username/messages' component={MessagesOverview} />
            <Route exact path='/:username/message-thread' component={MessageThread} />
          </main>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.nav.open,
    username: state.login.username,
  }
}

export default connect(mapStateToProps)(App);
