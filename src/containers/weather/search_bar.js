// container to input city name from the user and the city name is used to
// fetch the weather data through the fetchWeather action creator in actions/index
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../../actions/weather_fetch";

class SearchBar extends Component {
  // constructor to initialize the state to ""
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // change state on change in event
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  // preventDefault is to prevent uneccessary form submission
  onFormSubmit(event) {
    event.preventDefault();

    //  we need to fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Get 5day forecast in 5 cities"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

// mapDispatchToProps returns to props in the SearchBar container, fetchWeather
function mapDispatchToProps(dispatch) {
  // Whenever fetchWeather is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Promote SearchBar from a component to a container - it needs to know
// about this new dispatch method, fetchWeather. Make it available
// as a prop.
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
