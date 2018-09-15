// App component: used to render the containers on the screen
import React, { Component } from "react";
// import different containers to be rendered on the screen
import BookList from "../../containers/books/book-list";
import BookDetail from "../../containers/books/book-detail";
// Link is used to navigate similar  to an anchor tag
import { Link } from "react-router-dom";

export default class Books extends Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
