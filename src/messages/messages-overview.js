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
    return(
      <List>
        {this.props.messages.map( message => {
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

function mapStateToProps(state){
  return{
    messages: state.getMessages.messages
  }
}

export default connect(mapStateToProps)(MessagesOverview);
