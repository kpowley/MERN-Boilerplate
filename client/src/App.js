// Packages
import React, { Fragment } from 'react';

// Components
import Register from './components/register/register.component';
import Login from './components/login/login.component';
import Profile from './components/profile/profile.component';
import Hello from './components/Hello';
import Post from './components/crud/Post';
import GetAll from './components/crud/GetAll';
import GetOne from './components/crud/GetOne';
import Update from './components/crud/Update';
import Delete from './components/crud/Delete';

export default function App() {
  return (
    <Fragment>
      <Register />
      <Login />
      <Profile />
      <br />
      <br />
      <Hello />
      <Post />
      <GetAll />
      <GetOne />
      <Update />
      <Delete />
    </Fragment>
  );
}
