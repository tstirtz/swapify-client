import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Button from '@material-ui/core/Button';
import Textarea from "react-textarea-autosize";
import Snackbar from 'material-ui/Snackbar';
import { pinkA200 } from 'material-ui/styles/colors';
import { getMessages } from '../actions/get-messages-action';
import { sendMessage } from '../actions/send-message-action';

const style = {
  background: 'linear-gradient(to right, #bc4e9c, #f80759)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: '20px',
  padding: '0 30px',
  margin: '10px',
  boxShadow: '0 3px 5px 2px rgba(0, 43, 128, .30)',
};

export class MessageThread extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newMessage: '',
      snackbarRendered: false,
    }
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.openSnackbar = this.openSnackbar.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(getMessages());
  }

  handleTextAreaChange(event){
    this.setState({ newMessage: event.target.value})
  }

  sendMessage(){
    console.log('SendMessage called');
    let pathname = window.location.pathname;
    let pathnameValues = pathname.split('/');
    let recipient = pathnameValues[1];

    this.props.dispatch(sendMessage(this.state.newMessage, recipient))
      .then(() => {
        this.openSnackbar();
        if(this.props.messageStatus === 'Message sent'){
          this.setState({ newMessage: ''});
        }
      });
  }

  openSnackbar(){
    console.log('------------- openSnackBar called');
    this.setState({
      snackbarRendered: true,
    })
  }

  closeSnackbar(){
    this.setState({
      snackbarRendered: false,
    })
  }
  render() {
    let pathname = window.location.pathname
    let pathnameValues = pathname.split('/')
    console.log(pathnameValues[1]);

    return(
      <div
        className="messages-container"
      >
        {
          this.props.messages.map(message => {
            if(message.from === `${localStorage.getItem('username')}`){
              return(
                <div
                  className="sent-message"
                  key={message._id}
                >
                  <p>{message.content}</p>
                </div>
              );
            }else if(message.from === pathnameValues[1]){
              return(
                <div
                  className="recieved-message"
                  key={message._id}
                >
                  <p>{message.content}</p>
                </div>
              );
            }
          })
        }
        <div
          className="input-container"
        >
          <Textarea
            className="message-input"
            value={this.state.newMessage}
            onChange={this.handleTextAreaChange}
            style={{
              fontSize: '16px',
              padding: '7.5px',
              margin: '10px',
            }}
          />
          <Button
            onClick={this.sendMessage}
            style={style}
          >
            Send
          </Button>
        </div>
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
  return{
    messages: state.getMessages.messages,
    messageStatus: state.sendMessage.status,
  }
}

export default connect(mapStateToProps)(MessageThread);
