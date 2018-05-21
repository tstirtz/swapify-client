import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Textarea from "react-textarea-autosize";
import { pinkA200 } from 'material-ui/styles/colors';
import { getMessages } from '../actions/get-messages-action';

export class MessageThread extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newMessage: '',
    }
    this.handleTextAreaChange =this.handleTextAreaChange.bind(this);
  }
  componentDidMount(){
    this.props.dispatch(getMessages());
  }
  handleTextAreaChange(event){
    this.setState({ newMessage: event.target.value})
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
          />
          {/* <TextField
            name="message-field"
            hintText="Want to swap?"
            // fullWidth={true}
            multiLine={true}
            inputStyle={{
              height: "60%",
            }}
          /> */}
          <IconButton
            iconClassName="fas fa-arrow-circle-up"
            iconStyle={{
              iconHoverColor:`${pinkA200}`,
            }}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    messages: state.getMessages.messages,
  }
}

export default connect(mapStateToProps)(MessageThread);
