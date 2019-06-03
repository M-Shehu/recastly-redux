import Redux from 'redux';

var sampleMessages = [];

var messagesListReducer = (state = sampleMessages, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch(action.type) {
    case "CHANGE_MESSAGES_LIST":
      return _.extend([], state, action.messages);

    default:
      return state;
  }
};

export default messagesListReducer;
