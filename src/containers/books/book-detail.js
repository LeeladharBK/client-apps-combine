// container to render BookDetail of an individual store
import React, { Component } from "react";
import { connect } from "react-redux";
// import activeBook from "../reducer_active_book";

class BookDetail extends Component {
  render() {
    // when props is null return error message on screen
    if (!this.props.book) {
      return <div> Select an Book to get started </div>;
    }
    return (
      <div>
        <h3> Details for: </h3>
        <div> {this.props.book.title} </div>
        <h3> Pages</h3>
        <div> {this.props.book.pages} </div>
      </div>
    );
  }
}

// wharever is returned will show up as props
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

// connecting BookDetail with the reducer reducer_active_store through mapStateToProps
export default connect(mapStateToProps)(BookDetail);
