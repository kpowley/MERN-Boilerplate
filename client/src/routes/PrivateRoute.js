// Packages
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { WithContext } from '../components/with-context/with-context.component';

// Functions
function PrivateRoute({ component: Component, value, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !value.isAuthenticated ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default WithContext(PrivateRoute);
