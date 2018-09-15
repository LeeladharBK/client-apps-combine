// App component: used to render the containers on the screen
import React from "react";
import { Component } from "react";

// import different containers to be rendered on the screen
import SearchBar from "../../containers/weather/search_bar";
import WeatherList from "../../containers/weather/weather_list";
// Link is used to navigate similar  to an anchor tag
import { Link } from "react-router-dom";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
