import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/send-message-action';

const style = {
  // background: 'linear-gradient(to right, #bc4e9c, #f80759)',
  borderRadius: 3,
  border: 0,
  color: '#f80759',
  height: '20px',
  padding: '0 30px',
  margin: '10px',
  // boxShadow: '0 3px 5px 2px rgba(0, 43, 128, .30)',
};

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
        //onClick get value from the TextField component and send it as a fetch request (called in componentDidMount) to backend to create message document
      >
        Send
      </Button>
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
