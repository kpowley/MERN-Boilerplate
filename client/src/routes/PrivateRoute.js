// Packages
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from '../context';

// Functions
export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  return (
    <Consumer>
      {({ isAuthenticated }) => {
        return (
          <Route
            {...rest}
            render={props =>
              !isAuthenticated ? (
                <Redirect to='/login' />
              ) : (
                <Component {...props} />
              )
            }
          />
        );
      }}
    </Consumer>
  );
}
