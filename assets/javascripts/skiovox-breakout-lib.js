window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nLine Number: '+linenumber);
    return true;
}

export function getAllExtensionNames(callback) {
    var exts = [];
    chrome.management.getAll(function(extInfos) {
        extInfos.forEach(function(ext) {
            exts.push(ext.name + " " + ext.id);
        });
        callback(exts);
    });
}

export function detectBlockerExts() {
    console.log("yo this one is not done \n if its not done in the next update ping wave")
}

export function disableExt(id) {
    chrome.runtime.getBackgroundPage(function (p) {
        p.chrome.management.setEnabled(id, false);
    });
}

export function enableExt(id) {
    chrome.runtime.getBackgroundPage(function (p) {
        p.chrome.management.setEnabled(id, true);
    });
}