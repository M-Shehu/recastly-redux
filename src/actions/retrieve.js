import receiveAllMessages from '../lib/receiveMessages.js';


var handleMessageRetrieve = function () {
  return (dispatch) => {
  receiveAllMessages(function(data) {
       dispatch(messagesList(data));
     })
  }
}

export default handleMessageRetrieve;


