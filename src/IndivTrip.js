import React, { Component } from 'react';
import gMapApiKey from './gmapsapi';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './css/indiv-trip.min.css';

const mapStyles = {
  height: '400px',
  width: '600px'
}

class IndivTrip extends Component {
  render() {
    if (this.props) {
      return (
        <div className="indiv-trip">
          <div className="trip-info">
            <div className="row">
              <div className="col-sm-12">
                <h1>{this.props.location.state.place}</h1>
                <p>{this.props.location.state.startDate}</p>
                <p>{this.props.location.state.endDate}</p>
              </div>
            </div>
          </div>
          <div id="map-section">
            <div className="row">
              <div className="col-sm-8">
                <div id="map">
                  <Map google={this.props.google} zoom={14} style={mapStyles}>
                    <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

export default GoogleApiWrapper({
  apiKey: (gMapApiKey)
})(IndivTrip)
