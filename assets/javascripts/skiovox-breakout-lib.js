function getAllExtensionNames(callback) {
    var exts = [];
    chrome.management.getAll(function(extInfos) {
        extInfos.forEach(function(ext) {
            exts.push(ext.name + " " + ext.id);
        });
        callback(exts);
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