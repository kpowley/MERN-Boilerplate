// Packages
import React, { Component } from 'react';

// Setup component
export default class Post extends Component {
  // Declare state
  state = {
    field1: '',
    field2: '',
    field3: false
  };

  // Input & checkbox state update handler
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onCheck = e => this.setState({ [e.target.name]: !this.state[e.target.name] });

  // On submit event handler
  handleSubmit(e) {
    // Prevent default action
    e.preventDefault();
    // Post one item API call
    fetch('/api/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        field1: this.state.field1,
        field2: this.state.field2,
        field3: this.state.field3
      })
    });
    // Clear form and reset checkbox
    this.setState({ field1: '', field2: '', field3: false });
    this.refs.checkBox.checked = false;
  }

  render() {
    return (
      <div>
        <h2>Create: Add One</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Field1:
          <input
            type='text'
            name='field1'
            value={this.state.field1}
            onChange={this.onChange}
          />
          <br />
          Field2:
          <input
            type='text'
            name='field2'
            value={this.state.field2}
            onChange={this.onChange}
          />
          <br />
          Field3:
          <input
            type='checkbox'
            name='field3'
            value={this.state.field3}
            onChange={this.onCheck}
            ref='checkBox'
          />
          <br />
          <button type='submit'>Add to Database</button>
        </form>
        <hr />
      </div>
    );
  }
}
