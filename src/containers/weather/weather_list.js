// container to render the list of cities and weather
import React, { Component } from "react";
import { connect } from "react-redux";
import ChartSparklines from "../../components/weather/chart_sparklines";
import _ from "lodash";
import GoogleMap from "../../components/weather/google_maps";

class WeatherList extends Component {
  // helper function to render cities
  //  will render an single row-city
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    // conevrt K to F unit
    const temperatureList = _.map(
      cityData.list.map(weather => weather.main.temp),
      temp => (temp * 9) / 5 - 459.67
    );
    const pressureList = cityData.list.map(weather => weather.main.pressure);
    const humidityList = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    // Google Maps 3rd party add on
    return (
      <tr key={cityName}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <ChartSparklines data={temperatureList} color="orange" unit="F" />
        </td>
        <td>
          <ChartSparklines data={pressureList} color="green" unit="hPa" />
        </td>
        <td>
          <ChartSparklines data={humidityList} color="blue" unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    console.log("weatherlist", typeof this.props.weather);
    console.log("weatherlist", this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

// ES6 syntax
// mapStateToProps returns the props inside of WeatherList
// weather from state is mapped to props
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
