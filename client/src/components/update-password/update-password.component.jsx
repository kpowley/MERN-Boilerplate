// Packages
import React, { Component } from 'react';
import './update-password.styles.scss';

// Setup component
export default class UpdatePassword extends Component {
  // Declare state
  state = {
    newPassword: '',
    errors: []
  };

  // Input state update handler
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // On submit event handler
  handleSubmit = () => {
    // Post one item API call
    fetch('/api/update/password', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.token
      },
      body: JSON.stringify({
        password: this.state.newPassword
      })
    })
      //.then(res => res.json())
      .then(res => {
        if (res.errors) {
          this.setState({ errors: res.errors });
        } else {
          alert('Password Updated');
          this.setState({ email: '', errors: [] });
        }
      });
  };

  render() {
    const { newPassword, errors } = this.state;
    return (
      <div>
        <h2>Update password:</h2>
        <div>
          {errors.length > 0
            ? errors.map(error => (
                <p key={Math.floor(Math.random() * 1000)}>{error.msg}</p>
              ))
            : ''}
          Password:
          <input
            type='password'
            name='newPassword'
            value={newPassword}
            onChange={this.onChange}
          />
          <button onClick={() => this.handleSubmit()}>Update</button>
        </div>
        <hr />
      </div>
    );
  }
}
