import React from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import { getAllBooks } from '../actions/get-all-books-action';
import MessageModal from './message-modal';


import './search-page.css';

export class SearchPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: '',
      modalRendered: false,
      snackbarRendered: false,
      bookOwnerUsername: '',
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openSnackbar = this.openSnackbar.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(getAllBooks());
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  closeModal(){
    this.setState({
      modalRendered: !this.state.modalRendered,
    });
  }

  openModal(username){
    this.setState({
      modalRendered: !this.state.modalRendered,
      bookOwnerUsername: username,
    });
  }

  openSnackbar(){
    this.setState({
      snackbarRendered: true,
    });
  }

  closeSnackBar(){
    this.setState({
      snackbarRendered: false,
    });
  }

  render(){
    let list;
    let filteredBooks = this.props.books.filter((book) => {
      return book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    if(this.props.books.length === 0){
      list = <p className="user-feedback">No books to display</p>
    }else{
      list = filteredBooks.map(book => {
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
              rightIconButton={
                <IconButton
                  value="message owner"
                  aria-label="message owner"
                >
                  <FontIcon
                    value="message owner"
                    aria-label="message owner"
                    onClick={() => this.openModal(book.username)}
                    className="far fa-envelope"
                    color={cyan500}
                    hoverColor={pinkA200}
                    style={{
                      margin: "15px",
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
      <div>
        <div className="search-field">
          <TextField
            aria-label="search books"
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
            renderSnackbar={this.openSnackbar}
            recipientUsername={this.state.bookOwnerUsername}
          />
        }
        <List className="search-results">
          {list}
        </List>
        <Snackbar
          className="snackbar"
          open={this.state.snackbarRendered}
          autoHideDuration={4000}
          onRequestClose={this.closeSnackBar}
          message={this.props.messageStatus}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.allBooks.books,
    messageStatus: state.sendMessage.status,
  }
}

export default connect(
  mapStateToProps
)(SearchPage);
