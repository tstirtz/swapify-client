import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import { cyan500 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/send-message-action';

export class MessageModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messageContent: '',
    }

    this.close = this.close.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }
  close(){
    this.props.closeModal();
  }
  handleTextFieldChange(event){
    this.setState({ messageContent: event.target.value });
  }
  handleSend(){
    const message = this.state.messageContent;
    const recipient = this.props.recipientUsername;
    this.props.dispatch(sendMessage(message, recipient))
      .then(() => {
        this.close();
        this.props.renderSnackbar();
      });
  }
  render() {
    const actions = [
      <Button
        className='modal-button'
        onClick={this.close}
        label='Cancel'
        key={1}
        color={cyan500}
        style={{
          borderRadius: 3,
          border: 0,
          color: '#f80759',
          height: '20px',
          padding: '0 30px',
          margin: '10px',
        }}
      >
        Cancel
      </Button>,
      <Button
        className='modal-button'
        key={2}
        label='Send'
        onClick={this.handleSend}
        style={{
          borderRadius: 3,
          border: 0,
          color: 'rgb(0, 151, 167)',
          height: '20px',
          padding: '0 30px',
          margin: '10px',
        }}
      >
        Send
      </Button>
    ];
    return (
      <section>
        <Dialog
          title="Message The Owner"
          titleStyle={{
            fontSize: "18px",
            width: "90%",
            textAlign: "center",
            marginRight: "5%",
            marginLeft: "5%",
          }}
          actions={actions}
          actionsContainerClassName='modal-button-container'
          contentClassName='modal-content-container'
          open={this.props.modalState}
          onRequestClose={this.close}
        >
          <TextField
            aria-label="message owner of book"
            name="message-field"
            hintText="Want to swap?"
            fullWidth
            multiLine
            inputStyle={{
              height: "60%",
            }}
            onChange={this.handleTextFieldChange}
            value={this.state.messageContent}
          />
        </Dialog>
      </section>
    );
  }
}

MessageModal.propTypes = {
  closeModal: PropTypes.func,
  recipientUsername: PropTypes.string,
  dispatch: PropTypes.func,
  renderSnackbar: PropTypes.func,
  modalState: PropTypes.bool,
}

MessageModal.defaultProps = {
  recipientUsername: '',
}



export default connect()(MessageModal);
