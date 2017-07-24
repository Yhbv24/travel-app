import React, { Component } from 'react';

class IndivTrip extends Component {
  constructor() {
    super();
    this.state = {};
    this.getMapCoords = this.getMapCoords.bind(this);
  }
  getMapCoords() {
    this.setState({
      location: e.target.value
    });
  }
  render() {
    return (
      <div className="indiv-trip">
        <div className="trip-info">
          <h1>Iceland</h1>
        </div>
        <div id="map-section">
        </div>
      </div>
    );
  }
}

export default IndivTrip;

// AIzaSyDtQUsFyYzFcFn9XeGB4u3azXhDUSWoe74 - Maps API key
