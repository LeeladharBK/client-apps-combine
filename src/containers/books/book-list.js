// container to render the list of books
// and calls action creator selectBook when any store is selected
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../../actions/books_select";
import { bindActionCreators } from "redux";

class BookList extends Component {
    // helper function to render list of books
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// wharever is returned will show up as props
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// wharever is returned will show up as props
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
