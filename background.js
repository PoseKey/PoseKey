console.log('background running');

let is = true;
let lastTab;
let lastWindow;
// chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.tabs.onUpdated.addListener(onLoad);
chrome.tabs.onCreated.addListener(onLoad);
chrome.tabs.onActivated.addListener(active);    //active는 하나밖에 없음
chrome.windows.onFocusChanged.addListener(window);
chrome.runtime.onMessage.addListener(gotMessage);
// chrome.tabs.onHighlighted.addListener(highlight);

function gotMessage(message, sender, sendResponse){
    console.log(message);
    if(message.data=="trigger"){
        let msg = {
            data: "ON"
        };
        if(is===true){
            msg.data = "OFF";
            is = false;
            chrome.browserAction.setIcon({path: "likeR.png"});
            /* 모든 탭에 OFF하라고 보냄*/
            chrome.tabs.query({}, function(tabs) {
                for (let i=0; i<tabs.length; i++) {
                    chrome.tabs.sendMessage(tabs[i].id, msg);
                }
            });
        }
        else {
            is = true;
            chrome.browserAction.setIcon({path: "likeG.png"});
            chrome.tabs.query({active:true,currentWindow: true},function(tabs){
                var current = tabs[0].id;
                chrome.tabs.sendMessage(current, msg);
            });   // 현재 탭에만 ON하라고 보냄
        }
    }
    sendResponse({data:is});
}
function buttonClicked(tab) {
    console.log("button clicked!");
    console.log(tab);
    let msg = {
        data: "ON"
    };
    if(is===true){
        msg.data = "OFF";
        is = false;
        chrome.browserAction.setIcon({path: "likeR.png"});
        /* 모든 탭에 OFF하라고 보냄*/
        chrome.tabs.query({}, function(tabs) {
            for (let i=0; i<tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, msg);
            }
        });
    }
    else {
        is = true;
        chrome.browserAction.setIcon({path: "likeG.png"});
        chrome.tabs.sendMessage(tab.id, msg);   // 현재 탭에만 ON하라고 보냄
    }
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
    // console.log("tab changed!");
    // console.log(tab.tabId);
    let msg={
        data: "ON"
    }
    let msg2={
        data: "OFF"
    }
    if (is === false){
        msg.data = "OFF";
    }
    chrome.tabs.query({active:false}, function(tabs) {
        for (let i=0; i<tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, msg2);
        }
    });
    chrome.tabs.sendMessage(tab.tabId, msg);
    // if(lastTab){
    //     chrome.tabs.sendMessage(lastTab, msg2);
    // }
    // lastTab = tab.tabId;
}

function window(windowId){
    let msg={
        data: "ON"
    }
    let msg2={
        data: "OFF"
    }
    if (is === false){
        msg.data = "OFF";
    }
    chrome.tabs.query({active:false}, function(tabs) {
        for (let i=0; i<tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, msg2);
        }
    });

    // console.log("window changed!");
    chrome.tabs.query({active:true,currentWindow: true},function(tabs){
        var current = tabs[0].id;
        // console.log(windowId + ", " + current);
        chrome.tabs.sendMessage(current, msg);
        // chrome.tabs.sendMessage(lastTab, msg2);
        lastTab = current;
        // lastWindow=windowId;
    });
    // if(lastWindow!=windowId){
    //     chrome.tabs.sendMessage(lastTab, msg2);
    // }
}

function highlight(tab){
    console.log("highlight!");
}
