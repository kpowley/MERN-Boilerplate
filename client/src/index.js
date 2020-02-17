// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context';

// Components
import App from './App';

// Component function
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
