// Packages
import React, { Fragment } from 'react';

// Components
import Hello from './components/Hello';
import Post from './components/crud/Post';
import GetAll from './components/crud/GetAll';
import GetOne from './components/crud/GetOne';
import Update from './components/crud/Update';
import Delete from './components/crud/Delete';

function App() {
  return (
    <Fragment>
      <Hello />
      <Post />
      <GetAll />
      <GetOne />
      <Update />
      <Delete />
    </Fragment>
  );
}

export default App;
