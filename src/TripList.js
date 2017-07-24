import React, { Component } from 'react';
import apiKey from './fbapi';

var firebase = require("firebase");
var config = {
  apiKey: apiKey,
  authDomain: "travel-app-1024e.firebaseapp.com",
  databaseURL: "https://travel-app-1024e.firebaseio.com",
  projectId: "travel-app-1024e",
  storageBucket: "travel-app-1024e.appspot.com",
  messagingSenderId: "278740906384"
};
firebase.initializeApp(config);

class TripList extends Component {
  constructor() {
    super();
    this.state = {};
    this.newPlace = this.newPlace.bind(this);
    this.newDate = this.newDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  mixins: [ReactFireMixin]
  componentWillMount() {
    this.firebaseRef = firebase.database().ref("trips");
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      this.setState({
        trips: this.items
      });
    }.bind(this));
  }
  componentWillUnmount() {
    this.firebaseRef.off();
  }
  newPlace(e) {
    this.setState({
      place: e.target.value
    });
  }
  newDate(e) {
    this.setState({
      date: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.firebaseRef.push({
      place: this.state.place,
      date: this.state.date
    });
    this.setState({
      place: '',
      date: ''
    });
  }
  render() {
    return (
      <div className="trip-list">
        <div id="add-trip">
          <input type="text" onChange={this.newPlace} placeholder="Place name" />
          <input type="date" onChange={this.newDate} placeholder="Date" />
          <button type="submit" onClick={this.handleSubmit}>Add Trip</button>
        </div>
        <div>
          <table>
            <thead>
              <th>
                <tr>
                  <td>Location</td>
                  <td>Date</td>
                </tr>
              </th>
            </thead>
            <tbody id="trip-list-row">
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TripList;
