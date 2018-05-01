import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
const {API_BASE_URL} = require('./../config');

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

export function signUp(user){
  return {
    type: 'signUp',
    payload: Promise.resolve(true),
    // payload: async fetch(`${API_BASE_URL}/sign-up`, {
    //   body: JSON.stringify(user),
    //   // cache: 'default',
    //   // credentials: 'include',
    //   headers: {
    //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //     'content-type': 'application/json',
    //   },
    //   method: 'POST',
    //   mode: 'cors',
    //   redirect: 'follow',
    //   // referrer: 'no-referrer',
    // }).then(response => response.json())
  }
}
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const setFirstName = value => ({
  type: SET_FIRST_NAME,
  value,
});

export const SET_LAST_NAME = 'SET_LAST_NAME';
export const setLastName = value => ({
  type: SET_LAST_NAME,
  value,
});

export const SET_EMAIL = 'SET_EMAIL';
export const setEmail = value => ({
  type: SET_EMAIL,
  value,
});

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = value => ({
  type: SET_USERNAME,
  value,
});

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword = value => ({
  type: SET_PASSWORD,
  value
});

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
  if(action.type === 'signUp_PENDING'){
    return Object.assign({}, state, {pending: true});
  }
  if(action.type === 'signUp_FULFILLED'){
    return Object.assign({}, state, {pending: false});
  }
  if (action.type === 'signUp_REJECTED'){
    return Object.assign({}, state, {error: 'action.payload'});
  }
  return state;
}

export const store = createStore(combineReducers({
  userInfo: userInfoReducer,
  signUp: signUpReducer,
}), applyMiddleware(promiseMiddleware()));
// const store = composeStoreWithMiddleware(combineReducers({
//   userInfo: userInfoReducer,
//   signUp: signUpReducer,
// }));

// it('signUp', async () => {
//   const user = {
//     name: 'Test',
//   }
//
//   const newUser = signUp(user);
//   store.dispatch(newUser);
//
//   console.log(store.getState());
//
//   expect(store.getState().pending).toEqual(true);
//   await newUser.payload
//   // expect(store.getState().error).toBeDefined;
//   expect(store.getState().pending).toEqual(false);
//   // return newUser.payload.then(() => expect(store.getState().pending).toEqual(false));
// });

// it('Should run signUp_REJECTED on action failure', async () => {
//   const user = {
//     name: 'Test',
//   }
//
//   const newUser = signUp(user);
//   store.dispatch(newUser);
//
//   expect(store.getState().pending).toEqual(true);
//   await newUser.payload
//   expect(store.getState().error).toEqual('error');
//
// })
