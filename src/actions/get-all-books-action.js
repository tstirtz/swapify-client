import { API_BASE_URL } from '../config';
import { normalizeResponseError } from './utils';

export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const getAllBooks = () => ({
  type: GET_ALL_BOOKS,
  payload() {
    return fetch(`${API_BASE_URL}/search`, {
      'method': 'GET',
      'mode': 'cors',
      'header': {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
      }
    })
    .then(res => normalizeResponseError(res))
    .then(res => res.json())
    .catch(err => {
      console.log(err);
      return err;
    })
  }
});
