console.log('background running');

let is = true;
let lastTab;
chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.tabs.onUpdated.addListener(onLoad);
chrome.tabs.onCreated.addListener(onLoad);
chrome.tabs.onActivated.addListener(active);    //active는 하나밖에 없음

function buttonClicked(tab) {
    console.log("button clicked!");
    // console.log(tab);
    let msg = {
        data: "ON"
    };
    if(is===true){
        msg.data = "OFF";
        is = false;
        chrome.browserAction.setIcon({path: "likeR.png"});
    }
    else {
        is = true;
        chrome.browserAction.setIcon({path: "likeG.png"});
    }
    chrome.tabs.sendMessage(tab.id, msg);
}

function onLoad(id){
    console.log("onLoad!");
    // console.log(id);
    let msg 
    if (is === true){
        msg = {
            data: "ON"
        };
    }
    else {
        msg = {
            data: "OFF"
        };
    }
    chrome.tabs.sendMessage(id, msg);
}

function active(tab){
    console.log("onLoad!");
    // console.log(tab);
    let msg={
        data: "ON"
    }
    let msg2={
        data: "OFF"
    }
    if (is === false){
        msg.data = "OFF";
    }
    chrome.tabs.sendMessage(tab.tabId, msg);
    if(lastTab){
        chrome.tabs.sendMessage(lastTab, msg2);
    }
    lastTab = tab.tabId;
}