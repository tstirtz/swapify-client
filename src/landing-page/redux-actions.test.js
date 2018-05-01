// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
//
// const initialState = {
//   user: {
//     first: '',
//     last: '',
//     email: '',
//     username: '',
//     password: '',
//   },
//   pending: false,
// }
// export const userInfoReducer = (state=initialState, action) => {
//   if(action.type === SET_FIRST_NAME){
//     return Object.assign({}, state,
//       {user: {...state.user, first : action.value}
//       });
//   }else if(action.type === SET_LAST_NAME){
//     return Object.assign({}, state,
//       {
//         user: {...state.user, last: action.value}
//       });
//   }else if(action.type === SET_EMAIL){
//     return Object.assign({}, state,
//       {
//         user: {...state.user, email: action.value}
//     });
//   }else if(action.type === SET_USERNAME){
//     return Object.assign({}, state,
//       {
//         user: {...state.user, username: action.value}
//     });
//   }else if(action.type === SET_PASSWORD){
//     return Object.assign({}, state,
//       {
//         user: {...state.user, password: action.value}
//     });
//   }
//   return state;
// }
//
// export function signUpReducer(state=initialState, action){
//   if(action.type === 'SIGN_UP_PENDING'){
//     return Object.assign({}, state, {...state, pending: true});
//   }
//   if(action.type === 'SIGN_UP_FULFILLED'){
//     return Object.assign({}, state, {...state, pending: false});
//   }
//   if (action.type === 'SIGN_UP_REJECTED'){
//     return Object.assign({}, state, {...state, error: 'action.payload'});
//   }
//   return state;
// }
//
// export const store = createStore(combineReducers({
//   userInfo: userInfoReducer,
//   signUp: signUpReducer,
// }), applyMiddleware(promiseMiddleware()));
// const store = composeStoreWithMiddleware(combineReducers({
//   userInfo: userInfoReducer,
//   signUp: signUpReducer,
// }));

// it('signUp', async () => {
//   const user = {
//     name: 'Test',
//   }
//
//   const newUser = signUp(user);
//   store.dispatch(newUser);
//
//   console.log(store.getState());
//
//   expect(store.getState().pending).toEqual(true);
//   await newUser.payload
//   // expect(store.getState().error).toBeDefined;
//   expect(store.getState().pending).toEqual(false);
//   // return newUser.payload.then(() => expect(store.getState().pending).toEqual(false));
// });

// it('Should run signUp_REJECTED on action failure', async () => {
//   const user = {
//     name: 'Test',
//   }
//
//   const newUser = signUp(user);
//   store.dispatch(newUser);
//
//   expect(store.getState().pending).toEqual(true);
//   await newUser.payload
//   expect(store.getState().error).toEqual('error');
//
// })
