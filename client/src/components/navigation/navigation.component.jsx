// Packages
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { WithContext } from '../with-context/with-context.component';
import './navigation.styles.scss';

// Components
import Logout from '../auth/logout/logout.component';

// Component function
function Navigation({ value }) {
  // Logged-in links
  const authLinks = (
    <div>
      You are logged in!
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/reset'>Reset</Link>
      <Link to='/profile'>Profile</Link>
      <Logout />
    </div>
  );

  // Logged-out links
  const guestLinks = (
    <ul>
      Welcome Guest,
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/reset'>Reset</Link>
      <Link to='/profile'>Profile</Link>
    </ul>
  );

  return (
    <nav>
      <Fragment>{value.isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
}

export default WithContext(Navigation);
