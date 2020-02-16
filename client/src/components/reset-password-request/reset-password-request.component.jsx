// Packages
import React, { Component } from 'react';
import './reset-password-request.style.scss';

// Setup component
export default class ResetPassword extends Component {
  // Declare state
  state = {
    email: '',
    errors: []
  };

  // Input state update handler
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // On submit event handler
  handleSubmit = () => {
    // Post one item API call
    fetch('/api/passwordreset/email', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email
      })
    }).then(res => {
      if (res.errors) {
        this.setState({ errors: res.errors });
      } else {
        alert('Reset email sent');
        this.setState({ email: '', errors: [] });
      }
    });
  };

  render() {
    const { email, errors } = this.state;
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
          <button onClick={() => this.handleSubmit()}>Send Link</button>
        </div>
        <hr />
      </div>
    );
  }
}
