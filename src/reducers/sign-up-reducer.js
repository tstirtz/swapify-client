import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_USERNAME, SET_PASSWORD } from '../actions/sign-up-actions';

const initialState = {
  user: {
    first: '',
    last: '',
    email: '',
    username: '',
    password: '',
  },
  pending: false,
}
export const userInfoReducer = (state=initialState, action) => {
  if(action.type === SET_FIRST_NAME){
    return Object.assign({}, state,
      {user: {...state.user, first : action.value}
      });
  }else if(action.type === SET_LAST_NAME){
    return Object.assign({}, state,
      {
        user: {...state.user, last: action.value}
      });
  }else if(action.type === SET_EMAIL){
    return Object.assign({}, state,
      {
        user: {...state.user, email: action.value}
    });
  }else if(action.type === SET_USERNAME){
    return Object.assign({}, state,
      {
        user: {...state.user, username: action.value}
    });
  }else if(action.type === SET_PASSWORD){
    return Object.assign({}, state,
      {
        user: {...state.user, password: action.value}
    });
  }
  return state;
}

export function signUpReducer(state=initialState, action){
  if(action.type === 'SIGN_UP_PENDING'){
    return Object.assign({}, state, {...state, pending: true});
  }
  if(action.type === 'SIGN_UP_FULFILLED'){
    return Object.assign({}, state, {...state, pending: false});
  }
  if (action.type === 'SIGN_UP_REJECTED'){
    return Object.assign({}, state, {...state, error: 'action.payload'});
  }
  return state;
}

export const store = createStore(combineReducers({
  userInfo: userInfoReducer,
  signUp: signUpReducer,
}), applyMiddleware(promiseMiddleware()));
