import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import BooksToSwap from './books-to-swap';
import NeededBooks from './needed-books';

export class AddBook extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 1};
  }
    handleChange = (event, index, value) => this.setState({value});
    render(){
      return(
        <div>
          {this.state.value === 1 &&
            <BooksToSwap />
          }
          {this.state.value === 2 &&
            <NeededBooks />
          }
          <DropDownMenu
            value={this.state.value}
            onChange={this.handleChange}
            // autoWidth={false}
          >
            <MenuItem value={1} primaryText="Swap" />
            <MenuItem value={2} primaryText="Need" />
          </DropDownMenu>
        </div>
      );
    }
}
