document.addEventListener("DOMContentLoaded", function () {
    addSlideUpAnimation("body");
    addSlideUpAnimation("h1, h2, textarea, input, button, .payloads");

    function addSlideUpAnimation(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.style.opacity = "0";
            element.style.transition = "transform 1s, opacity 1s";
            element.style.transform = "translateY(20px)";
            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, 100);
        });
    }

    window.onerror = function (msg, url, linenumber) {
        const errorElement = document.getElementById("code_error");
        if (errorElement) {
            errorElement.value += `\nError message: ${msg}\nLine Number: ${linenumber}`;
        } else {
            alert(`Error message: ${msg}\nLine Number: ${linenumber}`);
        }
        return true;
    };

    function getAllExtensionNames(callback) {
        chrome.management.getAll(function (extInfos) {
            const exts = extInfos.map(ext => ({ name: ext.name, id: ext.id }));
            callback(exts);
        });
    }
    
    function enableExt(id, button) {
        chrome.management.setEnabled(id, true, function () {
            button.style.backgroundColor = "#00821e"; // Green
        });
    }
    
    function disableExt(id, button) {
        if (id !== chrome.runtime.id) {
            chrome.management.setEnabled(id, false, function () {
                button.style.backgroundColor = "#ff0000"; // Red
            });
        } else {
            const errorMsg = `Error: Can't Disable extension that is being used for this page\nExt Id = ${id}`;
            alert(errorMsg);
        }
    }

    function createTitle(text, fontSize, marginTop) {
        const title = document.createElement("h1");
        title.innerHTML = text;
        title.style.fontSize = fontSize;
        title.style.color = "white";
        title.style.textAlign = "center";
        title.style.marginTop = marginTop;
        return title;
    }

    function createTextArea(id, placeholder, backgroundColor) {
        const textarea = document.createElement("textarea");
        textarea.id = id;
        textarea.placeholder = placeholder;
        textarea.style.color = "white";
        textarea.style.resize = "none";
        textarea.style.backgroundColor = backgroundColor;
        textarea.style.border = "2px solid #00631a";
        textarea.style.padding = "10px";
        return textarea;
    }

    function createInput(placeholder, id, backgroundColor, width, height) {
        const input = document.createElement("input");
        input.placeholder = placeholder;
        input.id = id;
        input.style.color = "white";
        input.style.display = "flex";
        input.style.resize = "none";
        input.style.backgroundColor = backgroundColor;
        input.style.border = "2px solid #00631a";
        input.style.width = width;
        input.style.height = height;
        input.style.padding = "10px";
        return input;
    }

    function createButton(text, onclick) {
        const button = document.createElement("button");
        button.style.backgroundColor = "#00821e";
        button.style.border = "2px solid #00631a";
        button.innerHTML = text;
        button.style.color = "white";
        button.style.margin = "5px";
        button.style.padding = "10px";
        button.onclick = onclick;
        return button;
    }

    function runCode() {
        eval(document.getElementById("codeExec").value);
    }

    document.body.style.backgroundColor = "#2e2e2e";

    const title = createTitle("Skiovox Breakout GUI", "3em", "20px");
    document.body.appendChild(title);

    const extLoaded = createTitle(`Loaded on ${chrome.runtime.id}`, "2em", "10px");
    document.body.appendChild(extLoaded);

    const subTitle = createTitle("Javascript Executor", "2em", "20px");
    document.body.appendChild(subTitle);

    const codeExecDiv = document.createElement("div");
    codeExecDiv.style.display = "flex";
    codeExecDiv.style.marginTop = "10px";
    document.body.appendChild(codeExecDiv);

    const codeExec = createTextArea("codeExec", "", "#00821e");
    codeExec.innerHTML = "alert(1);";
    codeExec.style.width = "50vw";
    codeExec.style.height = "30vh";
    codeExecDiv.appendChild(codeExec);

    const errorOut = createTextArea("code_error", "Error log and debug log", "#025415");
    errorOut.style.width = "50vw";
    errorOut.style.resize = "none";
    errorOut.disabled = true;
    codeExecDiv.appendChild(errorOut);

    const runCodeButton = createButton("Run!", runCode);
    runCodeButton.style.marginLeft = "auto";
    runCodeButton.style.marginRight = "auto";
    codeExecDiv.appendChild(runCodeButton);

    const subTitle2 = createTitle("Bookmarklet Emulator", "2em", "20px");
    document.body.appendChild(subTitle2);

    const pageExecWrapper = document.createElement("div");
    pageExecWrapper.style.display = "flex";
    pageExecWrapper.style.alignItems = "center";
    pageExecWrapper.style.justifyItems = "center";
    pageExecWrapper.style.marginTop = "10px";
    document.body.appendChild(pageExecWrapper);

    const inputBox = createInput("Enter code", "input_box", "#00821e", "50vw", "10vh");
    pageExecWrapper.appendChild(inputBox);

    const codeBoxBook = createTextArea("code_box_book", "Code", "#00821e");
    codeBoxBook.value = "alert(1);";
    codeBoxBook.style.width = "50vw";
    codeBoxBook.style.height = "10vh";
    pageExecWrapper.appendChild(codeBoxBook);

    const runBookmarkletButton = createButton("Run Bookmarklet", function () {
        const url = document.getElementById("input_box").value;
        const script = document.getElementById("code_box_book").value;

        chrome.tabs.create({ url: url }, (tab) => {
            chrome.tabs.executeScript(tab.id, { code: script });
        });
    });
    runBookmarkletButton.style.marginLeft = "auto";
    runBookmarkletButton.style.marginRight = "auto";
    pageExecWrapper.appendChild(runBookmarkletButton);

    const subTitle3 = createTitle("Payloads", "2em", "20px");
    document.body.appendChild(subTitle3);

    const payloadDiv = document.createElement("div");
    payloadDiv.className = "payloads";
    payloadDiv.style.margin = "30px";
    document.body.appendChild(payloadDiv);

    function createPayloadButtons(exts) {
        const payloadsPerRow = 1;
    
        exts.forEach(function (ext, index) {
            const payloadSection = document.createElement("div");
            payloadSection.style.margin = "0 10px 20px 10px"; // Adjust the margin as needed
            payloadSection.style.textAlign = "center";
            payloadDiv.appendChild(payloadSection);
    
            const subtitle = createTitle(`${ext.name} - Payloads`, "1.5em", "10px");
            subtitle.style.textAlign = "center";
            payloadSection.appendChild(subtitle);
    
            const buttonContainer = document.createElement("div");
            buttonContainer.style.textAlign = "center";
            buttonContainer.style.display = "flex"; // Set display to "flex"
            buttonContainer.style.flexDirection = "column"; // Align buttons vertically
            buttonContainer.style.gap = "10px"; // Add some spacing between buttons
            buttonContainer.style.justifyContent = "center"; // Center the buttons horizontally
            buttonContainer.style.alignItems = "center"; // Center the buttons vertically
            payloadSection.appendChild(buttonContainer);
    
            const buttonWidth = "120px"; // Set the width as needed
            const buttonHeight = "40px"; // Set the height as needed
    
            const buttonStyle = `
                width: ${buttonWidth};
                height: ${buttonHeight};
                background-color: #00821e;
                border: 2px solid #00631a;
                color: white;
                margin: 5px;
                padding: 10px;
                cursor: pointer;
                transition: background-color 0.3s;
            `;
    
            const enableButton = createButton(`Enable`, function () {
                enableExt(ext.id, enableButton);
            });
            enableButton.style.cssText = buttonStyle;
            buttonContainer.appendChild(enableButton);
    
            const disableButton = createButton(`Disable`, function () {
                disableExt(ext.id, disableButton);
            });
            disableButton.style.cssText = buttonStyle + "background-color: #ff0000;"; // Red background for disable button
            buttonContainer.appendChild(disableButton);
        });
    }    
    
    getAllExtensionNames(function (exts) {
        createPayloadButtons(exts);
    });   
    
});
