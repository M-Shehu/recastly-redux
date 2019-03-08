import React from 'react';
import Chat from './../components/Chat.js';
import { connect } from 'react-redux';
import handleMessageSend from '../lib/sendMessage.js/index.js';
import receiveAllMessages from '../lib/receiveMessages.js/index.js';
import handleMessageRetrieve from '../actions/retrieve.js';

var mapDispatchToProps = (dispatch) => {
    return {
        handleMessageSubmit: (message) => {
            dispatch(handleMessageSend(message));
        },
        handleMessageFetch: () => {
            dispatch(handleMessageRetrieve());
        }
    }
}

var mapStateToProps = (store) => (
    { messages: store.messageList }
)

var ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
