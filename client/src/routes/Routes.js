// Packages
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/login/login.page';

// Function
const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Fragment>
  );
};
export default Routes;
