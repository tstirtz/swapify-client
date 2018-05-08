import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import renderTextField from '../landing-page/materialUI-text-field';
import validate from '../validators';
import { addNeededBook } from '../actions/books-to-swap-action';
import { store } from '../store';

import './books-to-swap.css';

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
  }
  render(){
    return(
      <div className='add-book-form'>
        <h3>Add Book</h3>
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
            // disabled={this.props.pristine || this.props.submitting}
          />
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
  }
}

const booksToSwapProps = connect(
  mapStateToProps
)(BooksToSwap);

export default reduxForm({
  form: 'bookToSwapForm',
  validate
})(booksToSwapProps);
