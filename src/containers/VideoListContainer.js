import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapDispatchToProps = (dispatch) => {
    return {
        handleVideoListEntryTitleClick: (video) => {
            dispatch(changeVideo(video))
        }
    }
}

var mapStateToProps = (store) => (
    {videos: store.videoList}
)

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
