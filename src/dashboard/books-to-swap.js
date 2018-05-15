import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { grey400, grey500 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
// import renderTextField from '../landing-page/materialUI-text-field';
// import { validateAddBook } from '../validators';
import { addBookToSwap } from '../actions/books-to-swap-action';
import { getUserBooks } from '../actions/get-user-books-action';

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
  constructor(props){
    super(props)

    this.dispatchAction = this.dispatchAction.bind(this);
  }
  dispatchAction(values){
    this.props.dispatch(addBookToSwap(values, this.props.userId))
      .then(() => {
        this.props.reset();
        this.props.dispatch(getUserBooks());
        if(this.props.response !== 'Already exists as a needed book') {
          this.props.toggleBookForm();
        }
      });
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
            onClick={this.props.toggleBookForm}
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
          {this.props.response === 'Already exists as a needed book' &&
            <p className='add-book-response'>{`${this.props.response}`}</p>}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
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
