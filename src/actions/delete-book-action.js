import { API_BASE_URL } from '../config';

export const DELETE_BOOK = 'DELETE_BOOK';
export const deleteBook = bookId => ({
  type: DELETE_BOOK,
  payload(){
    return fetch(`${API_BASE_URL}/${bookId}/delete-book`,{
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'content-type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(jsonResponse => {
        return jsonResponse;
    })
    .catch(err => {
      return err;
    })
  }
})
