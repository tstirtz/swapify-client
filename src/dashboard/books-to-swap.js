import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import renderTextField from '../landing-page/materialUI-text-field';
import validate from '../validators';

export class BooksToSwap extends React.Component{
  dispatchAction(values){
    console.log("dispatchAction called");
    console.log(values);
  }
  render(){
    return(
      <div>
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
            className="submit-button"
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
  }
}

const booksToSwapProps = connect(
  mapStateToProps
)(BooksToSwap);

export default reduxForm({
  form: 'bookToSwapForm',
  validate
})(booksToSwapProps);
