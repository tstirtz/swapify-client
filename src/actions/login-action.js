import { API_BASE_URL } from '../config';

export const LOGIN = 'LOGIN';
export function login(credentials) {
  return {
    type: LOGIN,
    async payload(){
      let response = await fetch(`${API_BASE_URL}/login`, {
        body: JSON.stringify(credentials),
        // cache: 'default',
        // credentials: 'include',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
      })
      let data = await response.json();
      return data;
    }
  }
}
