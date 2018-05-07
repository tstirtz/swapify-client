import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { reducer as formReducer } from 'redux-form';
import signUpReducer from './reducers/sign-up-reducer';
import loginReducer from './reducers/login-reducer';
import navReducer from './reducers/nav-reducer';

export const store = createStore(combineReducers({
  form: formReducer,
  signUp: signUpReducer,
  login: loginReducer,
  nav: navReducer,
}),applyMiddleware(promiseMiddleware()));
