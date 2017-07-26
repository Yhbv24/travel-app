import React, { Component } from 'react';

class AddTripForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-sm-12">
          <div id="add-trip" className="form-group">
            <label for="place">Trip Name:</label>
            <input id="place" name="place" type="text" onChange={this.props.changePlace} value={this.props.place} className="form-control" required />
            <label for="start-date">Start Date:</label>
            <input id="start-date" name="start-date" type="date" onChange={this.props.changeStartDate} value={this.props.startDate} className="form-control" required />
            <label for="end-date">End Date:</label>
            <input id="end-date" name="end-date" type="date" onChange={this.props.changeEndDate} value={this.props.endDate} className="form-control" required />
            <button type="submit" onClick={this.props.submit} id="submit-button" className="btn btn-sm">Add Trip</button>
          </div>
        </div>
      </div>
    );
  }
}

AddTripForm.propTypes = {
  place: React.PropTypes.string,
  startDate: React.PropTypes.instanceOf(Date),
  endDate: React.PropTypes.instanceOf(Date),
  changePlace: React.PropTypes.func,
  changePlace: React.PropTypes.func,
  changeStartDate: React.PropTypes.func,
  changeEndDate: React.PropTypes.func,
  submit: React.PropTypes.func
}

export default AddTripForm;
