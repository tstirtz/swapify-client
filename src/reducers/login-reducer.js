const initialState = {
  username: '',
  password: '',
};

export default function loginReducer(state=initialState, action){
  if (action.type === 'LOGIN_PENDING') {
    return Object.assign({}, state, {...state, pending: true});
  }
  if (action.type === 'LOGIN_FULFILLED') {
    return Object.assign({}, state, {...state, pending: false, id: `${action.payload.id}`, jwt: `${action.payload.jwt}`});
  }
  if (action.type === 'LOGIN_REJECTED') {
    return Object.assign({}, state, {...state, error: `${action.payload}`})
  }
  return state;
}
