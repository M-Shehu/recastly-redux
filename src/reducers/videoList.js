import Redux from 'redux';

var sampleData = [];

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch(action.type) {
    case "CHANGE_VIDEO_LIST":
      return _.extend([], state, action.videos);

    default:
      return state;
  }
};

export default videoListReducer;
