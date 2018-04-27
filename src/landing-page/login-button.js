import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginButton() {
  return (
    <button><Link to='/login-form'>Login</Link></button>
  );
}
