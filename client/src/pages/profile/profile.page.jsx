// Packages
import React, { Fragment } from 'react';
import './profile.styles.scss';

// Components
import UpdateProfile from '../../components/auth/update-profile/update-profile.component';
import UpdatePassword from '../../components/auth/update-password/update-password.component';

// Function
export default function ProfilePage() {
  return (
    <Fragment>
      <UpdateProfile />
      <UpdatePassword />
    </Fragment>
  );
}
