const initialState = {
  book: []
}

export default function deleteBookReducer(state=initialState, action){
  if(action.type === 'GET_MESSAGES_PENDING'){
  return Object.assign({}, state, {...state, pending: true});
  }
  if(action.type === 'GET_MESSAGES_FULFILLED'){
    return Object.assign({}, state, {...state, pending: false, book: action.payload});
  }
  if(action.type === 'GET_MESSAGES_REJECTED'){
    return Object.assign({}, state, {...state, error: action.payload});
  }
  return state;
}
