// Packages
import React from 'react';
import { WithContext } from '../../with-context/with-context.component';
import './logout.styles.scss';

// Component function
function Logout({ value }) {
  return <div onClick={() => value.actions.contextLogOut()}>Log Out</div>;
}

export default WithContext(Logout);
