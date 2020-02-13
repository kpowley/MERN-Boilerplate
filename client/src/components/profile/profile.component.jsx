// Packages
import React from 'react';
import './profile.styles.scss';

// Function
const example = () => {
  fetch('/api/protected', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.token
    }
  })
    .then(response => response.json())
    .then(items => console.log(items));
};

example();

export default function Profile() {
  return <div>test</div>;
}
