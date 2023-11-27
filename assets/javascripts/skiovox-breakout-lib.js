function getAllExtensionNames(callback) {
    var exts = [];
    chrome.management.getAll(function(extInfos) {
        extInfos.forEach(function(ext) {
            exts.push(ext.name);
        });
        callback(exts);
    });
}

function getAllExtensionIds(callback) {
    var extsI = [];
    chrome.management.getAll(function(extInfos) {
        extInfos.forEach(function(ext) {
            extsI.push(ext.name);
        });
        callback(extsI);
    });
}

function detectBlockerExts() {
    alert("Error : detectBlockerExts \n yo this one is not done \n if its not done in the next update ping wave")
}

function disableExt(id) {
    chrome.runtime.getBackgroundPage(function (p) {
        p.chrome.management.setEnabled(id, false);
    });
}

function enableExt(id) {
    chrome.runtime.getBackgroundPage(function (p) {
        p.chrome.management.setEnabled(id, true);
    });
}