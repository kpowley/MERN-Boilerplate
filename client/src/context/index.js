import React, { Component } from 'react';

const AppContext = React.createContext();

export class Provider extends Component {
  state = {
    isAuthenticated: false
  };

  contextLogIn = () => {
    this.setState({ isAuthenticated: true });
  };

  contextLogOut = () => {
    localStorage.removeItem('token');
    this.setState({ isAuthenticated: false });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
          actions: {
            contextLogIn: this.contextLogIn,
            contextLogOut: this.contextLogOut
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export const Consumer = AppContext.Consumer;
