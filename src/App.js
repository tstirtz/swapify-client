import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Dashboard from './dashboard/dashboard';
import LandingPage from './landing-page/landing-page';
import SignUpForm from './landing-page/sign-up-form';
import LoginForm from './landing-page/login-form';
import SearchPage from './search-page/search-page'
import { navAction } from './actions/nav-action';
import './App.css';

export class App extends React.Component {
  handleNav = () => this.props.dispatch(navAction(!this.props.open));

  render() {
    return (
      <Router>
        <div className='app'>
          <AppBar
            title='Swapify'
            onLeftIconButtonClick={this.handleNav}
          />
          <Drawer
            open={this.props.open}
            docked={false}
            onRequestChange={() => this.props.dispatch(navAction(!this.props.open))}
          >
            <MenuItem onClick={this.handleNav}>My Books</MenuItem>
          </Drawer>
          <main>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/dashboard' component={Dashboard} />  {/*need to add variable route*/}
            <Route exact path='/login-form' component={LoginForm} />
            <Route exact path='/sign-up-form' component={SignUpForm} />
            <Route exact path='/search' component={SearchPage} />
          </main>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.nav.open,
  }
}

export default connect(mapStateToProps)(App);
