// Component to render video_details
// make use of iframe to render youtude video on the screen
import React from "react";

const VideoDetail = ({ video }) => {
  // if video is null display error msg
  if (!video) {
    return <div> Loading... </div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
