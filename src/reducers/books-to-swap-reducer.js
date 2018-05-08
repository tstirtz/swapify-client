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
      books: [
        ...state.books,
        {
          title: `${action.payload.title}`,
          author: `${action.payload.author}`,
          userId: `${action.payload.userId}`
        }
       ]
    });
  }
  if (action.type === 'BOOKS_TO_SWAP_REJECTED') {
    return Object.assign({}, state, {...state, error: `${action.payload.message}`});
  }
  return state
}
