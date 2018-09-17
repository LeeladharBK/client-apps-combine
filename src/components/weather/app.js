// App component: used to render the containers on the screen
import React from "react";
import { Component } from "react";

// import different containers to be rendered on the screen
import SearchBar from "../../containers/weather/search_bar";
import WeatherList from "../../containers/weather/weather_list";
import HeaderNavigation from "../header_navigation";
import Footer from "../footer";

export default class Weather extends Component {
  render() {
    return (
      <div className="main-container">
        <HeaderNavigation />
        <SearchBar />
        <WeatherList />
        <Footer />
      </div>
    );
  }
}
