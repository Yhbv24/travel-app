import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiKey from './fbapi';
import AddTripForm from './AddTripForm';
import styles from './css/trip-list.min.css';

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
    this.newStartDate = this.newStartDate.bind(this);
    this.newEndDate = this.newEndDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.populateData = this.populateData.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }
  firebaseRef = firebase.database().ref("trips");
  componentWillMount() {
    this.populateData();
  }
  newPlace(e) {
    this.setState({
      place: e.target.value
    });
  }
  newStartDate(e) {
    this.setState({
      startDate: e.target.value
    });
  }
  newEndDate(e) {
    this.setState({
      endDate: e.target.value
    });
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
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.place && !this.state.startDate && !this.state.endDate) {
      alert("Please make sure to fill out all fields.");
    } else {
      this.firebaseRef.push({
        place: this.state.place,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      });
    }
    this.populateData();
    this.setState({
      place: '',
      startDate: '',
      endDate: ''
    });
  }
  deleteEntry(key) {
    var confirm = window.confirm("Are you sure you want to delete this entry?");
    if (confirm) {
      this.firebaseRef.child(key).remove();
    }
    this.populateData();
  }
  render() {
    if (this.state.trips) {
      return (
        <div className="trip-list container">
          <div className="row">
            <div className="col-sm-3">
              <AddTripForm
                  place={this.state.place}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  changePlace={this.newPlace}
                  changeStartDate={this.newStartDate}
                  changeEndDate={this.newEndDate}
                  submit={this.handleSubmit}
                />
              </div>
            <div className="col-sm-9">
              <div id="trip-list-title">
                <h1>Your Trips</h1>
              </div>
              <table id="trip-list-table" className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Trip</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="trip-list-row">
                  {Object.keys(this.state.trips).map((i) =>
                    <tr key={i}>
                      <td><Link to={{pathname: '/trip/' + i, state: {place: this.state.trips[i].place, startDate: this.state.trips[i].startDate, endDate: this.state.trips[i].endDate}}}>{this.state.trips[i].place}</Link></td>
                      <td>{this.state.trips[i].startDate}</td>
                      <td>{this.state.trips[i].endDate}</td>
                      <td><button type="button" className="btn btn-xs btn-danger" onClick={() => {this.deleteEntry(i)}}>Delete</button></td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <AddTripForm
                place={this.state.place}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                changePlace={this.newPlace}
                changeStartDate={this.newStartDate}
                changeEndDate={this.newEndDate}
                submit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TripList;
