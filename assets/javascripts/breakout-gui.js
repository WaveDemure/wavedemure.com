window.onerror = function(msg, url, linenumber) {
    if (document.getElementById("code_error")) {
        document.getElementById("code_error").value = document.getElementById("code_error").value + '\nError message: '+msg+'\nLine Number: '+linenumber
    } else {
        alert('Error message: '+msg+'\nLine Number: '+linenumber);
    }
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

window.onload = function () {
    document.body.style.backgroundColor = "#2e2e2e";

    var title = document.createElement("h1");
    title.innerHTML = "Skiovox breakout gui";
    title.style.fontSize = "400%"
    title.style.color = "white";
    title.style.textAlign = "center";
    document.body.appendChild(title);

    var extLoaded = document.createElement("h2");
    extLoaded.innerHTML = "loaded on "+chrome.runtime.id;
    extLoaded.style.color = "white";
    extLoaded.style.textAlign = "center";
    document.body.appendChild(extLoaded)
    // here we go

    var subTitle = document.createElement("h2");
    subTitle.style.color = "white";
    subTitle.style.textAlign = "center";
    subTitle.innerHTML = "Javascript executor";
    document.body.appendChild(subTitle);

    var code_exec_div = document.createElement("div");
    code_exec_div.style.display = "flex";
    document.body.appendChild(code_exec_div);

    var codeExec = document.createElement("textarea");
    codeExec.id = "codeExec";
    codeExec.style.color = "white";
    codeExec.style.resize = "none";
    codeExec.innerHTML = "alert(1);";
    codeExec.style.display = "codeExec";
    codeExec.style.backgroundColor = "#00821e";
    codeExec.style.border = "2px solid #00631a";
    codeExec.style.width = "50vw";
    codeExec.style.height = "30vh";
    code_exec_div.appendChild(codeExec);

    var error_out = document.createElement("textarea");
    error_out.id = "code_error";
    error_out.placeholder = "error log and debug log"
    error_out.style.color = "white";
    error_out.style.backgroundColor = "#025415";
    error_out.style.width = "50vw";
    error_out.style.resize = "none"
    error_out.disabled = true;
    code_exec_div.appendChild(error_out);

    var run_code = document.createElement("button");
    run_code.style.display = "absolute";
    run_code.style.backgroundColor = "#00821e"
    run_code.style.border = "2px solid #00631a"
    run_code.innerHTML = "Run!";
    run_code.style.left = "50vw";
    run_code.style.color = "white";
    run_code.onclick = function () {
        eval(document.getElementById("codeExec").value);
    }
    code_exec_div.appendChild(run_code);

    // payloads

    var payload_div = document.createElement("div");
    payload_div.className = "payloads";
    payload_div.style.margin = "30px"
    document.body.appendChild(payload_div);

    // NEW AUTO DETECT PAYLOAD

    // var auto_detect_payload = document.createElement("a")


    // gogaurdian payloads
    
    var GG_payload_disable = document.createElement("a");
    GG_payload_disable.innerHTML = "Disable Goguardian";
    GG_payload_disable.style.color = "white";
    GG_payload_disable.style.margin = "5px"
    GG_payload_disable.style.textAlign = "center";
    GG_payload_disable.style.padding = "2vh 2vw";
    GG_payload_disable.style.backgroundColor = "#00631a";
    GG_payload_disable.onclick = function () {
        if (!location.href.includes(chrome.runtime.id)) {
            disableExt("haldlgldplgnggkjaafhelgiaglafanh");
        } else {
            alert("Error: Cant disable extension that is being used for this page\nExt Id = " + chrome.runtime.id);
        }
    }
    payload_div.appendChild(GG_payload_disable);

    var GG_payload_enable = document.createElement("a");
    GG_payload_enable.innerHTML = "Enable Goguardian";
    GG_payload_enable.style.margin = "5px"
    GG_payload_enable.style.color = "white";
    GG_payload_enable.style.textAlign = "center";
    GG_payload_enable.style.padding = "2vh 2vw"
    GG_payload_enable.style.backgroundColor = "#00631a"
    GG_payload_enable.onclick = function() {
        enableExt("haldlgldplgnggkjaafhelgiaglafanh")
    }
    payload_div.appendChild(GG_payload_enable);

    var debug_items = document.createElement("a");
    debug_items.innerHTML = "Debugging";
    debug_items.style.margin = "5px"
    debug_items.style.color = "white";
    debug_items.style.textAlign = "center";
    debug_items.style.padding = "2vh 2vw"
    debug_items.style.backgroundColor = "#00631a"
    debug_items.onclick = function () {
        getAllExtensionNames(function(names) {
            alert(names);
        });
    }
    payload_div.appendChild(debug_items);
}