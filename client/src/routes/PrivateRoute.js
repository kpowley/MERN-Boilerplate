// Packages
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { WithContext } from '../components/with-context/with-context.component';

// Function to check if there is a token and if it is valid mark the user as "authenticated" in context state
function tockenCheck(WithContextFunction) {
  if (localStorage.token) {
    fetch('/api/auth/check', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.token
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res._id) {
          WithContextFunction();
        } else {
          localStorage.removeItem('token');
          // If token is present but not valid redirect the user
          return <Redirect to='/login' />;
        }
      });
  } else {
    // If token is not present redirect the user
    return <Redirect to='/login' />;
  }
}

// Component function
function PrivateRoute({ component: Component, value, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !value.isAuthenticated ? (
          // If isAuthenticated is false or null run a function to check for a valid token
          tockenCheck(value.actions.contextLogIn)
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default WithContext(PrivateRoute);
