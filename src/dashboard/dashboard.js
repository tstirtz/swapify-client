import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { AddBook } from './add-book';

export default function Dashboard(){
    return(
      <div>
        <h1>This is the Dashboard</h1>
        <AddBook />
      </div>
    );
}
