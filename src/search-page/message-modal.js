import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class MessageModal extends React.Component{
  constructor(props){
    super(props)

    this.close = this.close.bind(this);
  }
  close(){
    this.props.closeModal();
  }
  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.close}
      />,
      <FlatButton
        label='Send'
        primary={true}
      />
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
          />
        </Dialog>
      </div>
    );
  }
}
