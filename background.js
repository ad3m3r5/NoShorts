//// background.js

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: 'https://github.com/ad3m3r5/NoShorts'
    });
  }
});

// extension icon is clicked
chrome.action.onClicked.addListener(() => {
  replaceShortsUrl();
});

// tab is updated
chrome.tabs.onUpdated.addListener(() => {
  replaceShortsUrl();
});


function replaceShortsUrl() {
  chrome.tabs.query({url: "*://*.youtube.com/shorts/*"}, (tabs) => {
    console.log(tabs.length)
    tabs.forEach(tab => {
      chrome.tabs.update(
        tab.id,
        { url: tab.url.replace('shorts/', 'watch?v=') }
      );
    });
  });
};