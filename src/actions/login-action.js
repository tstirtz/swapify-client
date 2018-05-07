import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseError } from './utils';

export const LOGIN = 'LOGIN';
export function login(credentials) {
  return {
    type: LOGIN,
    payload(){
        return fetch(`${API_BASE_URL}/login`, {
          body: JSON.stringify(credentials),
          headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'content-type': 'application/json',
          },
          method: 'POST',
          mode: 'cors',
          redirect: 'follow',
        }).then(res => normalizeResponseError(res))
        .then(res => res.json())
        .catch(err => {
          const { code } = err;
          const message =
            code === 401
              ? 'Incorrect username or password'
              : 'Unable to login, please try again';
          return Promise.reject(
             new SubmissionError({
              _error: message
            })
          );
        });
        // let data = await response;
        // if(response.status === 200){
        //   return response.json();
        // }
        // return data;
    }
  }
}
