const initialState = {
  books: [],
  error: '',
}

export default function getUserBooksReducer(state=initialState, action){
  if(action.type === 'GET_USER_BOOKS_PENDING'){
    return Object.assign({}, state, {...state, pending: true})
  }
  if(action.type === 'GET_USER_BOOKS_FULFILLED'){
    return Object.assign({}, state, {...state, books: action.payload, success: true})
  }
  if(action.type === 'GET_USER_BOOKS_REJECTED'){
    return Object.assign({}, state, {...state, error: `${action.payload}`, success: false},)
  }
  return state;
}
