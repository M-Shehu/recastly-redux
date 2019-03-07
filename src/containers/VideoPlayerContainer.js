import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


var stateToVideoPlayer=(store) => (
    {video: store.currentVideo}
)

var VideoPlayerContainer = connect(stateToVideoPlayer)(VideoPlayer);
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
