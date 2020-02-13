// Packages
import React, { Fragment } from 'react';
import './login.styles.scss';

// Components
import Register from '../../components/register/register.component';
import Login from '../../components/login/login.component';

// Function
export default function LoginPage() {
  return (
    <Fragment>
      <Register />
      <Login />
    </Fragment>
  );
}
