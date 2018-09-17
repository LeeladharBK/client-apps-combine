// App component: used to render the containers on the screen
import React, { Component } from "react";
// import different containers to be rendered on the screen
import BookList from "../../containers/books/book-list";
import BookDetail from "../../containers/books/book-detail";
import HeaderNavigation from "../header_navigation";
import Footer from "../footer";

export default class Books extends Component {
  render() {
    return (
      <div>
        <HeaderNavigation />
        <BookList />
        <BookDetail />
        <Footer />
      </div>
    );
  }
}
