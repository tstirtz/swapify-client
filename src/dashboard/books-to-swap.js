import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
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
    style={{
      width: '60%',
      marginLeft: '20%',
      marginRight: '20%'
    }}
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
        <Dialog
          title="Add Book"
          titleStyle={{
            fontSize: "18px",
            width: "80%",
            textAlign: "center",
            marginRight: "10%",
            marginLeft: "10%",
          }}
          open={this.props.toggleBookForm}
          onRequestClose={this.props.closeModal}
          contentClassName='modal-content-container'
        >
          <form
            id="bookToSwapForm"
            className="add-book-form"
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
            <div className="form-buttons">
              <FlatButton
                key='cancel'
                className="cancel-button"
                type="submit"
                label="Cancel"
                onClick={this.props.toggleBookForm}
                style={{
                  color: "rgb(255, 64, 129)"
                }}
              />
              <FlatButton
                key='add'
                className="add-button"
                type="submit"
                htmlFor="bookToSwapForm"
                label="Add"
                disabled={this.props.pristine || this.props.submitting}
                primary={true}
              />
            </div>
            {this.props.response === 'Already exists as a needed book' &&
              <p className='add-book-response'>{`${this.props.response}`}</p>}
          </form>
        </Dialog>
      </div>
    )
  }
}

BooksToSwap.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  closeModal: PropTypes.func,
  toggleBookForm: PropTypes.func,
  response: PropTypes.string,
  reset: PropTypes.func,
  dispatch: PropTypes.func,
  userId: PropTypes.string,
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
