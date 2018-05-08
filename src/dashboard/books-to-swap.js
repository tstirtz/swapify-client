import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { grey400, grey500 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
// import renderTextField from '../landing-page/materialUI-text-field';
// import { validateAddBook } from '../validators';
import { addNeededBook } from '../actions/books-to-swap-action';
import { store } from '../store';

import './books-to-swap.css';

const validate = values => {
  const errors = {}
  const requiredFields = [
    'title',
    'author',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
}

const renderTextField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    className="text-field"
    {...input}
    type={type}
  />
);

export class BooksToSwap extends React.Component{
  dispatchAction(values){
    console.log("dispatchAction called");
    console.log(values);
    this.props.dispatch(addNeededBook(values, this.props.userId))
      .then(res => console.log(store.getState()));
    this.props.reset();
  }
  render(){
    return(
      <div className='add-book-form'>
        <div className='form-header'>
          <h3>Add Book</h3>
          <FontIcon
            className="far fa-window-close close-button"
            color={grey400}
            hoverColor={grey500}
            onClick={this.props.addBookForm()}
          />
        </div>
        <form
          id="bookToSwapForm"
          onSubmit={this.props.handleSubmit(values => this.dispatchAction(values))}
        >
          <Field
            name="title"
            component={renderTextField}
            label="Book Title"
            type="text"
          />
          <Field
            name="author"
            component={renderTextField}
            label="Author"
            type="text"
          />
          <RaisedButton
            className="add-button"
            type="submit"
            htmlFor="bookToSwapForm"
            label="Add"
            primary={true}
            disabled={this.props.pristine || this.props.submitting}
          />
          {this.props.response !== undefined && <p>{`${this.props.response}`}</p>}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // title: state.addBook.title,
    // author: state.addBook.author,
    title: "Placeholder",
    author: "Placeholder",
    userId: state.login.id,
    response: state.bookToSwap.response
  }
}

const booksToSwapProps = connect(
  mapStateToProps
)(BooksToSwap);

export default reduxForm({
  form: 'bookToSwapForm',
  validate
})(booksToSwapProps);
