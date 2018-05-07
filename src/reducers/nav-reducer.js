import { NAV_ACTION } from '../actions/nav-action';

const initialState = {
  open: false,
}

export default function(state=initialState, action){
  if(action.type === NAV_ACTION){
    return Object.assign({}, state, {open: action.bool});
  }
  return state;
}
