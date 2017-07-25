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
  constructor(props) {
    super(props);
    this.state = {};
    this.newPlace = this.newPlace.bind(this);
    this.newDate = this.newDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.populateData = this.populateData.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }
  firebaseRef = firebase.database().ref("trips");
  componentWillMount() {
    this.populateData();
  }
  populateData() {
    var _this = this;
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
    this.populateData();
  }
  deleteEntry(key) {
    this.firebaseRef.child(key).remove();
    this.populateData();
  }
  render() {
    if (this.state.trips) {
      return (
        <div className="trip-list">
          <div id="add-trip">
            <input id="place" type="text" onChange={this.newPlace} value={this.state.place} placeholder="Place name" />
            <input id="date" type="date" onChange={this.newDate} value={this.state.date} placeholder="Date" />
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
                    <td><button type="submit">Edit</button></td>
                    <td><button type="button" onClick={() => {this.deleteEntry(i)}}>Delete</button></td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div id="add-trip">
          <input type="text" onChange={this.newPlace} value={this.state.place} placeholder="Place name" />
          <input type="date" onChange={this.newDate} value={this.state.date} placeholder="Date" />
          <button type="submit" onClick={this.handleSubmit}>Add Trip</button>
        </div>
      )
    }
  }
}

export default TripList;
