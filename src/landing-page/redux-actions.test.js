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

  expect(store.getState().signUp.pending).toEqual(true);
  await newUser.payload
  expect(store.getState().signUp.pending).toEqual(false);
});


it("sets fulfilled when promise is resolved", () => {
  const action = signUp();
  action.payload = Promise.reject("an error");

  return store.dispatch(action).catch(() => {
    expect(store.getState().signUp.error).toEqual("an error");
  });
});
