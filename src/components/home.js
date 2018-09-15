// App component: used to render the containers on the screen
import React, { Component } from "react";
// Link is used to navigate similar  to an anchor tag
import { Link } from "react-router-dom";
import { PageHeader, Jumbotron, Button, ButtonToolbar } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <PageHeader>React Training Projects</PageHeader>
          <p>
            Welcome to the React Training Sections, please find below the
            implementations making use of React and Redux for client app.
          </p>

          <p>Please click below for the React & Redux Documentation</p>
          <p>
            <ButtonToolbar>
              <Button bsStyle="primary" href="https://reactjs.org/">
                React
              </Button>
              <Button bsStyle="primary" href="https://redux.js.org/">
                Redux
              </Button>
            </ButtonToolbar>
          </p>
        </Jumbotron>
        <PageHeader>Projects Links</PageHeader>
        <div>
          <ButtonToolbar>
            <div>
              <p>
                A weather app which makes use of openweathermap API to fetch
                weather data of the input city and stores the data in the
                application state.
              </p>
              <Link className="btn btn-primary" to="/weather">
                Weather App
              </Link>
            </div>
            <div>
              <p>
                A weather app which makes use of openweathermap API to fetch
                weather data of the input city and stores the data in the
                application state.
              </p>
              <Link className="btn btn-primary" to="/youtube">
                Youtube Player App
              </Link>
            </div>
            <div>
              <p>
                A weather app which makes use of openweathermap API to fetch
                weather data of the input city and stores the data in the
                application state.
              </p>
              <Link className="btn btn-primary" to="/books">
                Book List App
              </Link>
            </div>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
