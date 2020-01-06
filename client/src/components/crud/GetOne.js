import React, { Component } from 'react';

export default class GetOne extends Component {
  state = {
    searchId: '',
    _id: '',
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  };

  getOne(id) {
    fetch(`/api/crud/${id}`)
      .then(response => response.json())
      .then(item => {
        this.setState({
          _id: item._id,
          field1: item.field1,
          field2: item.field2,
          field3: item.field3,
          field4: item.field4
        });
      });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <input
          type='text'
          name='searchId'
          placeholder='Enter Item ID'
          value={this.state.searchId}
          onChange={this.onChange}
        />
        <button onClick={() => this.getOne(this.state.searchId)}>
          Get One
        </button>
        <p>{this.state.field1}</p>
      </div>
    );
  }
}
