function processRequest(details) {
  console.log("Blocked website");
  return {cancel: true};
}

function initialize() {
  var urls = ["*://*.facebook.com/*", "*://*.facebook.net/*", "*://news.google.com/*"];

  if(chrome.webRequest.onBeforeRequest.hasListener(processRequest))
    chrome.webRequest.onBeforeRequest.removeListener(processRequest);
  chrome.webRequest.onBeforeRequest.addListener(processRequest, {urls: urls}, ['blocking']);
}

initialize();