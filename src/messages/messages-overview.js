import React from 'react';
import faker from 'faker';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import People from '@material-ui/icons/People';

import './messages.css';

export default class MessagesOverview extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messages: [
        {
          from: 'jimBo123',
          timeStamp: faker.date.past,
          _id: 1,
        },
        {
          from: 'masterChief117',
          timeStamp: faker.date.past,
          _id: 2,
        },
        {
          from: 'bigFudge97',
          timeStamp: faker.date.past,
          _id: 3,
        },
      ]
    }
  }
  render(){
    return(
      <List>
        {this.state.messages.map( message => {
          return(
            <div key={message._id}>
              <Link to={`/${localStorage.getItem('userId')}/message-thread`}>
                <ListItem
                  leftIcon={<FontIcon
                    className="fas fa-user-circle"
                    // color={cyan500}
                  />}
                  primaryText={message.from}
                  style={{
                    textDecoration:'none'
                  }}
                />
                <Divider />
              </Link>
            </div>
          )
        })
        }
      </List>
    );
  }
}
