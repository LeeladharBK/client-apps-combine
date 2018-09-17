// App component: used to render the containers on the screen
import React, { Component } from "react";
// Link is used to navigate similar  to an anchor tag
import { Link } from "react-router-dom";
import { PageHeader, Jumbotron, Button, ButtonToolbar } from "react-bootstrap";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import HeaderNavigation from "./header_navigation";
import Footer from "./footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <HeaderNavigation />

          <Jumbotron>
            <Grid>
              <PageHeader>React Training Projects</PageHeader>
              <p>
                Welcome to the React Training Sections, please find below the
                implementations making use of React and Redux for client app.
              </p>

              <p>Please click below for the React & Redux Documentation</p>
              <ButtonToolbar>
                <Button bsStyle="primary" href="https://reactjs.org/">
                  React
                </Button>
                <Button bsStyle="primary" href="https://redux.js.org/">
                  Redux
                </Button>
              </ButtonToolbar>
            </Grid>
          </Jumbotron>

          <Grid>
            <Row>
              <Col md={4}>
                <h2>Weather App</h2>
                <p>
                  A weather app which makes use of openweathermap API to fetch
                  weather data of the input city and stores the data in the
                  application state.
                </p>
                <p>
                  <Link className="btn btn-primary" to="/weather">
                    Weather App
                  </Link>
                </p>
              </Col>
              <Col md={4}>
                <h2>Youtube Player App</h2>
                <p>
                  A weather app which makes use of openweathermap API to fetch
                  weather data of the input city and stores the data in the
                  application state.
                </p>
                <p>
                  <Link className="btn btn-primary" to="/youtube">
                    Youtube Player App
                  </Link>
                </p>
              </Col>
              <Col md={4}>
                <h2>Book List App</h2>
                <p>
                  A weather app which makes use of openweathermap API to fetch
                  weather data of the input city and stores the data in the
                  application state.
                </p>
                <p>
                  <Link className="btn btn-primary" to="/books">
                    Book List App
                  </Link>
                </p>
              </Col>
            </Row>
          </Grid>
          <Footer />
        </div>
      </div>
    );
  }
}
