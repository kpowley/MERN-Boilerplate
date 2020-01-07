// Packages
import React, { Component } from 'react';

// Setup component
export default class GetOne extends Component {
  // Declare state
  state = {
    deleteId: ''
  };

  // Delete item API call
  deleteOne(id) {
    fetch(`/api/crud/${id}`, {
      method: 'delete'
    });
  }

  // Input state update handler
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h2>Delete</h2>
        <input
          type='text'
          name='deleteId'
          placeholder='Enter Item ID'
          value={this.state.deleteId}
          onChange={this.onChange}
        />
        <button onClick={() => this.deleteOne(this.state.deleteId)}>
          Delete One
        </button>
        <hr />
      </div>
    );
  }
}
