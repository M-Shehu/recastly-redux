

var receiveAllMessages = (successCB, errorCB = null) => {
    
    $.ajaxPrefilter(function (settings, _, jqXHR) {
        jqXHR.setRequestHeader('X-Parse-Application-Id', '2745f6eedad1770c6ebaf03f8a97cf0cc2f66706');
        jqXHR.setRequestHeader('X-Parse-REST-API-Key', '4f44a6835e581124936858b658e8ea99e278d371');
    });

    $.ajax({
        url: 'http://parse.sfe.hackreactor.com/chatterbox/classes/messages',
        type: 'GET',
        data: { order: '-createdAt' },
        contentType: 'application/json',
        success: successCB,
        error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
        }
    });
    
}

export default receiveAllMessages;