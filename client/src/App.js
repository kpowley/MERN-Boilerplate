// Packages
import React, { Fragment } from 'react';

// Components
import Hello from './components/Hello';
import GetAll from './components/crud/GetAll';
import GetOne from './components/crud/GetOne';

function App() {
  return (
    <Fragment>
      <Hello />
      <GetAll />
      <GetOne />
    </Fragment>
  );
}

export default App;
