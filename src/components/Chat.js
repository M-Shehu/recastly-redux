import React from 'react';

var Chat = ({messages, handleMessageFetch}) => {
    (
    <div>
        <form action="#" id="send" method="post">
            <input type="text" name="message" id="message"/>
            <input type="submit" onclick={handleMessageFetch} name="Retreive" class="submit"/>
        </form>
        <div id="chats">
        {
            messages.map(message => (
                <Messages message={message}/>
            ))
        }
        </div>
    </div>
    )
};

export default Chat;