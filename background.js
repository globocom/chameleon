var requestFilter = {
    urls: [
        "<all_urls>"
    ]
};


var listenerSendHeader = function(details) {
    var headers = details.requestHeaders;
    var group = localStorage['X-Mobile-Group'] || 'desktop';
    var header = {
        "name": "X-Mobile-Group",
        "value": group
    };
    headers.push(header);
    return {requestHeaders: headers};
};


var listenerSendMenssage = function(message, sender, sendResponse){
    var group = localStorage['X-Mobile-Group'] || 'desktop';
    if (message.storage == "group"){
        sendResponse({group: group});
    }
}

chrome.webRequest.onBeforeSendHeaders.addListener(listenerSendHeader, requestFilter, ['requestHeaders','blocking']);
chrome.runtime.onMessage.addListener(listenerSendMenssage);
