import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";

import Weather from "./components/weather/app";
import Youtube from "./components/youtube/app";
import Books from "./components/books/app";
import Home from "./components/home";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Under Switch: put most specific route on top
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/youtube" component={Youtube} />
          <Route path="/books" component={Books} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
