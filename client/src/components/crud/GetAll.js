import React, { Component } from 'react';

export default class GetAll extends Component {
  state = {
    itemsArray: []
  };

  getAll() {
    var contentObj = [];
    fetch('/api/crud')
      .then(response => response.json())
      .then(items => {
        items.forEach(item => {
          contentObj.push(item);
        });
        this.setState({ itemsArray: contentObj });
      });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getAll()}>Get All</button>
        {this.state.itemsArray.map(item => (
          <div key={item._id}>
            <p>
              {item.field1} (id: {item._id})
            </p>
          </div>
        ))}
      </div>
    );
  }
}
