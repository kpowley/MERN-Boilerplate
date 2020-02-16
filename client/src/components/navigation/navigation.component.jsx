// Packages
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import './navigation.styles.scss';

// Function
export default function Navigation() {
  const authLinks = (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Logged in</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
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
