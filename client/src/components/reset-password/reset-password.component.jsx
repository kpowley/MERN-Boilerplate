// Packages
import React, { Component } from 'react';
import './reset-password.style.scss';

// Setup component
export default class ResetPassword extends Component {
  // Declare state
  state = {
    email: ''
  };

  // Input state update handler
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // On submit event handler
  handleSubmit = () => {
    // Post one item API call
    fetch('/api/auth', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          this.setState({ errors: res.errors });
        } else {
          localStorage.setItem('token', res.token);
          contextLogIn();
          alert('Login successful');
          this.setState({ email: '', password: '', errors: [] });
        }
      });
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <h2>Reset Password:</h2>
        <div>
          {errors.length > 0
            ? errors.map(error => (
                <p key={Math.floor(Math.random() * 1000)}>{error.msg}</p>
              ))
            : ''}
          Email:
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={this.onChange}
          />
          <button onClick={() => this.handleSubmit()}>Login</button>
        </div>
        <hr />
      </div>
    );
  }
}
