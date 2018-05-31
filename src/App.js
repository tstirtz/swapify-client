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

  render() {
    let menuIcon;
      menuIcon = (
        <IconButton
          value="Menu"
          aria-label="Menu"
          tabIndex={0}
          disabled={localStorage.getItem('authToken') === null || localStorage.getItem('authToken').length === 0}
          onClick={this.handleNav}
          onKeyPress={this.handleKeyPressEvent}
        >
          <FontIcon
            value="Menu"
            aria-label="Menu"
            className="fas fa-bars"
            color="rgb(48, 48, 48)"
            hoverColor="rgb(255, 64, 129)"
            style={{
              fontSize:"18px",
              margin: "15px"
            }}
          />
        </IconButton>)
    return (
      <Router>
        <div className='app'>
          <header>
            <AppBar
              title='Swapify'
              iconElementLeft={
                menuIcon
              }
              titleStyle={{
                width: '100%',
                marginRight: '40px'
              }}
            />
            <Drawer
              role="menu"
              open={this.props.open}
              docked={false}
              onRequestChange={() => this.props.dispatch(navAction(!this.props.open))}
            >
              <Link
                to={`/${localStorage.getItem('userId')}/dashboard`}
                role="menu"
              >
                <MenuItem
                  onClick={this.handleNav}
                  role="menuitem"
                >
                  My Books
                </MenuItem>
              </Link>
              <Link
                to={`/${localStorage.getItem('userId')}/messages`}
                role="menu"
              >
                <MenuItem
                  onClick={this.handleNav}
                  menu="menuitem"
                >
                  Messages
                </MenuItem>
              </Link>
              <Link
                to={`/search`}
                role="menu"
              >
                <MenuItem
                  onClick={this.handleNav}
                  role="menuitem"
                >
                  Search Books
                </MenuItem>
              </Link>
            </Drawer>
          </header>
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
