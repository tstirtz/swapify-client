import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import BooksToSwap from './books-to-swap';
import { getUserBooks } from '../actions/get-user-books-action';
import { deleteBook } from '../actions/delete-book-action';

import './books-to-swap.css';

export class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      addBookForm: false,
    };

    this.renderForm = this.renderForm.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentDidMount() {
    return this.props.dispatch(getUserBooks());
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props.books !== nextProps.books ||
    this.state.addBookForm !== nextState.addBookForm;
  }

  deleteBook(bookId){
    this.props.dispatch(deleteBook(bookId))
      .then(() => this.props.dispatch(getUserBooks()));
  }

  renderForm(){
    console.log('renderForm called');
    this.setState({addBookForm: !this.state.addBookForm })
  }

  render(){
    let list;
    if(this.props.books.length === 0){
      list = <p className="user-feedback">No books to display</p>
    }else if(this.props.books.length >= 1){
      list = this.props.books.map( book => {
        return(
          <div
            key={book._id}
          >
            <ListItem
              hoverColor="none"
              leftIcon={<FontIcon
                className="fas fa-book"
                color={cyan500}
              />}
              primaryText={book.title}
              secondaryText={book.author}
              rightIconButton={
                <FontIcon
                  onClick={() => this.deleteBook(book._id)}
                  className="fas fa-minus delete-button"
                  color="white"
                  hoverColor={pinkA200}
                  style={{
                    fontSize:"18px",
                    margin: "15px"
                  }}
                />}
            />
            <Divider />
          </div>
        );
      });
    }
    return(
      <div>
        <div className='sub-header'>
          <h2
            className='sub-header-title'
          >
            My Books
          </h2>
          {this.state.addBookForm &&
            <BooksToSwap
              toggleBookForm={this.renderForm}
              addBookFormState={this.state.addBookForm}
            />}
          <FontIcon
            onClick={this.renderForm}
            className='fas fa-plus render-form-button'
            hoverColor={cyan500}
            style={{fontSize: "18px"}}
          />
        </div>
        <List>
          {list}
        </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.userBooks.books,
    error: state.userBooks.error,
  }
}

export default connect(
  mapStateToProps
)(Dashboard);
