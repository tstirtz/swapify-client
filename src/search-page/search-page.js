import React from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import { getAllBooks } from '../actions/get-all-books-action';

import './search-page.css';

export class SearchPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // books: this.props.books,
      search: ''
    }
  }
  componentDidMount(){
    this.props.dispatch(getAllBooks());
  }
  // filterResults(value){
  //   return this.props.books.filter(book => {
  //     return book.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  //   });
  // }
  updateSearch(event){
    this.setState({search: event.target.value})
  }
  render(){
    console.log(this.props.books);
    let filteredBooks = this.props.books.filter((book) => {
      return book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    const errorCode = this.props.books.code;
    const errorMessage = this.props.books.message;
    const list = this.props.books.code ? (
      <p className= "error-message">{`${errorCode} ${errorMessage}`}</p>
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
                    innerDivStyle={{width: "50%"}}
                  />}
                  primaryText={
                    <p className="result-text">{book.title}</p>
                  }
                  secondaryText={
                    <p className="result-text">{book.author}</p>
                  }
                  rightIcon={
                    <FontIcon
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
