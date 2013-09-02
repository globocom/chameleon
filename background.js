var requestFilter = {
    urls: [
        "<all_urls>"
    ]
};
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    var headers = details.requestHeaders;
    var group = localStorage['X-Mobile-Group'] || 'desktop';
    var header = {
        "name": "X-Mobile-Group",
        "value": group
    };
    headers.push(header);
    return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);
