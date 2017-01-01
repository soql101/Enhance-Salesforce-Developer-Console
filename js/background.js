chrome.runtime.onInstalled.addListener(function(object) {
    chrome.storage.sync.get(["sfThemeLaunch"], function(data) {
        try {
            if (data.sfThemeLaunch != "yes") {
                chrome.tabs.create({
                    url: "welcome/index.html"
                }, function(tab) {
                    chrome.storage.sync.set({
                        "sfThemeLaunch": "yes"
                    }, function() {});
                });
            }
        } catch (e) {}
    });
});