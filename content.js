chrome.contextMenus.create({
    title: "Preview download link in new tab",
    contexts: ["link"],
    onclick: (info => {
        open(info.linkUrl.split("download").join("").split("preview").join(""))
    }),
    targetUrlPatterns: ["*://*/*download*", "*://*/*preview*"]
})