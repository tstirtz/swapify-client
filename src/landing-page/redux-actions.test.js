import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { signUp, setFirstName, setLastName, setEmail, setUsername, setPassword } from '../actions/sign-up-actions';
import { store } from '../store';

xit('signUp', async () => {
  const user = {
    name: 'Test',
  }

  const newUser = signUp(user);
  store.dispatch(newUser);

  console.log(store.getState());

  expect(store.getState().signUp.pending).toEqual(true);
  await newUser.payload
  // expect(store.getState().error).toBeDefined;
  expect(store.getState().signUp.pending).toEqual(false);
  // return newUser.payload.then(() => expect(store.getState().pending).toEqual(false));
});

it('Should set the users first name', () => {
  const user = 'Test';

  const action = setFirstName(user);
  store.dispatch(action);

  expect(store.getState().userInfo.user.first).toEqual('Test');
});

it('Should set the users last name', () => {
  const user = 'Test';

  const action = setLastName(user);
  store.dispatch(action);

  expect(store.getState().userInfo.user.last).toEqual('Test');
});

it('Should set the users name', () => {
  const userEmail = 'test@gmail.com';

  const action = setEmail(userEmail);
  store.dispatch(action);

  expect(store.getState().userInfo.user.email).toEqual(userEmail);
});

it('Should set the users username', () => {
  const username = 'test1234';

  const action = setUsername(username);
  store.dispatch(action);

  expect(store.getState().userInfo.user.username).toEqual(username);
});

it('Should set the users password', () => {
  const password = 'test1234';

  const action = setPassword(password);
  store.dispatch(action);

  expect(store.getState().userInfo.user.password).toBeTruthy();
});

// it('Should run signUp_REJECTED on action failure', async () => {
//   const user = {
//     name: 'Test',
//   }
//
//   const newUser = signUp(user);
//   newUser.payload = Promise.reject('error');
//   store.dispatch(newUser);
//
//   expect(store.getState().pending).toEqual(true);
//   await newUser.payload
//   expect(store.getState().error).toEqual('error');
//
// });

xit("sets fulfilled when promise is resolved", () => {
  const action = signUp();
  action.payload = Promise.reject("an error");

  return store.dispatch(action).catch(() => {
    expect(store.getState().signUp).toEqual("an error");
  });
});
