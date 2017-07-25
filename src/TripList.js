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
  componentWillMount() {
    this.firebaseRef = firebase.database().ref("trips");
  }
  componentDidMount() {
    var allTrips = [];
    var _this = this;
    var firebaseRef = firebase.database().ref();
    this.firebaseRef.once('value').then(function(data) {
      _this.setState({
        trips: data.val()
      });
    });
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
  }
  render() {
    if (this.state.trips) {
      return (
        <div className="trip-list">
          <div id="add-trip">
            <input type="text" onChange={this.newPlace} value={this.state.place} placeholder="Place name" />
            <input type="date" onChange={this.newDate} value={this.state.date} placeholder="Date" />
            <button type="submit" onClick={this.handleSubmit}>Add Trip</button>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody id="trip-list-row">
                {Object.keys(this.state.trips).map((i) =>
                  <tr key={i}>
                    <td>{this.state.trips[i].place}</td>
                    <td>{this.state.trips[i].date}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Nada
        </div>
      )
    }
  }
}

export default TripList;
