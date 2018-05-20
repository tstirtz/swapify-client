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
    this.state = {
    //   messages: [
    //     {
    //       from: 'jimBo123',
    //       timeStamp: faker.date.past,
    //       _id: 1,
    //     },
    //     {
    //       from: 'masterChief117',
    //       timeStamp: faker.date.past,
    //       _id: 2,
    //     },
    //     {
    //       from: 'bigFudge97',
    //       timeStamp: faker.date.past,
    //       _id: 3,
    //     },
    //   ]
     }
  }
  componentDidMount(){
    console.log('componentDidMount called');
    this.props.dispatch(getMessages());
  }
  render(){
    let usernames = [];
    this.props.messages.map( message => {
        if(usernames.includes(message.from)){
          return
        }
        usernames.push(message.from)
      });
    return(
      <List>
        {
          usernames.map(username => {
            return(
              <div key={username}>
                <Link to={`/${localStorage.getItem('userId')}/message-thread`}>
                  <ListItem
                    leftIcon={<FontIcon
                      className="fas fa-user-circle"
                      // color={cyan500}
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
