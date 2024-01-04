chrome.runtime.onInstalled.addListener(function () {
  // Set user-defined default YouTube link on extension installation
  chrome.storage.sync.get(['youtubeLink'], function (result) {
    if (!result.youtubeLink) {
      // Set your default YouTube link here
      var userDefinedDefaultLink = 'https://youtube.com/shorts/8s6_rGMUhAc?feature=share';
      chrome.storage.sync.set({ 'youtubeLink': userDefinedDefaultLink });
    }
  });
});

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  chrome.storage.sync.get(['youtubeLink'], function (result) {
    var userYouTubeLink = result.youtubeLink;
    var socialMediaDomains = ['facebook.com', 'twitter.com', 'instagram.com'];

    if (socialMediaDomains.some(domain => details.url.includes(domain))) {
      chrome.tabs.update(details.tabId, { url: userYouTubeLink });
    }
  });
});
