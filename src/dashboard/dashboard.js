import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { cyan500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import BooksToSwap from './books-to-swap';
import { API_BASE_URL } from '../config';

import './books-to-swap.css';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      books: [],
      addBookForm: false,
    };

    this.renderForm = this.renderForm.bind(this);
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
  renderForm(){
    this.setState({addBookForm: !this.state.addBookForm})
  }
  render(){
    return(
      <div>
        <div className='sub-header'>
          <h2
            className='sub-heading'
          >
            My Books
          </h2>
          {this.state.addBookForm && <BooksToSwap />}
          <FontIcon
            onClick={this.renderForm}
            className='fas fa-plus render-form-button'
            hoverColor={cyan500}
            style={{fontSize: "18px"}}
          />
        </div>
        {/* {this.state.addBookForm && <BooksToSwap />} */}
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
