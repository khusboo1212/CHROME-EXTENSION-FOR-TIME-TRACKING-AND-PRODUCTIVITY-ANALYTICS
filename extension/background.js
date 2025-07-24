let activeTabId = null;
let activeURL = null;
let startTime = null;

// Load siteData from storage
let siteData = {};
chrome.storage.local.get("siteData", (data) => {
  if (data.siteData) {
    siteData = data.siteData;
  }
});

function updateTimeData() {
  if (startTime && activeURL) {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000); // seconds
    const hostname = new URL(activeURL).hostname;
    siteData[hostname] = (siteData[hostname] || 0) + timeSpent;

    // Save to local storage
    chrome.storage.local.set({ siteData });
    console.log(`Updated time for ${hostname}: ${siteData[hostname]}s`);
  }
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  updateTimeData();

  const tab = await chrome.tabs.get(activeInfo.tabId);
  activeTabId = activeInfo.tabId;
  activeURL = tab.url;
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    updateTimeData();

    activeTabId = tabId;
    activeURL = tab.url;
    startTime = Date.now();
  }
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  updateTimeData();

  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    activeTabId = null;
    activeURL = null;
    startTime = null;
  } else {
    chrome.tabs.query({ active: true, windowId: windowId }, (tabs) => {
      if (tabs.length > 0) {
        activeTabId = tabs[0].id;
        activeURL = tabs[0].url;
        startTime = Date.now();
      }
    });
  }
});

