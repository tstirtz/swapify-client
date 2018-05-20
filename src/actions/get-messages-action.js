import { API_BASE_URL } from '../config';

export const GET_MESSAGES = 'GET_MESSAGES';
export const getMessages = () => ({
  type: GET_MESSAGES,
  payload(){
    const username = localStorage.getItem('username');
    return fetch(`${API_BASE_URL}/${username}/messages`,{
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'content-type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(jsonResponse => jsonResponse)
    .catch(err => {
      const { code } = err;
      const message =
        code === 422
        ? `${err.message}`
        : 'Unable to retrieve message, please try again';
        console.log(message);
        return message;
    })
  }
})
