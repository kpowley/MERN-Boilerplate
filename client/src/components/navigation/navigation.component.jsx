// Packages
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import './navigation.styles.scss';

// Complonents
import Logout from '../logout/logout.component';

// Function
export default function Navigation() {
  const authLinks = (
    <ul>
      You are logged in!
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/reset'>Reset</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <Logout />
    </ul>
  );

  const guestLinks = (
    <ul>
      Welcome Guest,
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/reset'>Reset</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
    </ul>
  );

  return (
    <Consumer>
      {({ isAuthenticated }) => {
        return (
          <nav className='navbar bg-dark'>
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          </nav>
        );
      }}
    </Consumer>
  );
}
