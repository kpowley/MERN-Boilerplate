// Packages
import React, { Component } from 'react';
import './update-profile.styles.scss';

// Component class
export default class UpdateInfo extends Component {
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
    fetch('/api/auth/update', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.token
      },
      body: JSON.stringify({
        updates: { email: this.state.email }
      })
    })
      //.then(res => res.json())
      .then(res => {
        if (res.errors) {
          this.setState({ errors: res.errors });
        } else {
          alert('Email Updated');
          this.setState({ email: '', errors: [] });
        }
      });
  };

  render() {
    const { email, errors } = this.state;
    return (
      <div>
        <h2>Update info:</h2>
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
          <button onClick={() => this.handleSubmit()}>Update</button>
        </div>
        <hr />
      </div>
    );
  }
}
