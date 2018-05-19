import React from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import { getAllBooks } from '../actions/get-all-books-action';
import MessageModal from './message-modal';

import './search-page.css';

export class SearchPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // books: this.props.books,
      search: '',
      modalRendered: false,
      bookOwnerUsername: '',
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(getAllBooks());
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  closeModal(){
    console.log(this);
    this.setState({
      modalRendered: !this.state.modalRendered,
    });
  }
  openModal(username){
    console.log(username);
    this.setState({
      modalRendered: !this.state.modalRendered,
      bookOwnerUsername: username,
    });
  }

  render(){
    console.log(this.props.books);
    let filteredBooks = this.props.books.filter((book) => {
      return book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    const errorCode = this.props.books.code;
    const errorMessage = this.props.books.message;
    const list = this.props.books.code ? (
      <p className="error-message">{`${errorCode} ${errorMessage}`}</p>
    ) : (
      <List className="search-results">
        {
          filteredBooks.map(book => {
            return (
              <div
                key={book._id}
              >
                <ListItem
                  className="list-item"
                  leftIcon={<FontIcon
                    className="fas fa-book"
                    color={cyan500}
                  />}
                  primaryText={
                    <p className="result-text">{book.title}</p>
                  }
                  secondaryText={
                    <p className="result-text">{book.author}</p>
                  }
                  rightIcon={
                    <FontIcon
                      onClick={() => this.openModal(book.username)}
                      className="far fa-envelope"
                      color={cyan500}
                      hoverColor={pinkA200}
                    />}
                />
                <Divider />
              </div>
            )
          })
        }
      </List>
    )
    return(
      <div>
        <div className="search-field">
          <TextField
            onChange={this.updateSearch.bind(this)}
            value={this.state.search}
            hintText="Search"
            type="search"
            fullWidth={true}
          /><br />
        </div>
        {this.state.modalRendered === true &&
          <MessageModal
            modalState={this.state.modalRendered}
            closeModal={this.closeModal}
            recipientUsername={this.state.bookOwnerUsername}
          />
        }
        {list}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.allBooks.books,
  }
}

export default connect(
  mapStateToProps
)(SearchPage);
