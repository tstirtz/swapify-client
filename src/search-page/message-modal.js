import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
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
      <FlatButton
        label='Cancel'
        key={1}
        primary={true}
        onClick={this.close}
      />,
      <FlatButton
        key={2}
        label='Send'
        primary={true}
        onClick={this.handleSend}
        //onClick get value from the TextField component and send it as a fetch request (called in componentDidMount) to backend to create message document
      />
    ];
    return (
      <div>
        <Dialog
          title="Message The Owner"
          titleStyle={{
            fontSize: "18px",
            width: "80%",
            textAlign: "center",
            marginRight: "10%",
            marginLeft: "10%",
          }}
          actions={actions}
          open={this.props.modalState}
          onRequestClose={this.close}
        >
          <TextField
            name="message-field"
            hintText="Want to swap?"
            fullWidth={true}
            multiLine={true}
            inputStyle={{
              height: "60%",
            }}
            onChange={this.handleTextFieldChange}
            value={this.state.messageContent}
          />
        </Dialog>
      </div>
    );
  }
}


export default connect()(MessageModal);
