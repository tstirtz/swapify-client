import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import { userInfoReducer, signUpReducer } from './reducers/sign-up-reducer';

export const store = createStore(combineReducers({
  userInfo: userInfoReducer,
  signUp: signUpReducer,
}), applyMiddleware(promiseMiddleware()));
