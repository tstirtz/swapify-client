const initialState = {
  books: [],
}

export default function getAllBooksReducer(state=initialState, action){
  if(action.type === 'GET_ALL_BOOKS_PENDING'){
    return Object.assign({}, state, {...state, pending: true});
  }
  if(action.type === 'GET_ALL_BOOKS_FULFILLED'){
    return Object.assign({}, state, {...state, pending: false, books: action.payload});
  }
  if(action.type === 'GET_ALL_BOOKS_REJECTED'){
    return Object.assign({}, state, {...state, pending: false, error: action.payload});
  }
  return state;
}
