import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from './../config';
import { normalizeResponseError } from './utils';

export const SIGN_UP = 'SIGN_UP';
export function signUp(user){
  return {
    type: SIGN_UP,
    payload(){
      return fetch(`${API_BASE_URL}sign-up`, {
        body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json, application/xml, text/html, *.*',
          'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
      }).then(res => normalizeResponseError(res))
      .then(res => res.json())
      .catch(err => {
        const {reason, message} = err;
          if (reason === 'ValidationError') {
            return Promise.reject(
              new SubmissionError(message)
            );
          }
      });
    }
  }
}
