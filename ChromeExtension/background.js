chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    code: 'window.open("https://www.google.com/?voice_search=true");'
  });
});
