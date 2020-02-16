// Packages
import React, { Component } from 'react';
import { WithContext } from '../../with-context/with-context.component';
import './register.styles.scss';

// Setup component
class Register extends Component {
  // Declare state
  state = {
    email: '',
    password: '',
    errors: []
  };

  // Input state update handler
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // On submit event handler
  handleSubmit(e) {
    // Prevent default action
    e.preventDefault();
    // Post one item API call
    fetch('/api/auth/register', {
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
          this.props.value.actions.contextLogIn();
          alert('registration successful');
          this.setState({ email: '', password: '', errors: [] });
        }
      });
  }

  render() {
    const { email, password, errors } = this.state;
    return (
      <div>
        <h2>Register:</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
          <br />
          Password:
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.onChange}
          />
          <button type='submit'>Register</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default WithContext(Register);
