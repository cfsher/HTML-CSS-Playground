import React, { Component } from 'react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <ul className="list-group list-group-flush" id="side-nav">
          <li className="list-group-item list-group-item-action side-tab">Test 1</li>
          <li className="list-group-item list-group-item-action side-tab">Test 2</li>
          <li className="list-group-item list-group-item-action side-tab">Test 3</li>
        </ul>
      </div>
    );
  }
}
