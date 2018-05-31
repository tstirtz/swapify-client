import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
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
    this.closeForm = this.closeForm.bind(this);
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

  closeForm(){
    this.setState({
      addBookForm: !this.state.addBookForm,
    });
  }

  renderForm(){
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
                <IconButton
                  value="delete"
                  aria-label="delete"
                >
                  <FontIcon
                    onClick={() => this.deleteBook(book._id)}
                    className="fas fa-minus delete-button"
                    color="rgba(255, 255, 255, 0.6)"
                    hoverColor={pinkA200}
                    style={{
                      fontSize:"18px",
                      margin: "15px"
                    }}
                  />
                </IconButton>
                }
            />
            <Divider />
          </div>
        );
      });
    }
    return(
      <section>
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
              closeModal={this.closeForm}
            />}
          <IconButton
            value="add new book"
            aria-label="add new book"
            className="render-form-button"
            style={{
              alignSelf: "center",
              fontSize: "12px"
            }}
          >
            <FontIcon
              style={{
                fontSize: "18px"
              }}
              onClick={this.renderForm}
              className='fas fa-plus font-icon'
              hoverColor={cyan500}
            />
          </IconButton>
        </div>
        <List>
          {list}
        </List>
      </section>
    );
  }
}

Dashboard.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func,
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
