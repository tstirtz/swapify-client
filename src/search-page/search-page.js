import React from 'react';
import TextField from 'material-ui/TextField';

import './search-page.css';

export default function SearchPage(){
  return(
    <div className="search-field">
      <TextField
        hintText="Search"
        type="search"
        fullWidth={true}
      /><br />
    </div>
  )
}
