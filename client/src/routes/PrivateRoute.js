// Packages
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Functions
export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
}
