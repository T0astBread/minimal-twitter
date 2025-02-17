// Saves options to chrome.storage
function save_options() {
  var feedWidth = document.getElementById("feed-width").value;
  var noTweetButton = document.getElementById("tweet").checked;
  var noBorders = document.getElementById("borders").checked;
  var noLikes = document.getElementById("like").checked;
  var noRetweets = document.getElementById("retweet").checked;
  chrome.storage.sync.set(
    {
      feedWidth: feedWidth,
      noTweetButton: noTweetButton,
      noBorders: noBorders,
      noLikes: noLikes,
      noRetweets: noRetweets
    },
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function() {
        status.textContent = "";
      }, 750);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(
    {
      feedWidth: "600",
      noTweetButton: false,
      noBorders: false,
      noLikes: false,
      noRetweets: false
    },
    function(items) {
      document.getElementById("feed-width").value = items.feedWidth;
      document.getElementById("tweet").checked = items.noTweetButton;
      document.getElementById("borders").checked = items.noBorders;
      document.getElementById("like").checked = items.noLikes;
      document.getElementById("retweet").checked = items.noRetweets;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
