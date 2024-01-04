document.addEventListener('DOMContentLoaded', function () {
  var youtubeLinkInput = document.getElementById('youtubeLink');
  var saveButton = document.getElementById('saveButton');

  chrome.storage.sync.get(['youtubeLink'], function (result) {
    youtubeLinkInput.value = result.youtubeLink || '';
  });

  saveButton.addEventListener('click', function () {
    var youtubeLink = youtubeLinkInput.value.trim();

    if (youtubeLink !== '') {
      chrome.storage.sync.set({ 'youtubeLink': youtubeLink }, function () {
        alert('YouTube link saved successfully!');
      });
    } else {
      alert('Please enter a valid YouTube link.');
    }
  });
});
