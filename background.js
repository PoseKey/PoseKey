console.log('background running');

let is = null;
let lastTab;
let lastWindow;

let secondImage ="standing-up-man-.png";
let firstImage ="man-celebrating1.png";
// chrome.browserAction.onClicked.addListener(buttonClicked);

function save(){
    if(is==true)
        chrome.storage.sync.set({power:true});
    else
        chrome.storage.sync.set({power:false});
}
function load(){
    chrome.storage.sync.get('power',function(data){
        is = data.power;
        console.log(data.power);
        if(is)chrome.browserAction.setIcon({path: firstImage});
        else chrome.browserAction.setIcon({path: secondImage});
    });
}
load();

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
            chrome.browserAction.setIcon({path: secondImage});
            /* 모든 탭에 OFF하라고 보냄*/
            chrome.tabs.query({}, function(tabs) {
                for (let i=0; i<tabs.length; i++) {
                    chrome.tabs.sendMessage(tabs[i].id, msg);
                }
            });
        }
        else {
            is = true;
            chrome.browserAction.setIcon({path: firstImage});
            chrome.tabs.query({active:true,currentWindow: true},function(tabs){
                var current = tabs[0].id;
                chrome.tabs.sendMessage(current, msg);
            });   // 현재 탭에만 ON하라고 보냄
        }
    }
    else if(message.data == "?"){
        console.log("?");
    }
    else if(message.data =="ON"){
        is = true;
        chrome.browserAction.setIcon({path: firstImage});
        chrome.tabs.query({active:true,currentWindow: true},function(tabs){
            var current = tabs[0].id;
            chrome.tabs.sendMessage(current, msg);
        });
    }
    else if(message.data =="OFF"){
        is = false;
        chrome.browserAction.setIcon({path: secondImage});
        /* 모든 탭에 OFF하라고 보냄*/
        chrome.tabs.query({}, function(tabs) {
            for (let i=0; i<tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, msg);
            }
        });
    }
    save();
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
        chrome.browserAction.setIcon({path: secondImage});
        /* 모든 탭에 OFF하라고 보냄*/
        chrome.tabs.query({}, function(tabs) {
            for (let i=0; i<tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, msg);
            }
        });
    }
    else {
        is = true;
        chrome.browserAction.setIcon({path: firstImage});
        chrome.tabs.sendMessage(tab.id, msg);   // 현재 탭에만 ON하라고 보냄
    }
    save();
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
    save();
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
    save();
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
    save();
}

function highlight(tab){
    console.log("highlight!");
}
