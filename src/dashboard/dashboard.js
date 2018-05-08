import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { cyan500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import BooksToSwap from './books-to-swap';
import { API_BASE_URL } from '../config';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      books: []
    };
  }
  componentDidMount() {
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
      console.log(jsonData);
      jsonData.map(book => this.setState({ books: [...this.state.books, book] }));
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
        <List>
          {this.state.books.map( book => {
            return(
              <div
                key={book._id}
              >
                <ListItem
                  leftIcon={<FontIcon
                    className="fas fa-book"
                    color={cyan500}
                  />}
                  primaryText={book.title}
                  secondaryText={book.author}
                />
                <Divider />
              </div>
            )
          })
          }
        </List>
      </div>
    );
  }
}
