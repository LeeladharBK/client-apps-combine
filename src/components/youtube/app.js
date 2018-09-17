// App component: used to render the containers on the screen
// import different containers to be rendered on the screen
import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
const API_KEY = "AIzaSyAg9oT9ZnHUbVHJjYBjJN5Ikuy5nKdWS_Y";
import HeaderNavigation from "../header_navigation";
import Footer from "../footer";

// JSX componenet should produce html
export default class Youtube extends Component {
  // constructor to initialize the state to ""
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("Surfboards");
  }

  //  function called when change in input
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      // console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    //  delay submission by 500 ms
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);
    return (
      <div className="main-container">
        <HeaderNavigation />
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
        <Footer />
      </div>
    );
  }
}

// insert to DOM
// take this component generarted HTML and put it on the page (DOM)
// ReactDOM.render(<Youtube />, document.querySelector(".container"));
