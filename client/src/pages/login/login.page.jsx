// Packages
import React, { Fragment } from 'react';
import './login.styles.scss';

// Components
import Login from '../../components/auth/login/login.component';
import Register from '../../components/auth/register/register.component';
import ResetRequest from '../../components/auth/reset-send/reset-send.component';

// Component function
export default function LoginPage() {
  return (
    <Fragment>
      <Login />
      <Register />
      <ResetRequest />
    </Fragment>
  );
}
