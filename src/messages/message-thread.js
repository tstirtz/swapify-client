import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Textarea from "react-textarea-autosize";
import { cyan500, pinkA200 } from 'material-ui/styles/colors';

export default class MessageThread extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messages: [
        {
          from: 'masterChief117',
          to: 'me',
          content: 'Hello swapify world'
        },
        {
          from: 'me',
          to: 'masterChief117',
          content: 'Hey Chief'
        },
        {
          from: 'masterChief117',
          to: 'me',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
        },
        {
          from: 'me',
          to: 'masterChief117',
          content: "...I don't know what that means."
        },
      ]
    }
  }
  render() {
    return(
      <div
        className="messages-container"
      >
        {
          this.state.messages.map(message => {
            if(message.from === 'me'){
              return(
                <div className="sent-message">
                  <p>{message.content}</p>
                </div>
              );
            }else {
              return(
                <div className="recieved-message">
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
