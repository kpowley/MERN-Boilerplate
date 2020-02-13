// Packages
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navigatin from './components/navigation/navigation.component';
import Home from './pages/home/home.page';
import Routes from './routes/Routes';

// Function
export default class App extends Component {
  state = {
    isAuthenticated: false
  };
  render() {
    return (
      <Router>
        <Fragment>
          <Navigatin isAuthenticated={this.state.isAuthenticated} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

// // Packages
// import React, { Fragment } from 'react';

// // Components
// import Register from './components/register/register.component';
// import Login from './components/login/login.component';
// import Profile from './components/profile/profile.component';
// import Hello from './components/Hello';
// import Post from './components/crud/Post';
// import GetAll from './components/crud/GetAll';
// import GetOne from './components/crud/GetOne';
// import Update from './components/crud/Update';
// import Delete from './components/crud/Delete';

// export default function App() {
//   return (
//     <Fragment>
//       <Register />
//       <Login />
//       <Profile />
//       <br />
//       <br />
//       <Hello />
//       <Post />
//       <GetAll />
//       <GetOne />
//       <Update />
//       <Delete />
//     </Fragment>
//   );
// }
