import React from 'react';
import TextField from 'material-ui/TextField';


const renderTextField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    className="mui-text-field"
    {...input}
    type={type}
  />
);

export default renderTextField;
