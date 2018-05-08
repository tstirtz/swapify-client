import React from 'react';
import BooksToSwap from './books-to-swap';
import { API_BASE_URL } from '../config';

export default class Dashboard extends React.Component{
  componentDidMount() {
    return fetch(`${API_BASE_URL}/user-books/${localStorage.getItem('userId')}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      },
      mode: 'cors',
    })
    .then(res => {
      console.log(res.json());
    })
    .catch(err => {
      console.log(err);
      const message = "Couldn't retrieve data";
      return message;
    })
  }
  render(){
    return(
      <div>
        <h1>This is the Dashboard</h1>
        <BooksToSwap />
      </div>
    );
  }
}
