import React, { Component } from 'react';

class IndivTrip extends Component {
  render() {
    if (this.props) {
      console.log(this.props);
      return (
        <div className="indiv-trip">
          <div className="trip-info">
            <h1>{this.props.location.state.place}</h1>
          </div>
          <div id="map-section">
          </div>
        </div>
      );
    } else {
      return (
        <p>Nope!</p>
      )
    }
  }
}

export default IndivTrip;
