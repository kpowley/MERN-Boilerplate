// Packages
import React, { Fragment } from 'react';
import './reset.styles.scss';

// Components
import Reset from '../../components/auth/reset/reset.component';

// Function
export default function ResetPasswordPage(props) {
  return (
    <Fragment>
      <Reset token={props.match.params.token} />
    </Fragment>
  );
}
