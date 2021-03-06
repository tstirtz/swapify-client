import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { reducer as formReducer } from 'redux-form';
import signUpReducer from './reducers/sign-up-reducer';
import loginReducer from './reducers/login-reducer';
import navReducer from './reducers/nav-reducer';
import addBookToSwapReducer from './reducers/books-to-swap-reducer';
import getUserBooksReducer from './reducers/get-user-books-reducer';
import getAllBooksReducer from './reducers/get-all-books-reducer';
import sendMessageReducer from './reducers/send-message-reducer';
import getMessagesReducer from './reducers/get-messages-reducer';
import deleteBookReducer from './reducers/delete-book-reducer';

const middlewares = [promiseMiddleware()];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(combineReducers({
  form: formReducer,
  signUp: signUpReducer,
  login: loginReducer,
  nav: navReducer,
  bookToSwap: addBookToSwapReducer,
  userBooks: getUserBooksReducer,
  allBooks: getAllBooksReducer,
  sendMessage: sendMessageReducer,
  getMessages: getMessagesReducer,
  deletedBook: deleteBookReducer,
}),applyMiddleware(...middlewares));

export default store;
