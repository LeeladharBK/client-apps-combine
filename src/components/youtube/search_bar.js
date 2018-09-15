// component to input video search from the user and the input is used to
// change the state fetch the videos 
import React, { Component } from "react";

class SearchBar extends Component {
  // constructor to initialize the state to ""
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  // change state on change in event
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
