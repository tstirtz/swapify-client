import { API_BASE_URL } from '../config';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (message, recipientUsername) => ({
  type: SEND_MESSAGE,
  payload(){
    let date = new Date();
    return fetch(`${API_BASE_URL}/send-message`, {
      method: 'POST',
      body: JSON.stringify({
        to: recipientUsername,
        from: `${localStorage.getItem('username')}`,
        content: message,
        timeStamp: date
      }),
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'content-type': 'application/json',
      },
      mode: 'cors',
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => {
        const { code } = err;
        const message =
          code === 422
          ? `${err.reason}`
          : 'Unable to send message, please try again';
          console.log(message);
          return message;
      })
  }
});
