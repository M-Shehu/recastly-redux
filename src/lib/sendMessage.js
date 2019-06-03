

var handleMessageSend = (message, successCB, errorCB = null) => {
    
    $.ajaxPrefilter(function (settings, _, jqXHR) {
        jqXHR.setRequestHeader('X-Parse-Application-Id', '2745f6eedad1770c6ebaf03f8a97cf0cc2f66706');
        jqXHR.setRequestHeader('X-Parse-REST-API-Key', '4f44a6835e581124936858b658e8ea99e278d371');
    });
    
    $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: 'http://parse.sfe.hackreactor.com/chatterbox/classes/messages',
        type: 'POST',
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function (data) {
            successCB(data);
        },
        error: function (data) {
            // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
            console.error('chatterbox: Failed to send message', data);
        }
    });
    
}


