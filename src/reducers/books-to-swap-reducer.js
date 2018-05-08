const initialState = {
  title: '',
  author: '',
}

export default function addBookToSwapReducer(state=initialState, action){
  if(action.type === 'BOOKS_TO_SWAP'){
    return Object.assign({}, state, {...state, book: `${action.values}`});
  }
  return state
}
