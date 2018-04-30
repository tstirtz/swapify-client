import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
const {API_BASE_URL} = require('./../config');

function signUp(user){
  return {
    type: 'signUp',
    payload: Promise.resolve(true),
    // payload: fetch(`${API_BASE_URL}/sign-up`, {
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

function signUpReducer(state, action){
  console.log(state);
  if(action.type === 'signUp_PENDING'){
    return Object.assign({}, state, {pending: true});
  }
  if(action.type === 'signUp_FULFILLED'){
    return Object.assign({}, state, {pending: false});
  }
  return state;
}

const composeStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);
const store = composeStoreWithMiddleware(signUpReducer, {test: 'test'});

it('signUp', async () => {
  const user = {
    name: 'Test',
  }

  const newUser = signUp(user);
  store.dispatch(newUser);

  expect(store.getState().pending).toEqual(true);
  await newUser.payload
  expect(store.getState().pending).toEqual(false);
  // return newUser.payload.then(() => expect(store.getState().pending).toEqual(false));
});
