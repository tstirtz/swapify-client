const {API_BASE_URL} = require('./../config');

export const SIGN_UP = 'SIGN_UP';
export function signUp(user){
  return {
    type: SIGN_UP,
    async payload(){
      let response = await fetch(`${API_BASE_URL}/sign-up`, {
        body: JSON.stringify(user),
        // cache: 'default',
        // credentials: 'include',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        // referrer: 'no-referrer',
      })
      let data = await response.json();
      return data;
    }
  }
}

// export const SET_FIRST_NAME = 'SET_FIRST_NAME';
// export const setFirstName = value => ({
//   type: SET_FIRST_NAME,
//   value,
// });
//
// export const SET_LAST_NAME = 'SET_LAST_NAME';
// export const setLastName = value => ({
//   type: SET_LAST_NAME,
//   value,
// });
//
// export const SET_EMAIL = 'SET_EMAIL';
// export const setEmail = value => ({
//   type: SET_EMAIL,
//   value,
// });
//
// export const SET_USERNAME = 'SET_USERNAME';
// export const setUsername = value => ({
//   type: SET_USERNAME,
//   value,
// });
//
// export const SET_PASSWORD = 'SET_PASSWORD';
// export const setPassword = value => ({
//   type: SET_PASSWORD,
//   value
// });
