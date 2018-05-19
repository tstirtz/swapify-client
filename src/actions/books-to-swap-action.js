import { normalizeResponseError } from './utils';
import { API_BASE_URL } from '../config';

export const BOOKS_TO_SWAP = 'BOOKS_TO_SWAP';
export const addBookToSwap = (values, id) => ({
  type: BOOKS_TO_SWAP,
  payload() {
    return fetch(`${API_BASE_URL}/book-to-swap`, {
      method: 'POST',
      body: JSON.stringify({
        title: values.title,
        author: values.author,
        userId: `${localStorage.getItem('userId')}`,
        username: `${localStorage.getItem('username')}`
      }),
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'content-type': 'application/json',
      },
      mode: 'cors',
    }).then(res => normalizeResponseError(res))
    .then(res => res.json())
    .catch(err => {
      const { code } = err;
      const message =
        code === 422
          ? 'Already exists as a needed book'
          : 'Unable to create book, please try again';
        console.log(message);
        return message;
    });
  }
});
