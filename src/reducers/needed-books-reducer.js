const initialState = {
  title: '',
  author: '',
}

export default function addNeededBookReducer(state=initialState, action){
  if(action.type === 'NEEDED_BOOKS'){
    return Object.assign({}, state, {...state, book: `${action.values}`});
  }
  return state
}
