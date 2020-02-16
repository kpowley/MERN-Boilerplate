// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context';

// Import App
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
