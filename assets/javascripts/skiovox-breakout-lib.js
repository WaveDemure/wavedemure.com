window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nLine Number: '+linenumber);
    return true;
}

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