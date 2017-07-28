import React, { Component } from 'react';
import gMapApiKey from './gmapsapi';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './css/indiv-trip.min.css';

const mapStyles = { // Styles only for the Google Map
  height: '400px',
  width: '600px'
}

class IndivTrip extends Component {
  getLatLong(mapProps, map, props) {
    if (this.props) {
      const {google} = mapProps;
      const addrInput = props.location.state.place
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: addrInput}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          const myResult = results[0].geometry.location;
          map.setCenter(myResult);
        }
      });
    }
  }
  render() {
    if (this.props) {
      return (
        <div className="indiv-trip">
          <div className="trip-info">
            <div className="row">
              <div className="col-sm-12">
                <h1>{this.props.location.state.place}</h1>
                <p>Start Date: {this.props.location.state.startDate}</p>
                <p>End Date: {this.props.location.state.endDate}</p>
              </div>
            </div>
          </div>
          <div id="map-section">
            <div className="row">
              <div className="col-sm-8">
                <div id="map">
                  <Map google={this.props.google} zoom={11} style={mapStyles} onReady={this.getLatLong}>
                    <Marker name={this.props.location.state.place} />
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
