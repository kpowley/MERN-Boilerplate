// Packages
import React from 'react';
import { Consumer } from '../../context';

// Component function
export const WithContext = Component => {
  return props => (
    <Consumer>{value => <Component {...props} value={value} />}</Consumer>
  );
};
