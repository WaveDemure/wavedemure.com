const Downloads = [
    {
        ver: "1.0.1",
        dir: "assets/skiomox/1.0.1-skiomox-extension.zip",
        type: "Beta"
    },
    {
        ver: "1.0.0",
        dir: "assets/skiomox/1.0.0-skiomox-extension.zip",
        type: "Beta"
    }
]

const DevDownloads = [
    {
        ver: "1.0.2",
        dir: "assets/skiomoxDevBuilds/1.0.2-dev1-skiomox-extension.zip",
        type: "near-stable"
    }
]

const th1Item = "Version"
const th2Item = "Stage"
const th3Item = "Download"

const th1ItemDev = "Version"
const th2ItemDev = "Stage"
const th3ItemDev = "Download"

const searchItems = ["All", "Stable", "Beta"]



















// dont edit below

window.onload = function () {
    document.title = "WaveDemure";

    var tempPara = document.createElement("h1");
    tempPara.innerHTML = "Skimox Downloads"
    tempPara.id = "title"
    document.body.appendChild(tempPara)

    var dropDown = document.createElement("select")
    dropDown.onchange = function () {
        updateSelect()
    }
    dropDown.id = "dropDown"
    document.body.appendChild(dropDown)

    searchItems.forEach(each => {
        var tempOption = document.createElement("option")
        tempOption.value = each
        tempOption.innerHTML = each
        dropDown.appendChild(tempOption)
    });

    var tableForDwlds = document.createElement("table")
    tableForDwlds.id = "table"
    document.body.appendChild(tableForDwlds)

    var topTr = document.createElement("tr")
    topTr.id = "Top"
    tableForDwlds.appendChild(topTr)

    var th1 = document.createElement("th")
    th1.innerHTML = th1Item
    topTr.appendChild(th1)
    var th2 = document.createElement("th")
    th2.innerHTML = th2Item
    topTr.appendChild(th2)
    var th3 = document.createElement("th")
    th3.innerHTML = th3Item
    topTr.appendChild(th3)

    Downloads.forEach(item => {
        var parentTr = document.createElement("tr");
        parentTr.id = item.type;
        tableForDwlds.appendChild(parentTr);
        
        var item1 = document.createElement("td")
        item1.innerHTML = item.ver
        
        var item2 = document.createElement("td")
        item2.innerHTML = item.type

        var item3 = document.createElement("td")
        var aItem = document.createElement("a")
        aItem.href = item.dir
        aItem.innerHTML = th3Item

        item3.appendChild(aItem)

        parentTr.appendChild(item1)
        parentTr.appendChild(item2)
        parentTr.appendChild(item3)
    });

    var tempParaDev = document.createElement("h2");
    tempParaDev.innerHTML = "Skimox Dev Builds"
    tempParaDev.id = "title"
    document.body.appendChild(tempParaDev)

    var tableForDwldsDev = document.createElement("table")
    tableForDwldsDev.id = "tableDev"
    document.body.appendChild(tableForDwldsDev)

    var topTrDev = document.createElement("tr")
    topTrDev.id = "Top"
    tableForDwldsDev.appendChild(topTrDev)

    var th1 = document.createElement("th")
    th1.innerHTML = th1ItemDev
    topTrDev.appendChild(th1)
    var th2 = document.createElement("th")
    th2.innerHTML = th2ItemDev
    topTrDev.appendChild(th2)
    var th3 = document.createElement("th")
    th3.innerHTML = th3ItemDev
    topTrDev.appendChild(th3)

    DevDownloads.forEach(item => {
        var parentTr = document.createElement("tr");
        parentTr.id = item.type;
        tableForDwldsDev.appendChild(parentTr);
        
        var item1 = document.createElement("td")
        item1.innerHTML = item.ver
        
        var item2 = document.createElement("td")
        item2.innerHTML = item.type

        var item3 = document.createElement("td")
        var aItem = document.createElement("a")
        aItem.href = item.dir
        aItem.innerHTML = th3ItemDev

        item3.appendChild(aItem)

        parentTr.appendChild(item1)
        parentTr.appendChild(item2)
        parentTr.appendChild(item3)
    });
}

function updateSelect() {
    var val = document.getElementById("dropDown").value
    console.log("changed dropDown to " + val)

    var childs = [].slice.call(document.getElementById("table").children)
    childs.forEach(element => {
        if (val == "All") {
            element.style.display = ""
        } else if (val == "Stable") {
            if (element.id != "Stable" && element.id != "Top") {
                element.style.display = "none"
            } else {
                element.style.display = ""
            }
        } else if (val == "Beta") {
            if (element.id != "Beta" && element.id != "Top") {
                element.style.display = "none"
            } else {
                element.style.display = ""
            }
        }
    });
}