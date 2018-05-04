import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { reducer as formReducer } from 'redux-form';

import { userInfoReducer, signUpReducer } from './reducers/sign-up-reducer';

export const store = createStore(combineReducers({
  form: formReducer,
  signUp: signUpReducer,
}),applyMiddleware(promiseMiddleware()));
