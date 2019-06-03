import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import ChatContainer from '../containers/SearchContainer.js'

var App = () => {

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <SearchContainer />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayerContainer />
          <ChatContainer />
        </div>
        <div className="col-md-5">
          <VideoListContainer />
        </div>
      </div>
    </div>
  );
  
}

export default App