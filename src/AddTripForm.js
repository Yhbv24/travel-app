import React, { Component } from 'react';
import styles from './css/add-trip-form-styles.min.css';

class AddTripForm extends Component {
  render() {
    return (
      <div id="add-trip-form">
        <div id="add-trip-form-title">
          <h1>Add a Trip</h1>
        </div>
        <div id="add-trip" className="form-group">
          <label for="place">Trip Name:</label>
          <input id="place" name="place" type="text" onChange={this.props.changePlace} value={this.props.place} className="form-control" required />
          <label for="start-date">Start Date:</label>
          <input id="start-date" name="start-date" type="date" onChange={this.props.changeStartDate} value={this.props.startDate} className="form-control" required />
          <label for="end-date">End Date:</label>
          <input id="end-date" name="end-date" type="date" onChange={this.props.changeEndDate} value={this.props.endDate} className="form-control" required />
          <button type="submit" onClick={this.props.submit} id="submit-button" className="btn btn-sm btn-success">Add Trip</button>
        </div>
      </div>
    );
  }
}

export default AddTripForm;
