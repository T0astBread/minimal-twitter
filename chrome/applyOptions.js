function addStyles(css) {
  var head = document.querySelector("head");
  var style = document.createElement("style");
  style.textContent = `${css}`;
  head.appendChild(style);
}

chrome.storage.sync.get(
  {
    feedWidth: "600",
    noTweetButton: false,
    noBorders: false,
    noLikes: false,
    noRetweets: false
  },
  function(items) {
    if (items.feedWidth === "700") {
      addStyles(`
      div[data-testid="primaryColumn"],
      div[data-testid="primaryColumn"] > div > div > div:nth-child(2),
      div[data-testid="primaryColumn"] > div > div > div:nth-child(3),
      div[data-testid="primaryColumn"] > div > div > div:nth-child(4),
      div[data-testid="primaryColumn"] > div > div > div:nth-child(2) > div > div {
        max-width: 700px !important;
      }

      @media all and (max-width: 1400px) {
        form[aria-label="Search Twitter"][role="search"] {
          display: none !important;
        }
      }
      `);
    } else if (items.feedWidth === "800") {
      addStyles(`
      div[data-testid="primaryColumn"],
      div[data-testid="primaryColumn"] > div > div > div:nth-child(2),
      div[data-testid="primaryColumn"] > div > div > div:nth-child(3),
      div[data-testid="primaryColumn"] > div > div > div:nth-child(4),
      div[data-testid="primaryColumn"] > div > div > div:nth-child(2) > div > div {
        max-width: 800px !important;
      }

      @media all and (max-width: 1500px) {
        form[aria-label="Search Twitter"][role="search"] {
          display: none !important;
        }
      }
      `);
    }

    if (items.noTweetButton === true) {
      addStyles(`
      a[aria-label="Tweet"][role="button"] {
        display: none !important;
      }
      `);
    }

    if (items.noBorders === true) {
      addStyles(`
      div[aria-label="Timeline: Your Home Timeline"] > div > div > div > div {
        border-bottom-color: transparent;
      }

      div[aria-label="Timeline: Explore"] > div > div > div > div {
        border-bottom-color: transparent;
      }
      `);
    }

    if (items.noLikes === true) {
      addStyles(`div[data-testid="like"] > div > div:nth-child(2) {
        visibility: hidden !important;
      }`);
    }

    if (items.noRetweets === true) {
      addStyles(`div[data-testid="retweet"] > div > div:nth-child(2) {
        visibility: hidden !important;
      }`);
    }
  }
);
