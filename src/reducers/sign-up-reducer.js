import promiseMiddleware from 'redux-promise-middleware';

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


export default function signUpReducer(state=initialState, action){
  if(action.type === 'SIGN_UP_PENDING'){
    return Object.assign({}, state, {...state, pending: true});
  }
  if(action.type === 'SIGN_UP_FULFILLED'){
    return Object.assign({}, state, {...state, pending: false, statusCode: `${action.payload.code}`, response: `${action.payload.message}` });
  }
  if (action.type === 'SIGN_UP_REJECTED'){
    return Object.assign({}, state, {...state, error: `${action.payload.message}`});
  }
  return state;
}
