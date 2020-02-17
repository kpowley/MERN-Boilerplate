// Packages
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WithContext } from './components/with-context/with-context.component';

// Components
import Navigation from './components/navigation/navigation.component';
import Home from './pages/home/home.page';
import Routes from './routes/Routes';

// Component function
class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      fetch('/api/auth/check', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.token
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res._id) {
            this.props.value.actions.contextLogIn();
          } else {
            localStorage.removeItem('token');
          }
        });
    }
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default WithContext(App);
