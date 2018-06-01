import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import { getMessages } from '../actions/get-messages-action';

import './messages.css';

export class MessagesOverview extends React.Component{
  componentDidMount(){
    this.props.dispatch(getMessages());
  }
  render(){
    let usernames = [];
    let list;
    this.props.messages.forEach(function(message){
        if(usernames.includes(message.from)){
          return
        }else if(message.from === localStorage.getItem('username')){
          return
        }else {
          usernames.push(message.from)
        }
      });
    if(usernames.length === 0){
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

MessagesOverview.propTypes = {
  dispatch: PropTypes.func,
  messages: PropTypes.arrayOf(PropTypes.object),
  
}

function mapStateToProps(state){
  return{
    messages: state.getMessages.messages
  }
}

export default connect(mapStateToProps)(MessagesOverview);
