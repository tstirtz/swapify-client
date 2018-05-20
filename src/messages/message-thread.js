import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Textarea from "react-textarea-autosize";
import { cyan500, pinkA200 } from 'material-ui/styles/colors';

export class MessageThread extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   messages: [
    //     {
    //       from: 'masterChief117',
    //       to: 'me',
    //       content: 'Hello swapify world'
    //     },
    //     {
    //       from: 'me',
    //       to: 'masterChief117',
    //       content: 'Hey Chief'
    //     },
    //     {
    //       from: 'masterChief117',
    //       to: 'me',
    //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
    //     },
    //     {
    //       from: 'me',
    //       to: 'masterChief117',
    //       content: "...I don't know what that means."
    //     },
    //   ]
    // }
  }
  componentDidMount(){
    //filter messages by the 'from' and 'to' property
  }
  render() {
    let filteredMessages = [];
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
