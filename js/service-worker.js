function updatePopup(url) {
    if (url.includes("photon-sol.tinyastro.io")) {
        chrome.action.setPopup({ popup: "popup.html" });
    } else {
        chrome.action.setPopup({ popup: "default.html" });
    }
}

const Options = {
  DevMode: false,
  ExtensionVersion: 1.2,
  lastRequest: 0
};

const SOL = {
  price: null,
  lastCheck: 0
}

async function setLocalData() {
  await chrome.storage.local.set({ Options });
  await chrome.storage.local.set({ SOL });
}

chrome.runtime.onInstalled.addListener(() => {
  setLocalData();

  chrome.storage.local.set({
    ExtensionEnabled: true,
    theme: "default"
  });
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    updatePopup(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        updatePopup(tab.url);
    }
});