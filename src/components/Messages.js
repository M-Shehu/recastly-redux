import React from 'react';

var Messages = ({message}) => {
    (
    <div class="chat">
        <button onclick="">{message.username}</button>
        <div>{message.text}</div>
    </div>
    )
};

export default Messages;