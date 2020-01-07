// Packages
import React, { Component } from 'react';

// Setup component
export default class GetAll extends Component {
  // Declare state
  state = {
    itemsArray: []
  };

  // Get all items API call
  getAll() {
    // Vartiable to add items to
    var contentObj = [];
    fetch('/api/crud')
      .then(response => response.json())
      .then(items => {
        // Cycle through items and add them to variable
        items.forEach(item => {
          contentObj.push(item);
        });
        // Update the state using variable
        this.setState({ itemsArray: contentObj });
      });
  }

  // Run get all function on component mount for initial results
  componentDidMount() {
    this.getAll();
  }

  render() {
    return (
      <div>
        <h2>Read: Get All</h2>
        {/* Map through objects in array to create a line for each one */}
        {this.state.itemsArray.map(item => (
          <div key={item._id}>
            <p>
              {item.field1} (id: {item._id})
            </p>
          </div>
        ))}
        <button onClick={() => this.getAll()}>Update All</button>
        <hr />
      </div>
    );
  }
}
