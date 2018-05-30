const initialState = {
  books: []
}

export default function addBookToSwapReducer(state=initialState, action){
  if(action.type === 'BOOKS_TO_SWAP_PENDING'){
    return Object.assign({}, state, {...state, pending: true});
  }
  if(action.type === 'BOOKS_TO_SWAP_FULFILLED'){
    return Object.assign({}, state, {
      ...state,
      pending: false,
      response: `${action.payload}`
    });
  }
  if (action.type === 'BOOKS_TO_SWAP_REJECTED') {
    return Object.assign({}, state, {...state, error: `${action.payload.message}`});
  }
  return state
}
