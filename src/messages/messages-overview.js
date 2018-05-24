import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import { getMessages } from '../actions/get-messages-action';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import People from '@material-ui/icons/People';

import './messages.css';

export class MessagesOverview extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log('componentDidMount called');
    this.props.dispatch(getMessages());
  }
  render(){
    let usernames = [];
    let list;
    this.props.messages.map( message => {
        if(usernames.includes(message.from)){
          return
        }
        usernames.push(message.from)
      });
      //link should render message thread with specific user
    if(this.props.messages.length === 0){
      list = <p className="user-feedback">No messages to display</p>
    }else{
      list = usernames.map(username => {
        return(
          <div key={username}>
            <Link to={`/${username}/message-thread`}>
              <ListItem
                leftIcon={<FontIcon
                  className="fas fa-user-circle"
                />}
                primaryText={username}
                style={{
                  textDecoration:'none'
                }}
              />
              <Divider />
            </Link>
          </div>
        );
      })
    }
    return(
      <List>
        {list}
      </List>
    );
  }
}

function mapStateToProps(state){
  return{
    messages: state.getMessages.messages
  }
}

export default connect(mapStateToProps)(MessagesOverview);
