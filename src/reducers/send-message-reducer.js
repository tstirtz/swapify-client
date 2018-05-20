const initialState = {
  response: '',
  status: '',
}

export default function sendMessageReducer(state=initialState, action){
  if(action.type === 'SEND_MESSAGE_PENDING'){
    return Object.assign({}, state, {...state, pending: true});
  }
  if(action.type === 'SEND_MESSAGE_FULFILLED'){
    return Object.assign({}, state, {...state, response: action.payload, status: action.payload.message});
  }
  if(action.type === 'SEND_MESSAGE_REJECTED'){
    return Object.assign({}, state, {...state, error: action.payload});
  }
  return state;
}
