import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import LandingPage from './landing-page/landing-page';
import SignUpForm from './landing-page/sign-up-form';
import LoginForm from './landing-page/login-form';
import SearchPage from './search-page/search-page'
import './App.css';

export default function App(){
    return (
      <Router>
        <div className='app'>
          <header>
            <h1>Swapify</h1>
          </header>
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
