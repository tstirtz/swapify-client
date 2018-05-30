import { API_BASE_URL } from '../config';


export const GET_USER_BOOKS = 'GET_USER_BOOKS';
export const getUserBooks = () => ({
  type: GET_USER_BOOKS,
  payload() {
    return fetch(`${API_BASE_URL}/user-books/${localStorage.getItem('userId')}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      },
      mode: 'cors',
    })
    .then(res => res.json())
    .then(jsonData => {
      return jsonData;
    })
    .catch(err => {
      const message = "Couldn't retrieve data";
      return message;
    });
  }
})
