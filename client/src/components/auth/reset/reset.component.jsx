// Packages
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './reset.styles.scss';

// Setup component
class ResetPassword extends Component {
  // Declare state
  state = {
    password: '',
    errors: []
  };

  // Input state update handler
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // On submit event handler
  handleSubmit = () => {
    // Post one item API call
    fetch('/api/auth/reset', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.props.token
      },
      body: JSON.stringify({
        password: this.state.password
      })
    }).then(res => {
      if (res.errors) {
        this.setState({ errors: res.errors });
      } else {
        alert('Your Password Was Updated');
        this.props.history.push('/login');
      }
    });
  };

  render() {
    const { password, errors } = this.state;
    return (
      <div>
        <h2>Reset Password:</h2>
        <div>
          {errors.length > 0
            ? errors.map(error => (
                <p key={Math.floor(Math.random() * 1000)}>{error.msg}</p>
              ))
            : ''}
          New Password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.onChange}
          />
          <button onClick={() => this.handleSubmit()}>Update</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default withRouter(ResetPassword);
