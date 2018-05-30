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
        .then(userCredentials => {
          localStorage.setItem('authToken', userCredentials.jwt);
          localStorage.setItem('userId', userCredentials.id);
          localStorage.setItem('username', userCredentials.username);
          return userCredentials;
        })
        .catch(err => {
          const { code } = err;
          const message =
            code === 401
              ? 'Incorrect username or password'
              : 'Unable to login, please try again';
          return Promise.reject(message);
        });
    }
  }
}
