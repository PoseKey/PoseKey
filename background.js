console.log('background running');

let is = null;
let lastTab;
let lastWindow;

let secondImage ="standing-up-man-.png";
let firstImage ="man-celebrating1.png";

//setting values initialized by message from background
//pm = posenet model
//sc = image scale
//fq = frequency
//ac = accuracy
let pm, sc, fq, ac;
/*
 * defaults = 사용자의 기본 모델 기능 맵핑 리스트 
 * customs = 사용자의 커스텀 모델 기능 매핑 리스트
 * custom = 커스텀 모델로 설정 여부
 */
let defaults, customs, custom;

/*
 * login = 로그인 여부, true or false
 * uid = 로그인한 사용자의 uid
 * local = custom 모델 생성 여부
 * storedModel = custom 모델 생성자들의 uid 리스트
 */

let login, uid, local = false, storedModel;

load();
loadS();
//power
function save(){
    if(is==true)
        chrome.storage.sync.set({
            power: true,
            sets:{
                pmm: pm,
                scm: sc,
                fqm: fq,
                acm: ac,
                customm:custom, defaultsm:defaults, customsm:customs,
            }
        });
    else
        chrome.storage.sync.set({
            power: false,
            sets:{
                pmm: pm,
                scm: sc,
                fqm: fq,
                acm: ac,
                customm:custom, defaultsm:defaults, customsm:customs,
            }});
}
function load(){
    chrome.storage.sync.get('power',function(data){
        is = data.power;
        console.log(data.power);
        if(is)chrome.browserAction.setIcon({path: firstImage});
        else chrome.browserAction.setIcon({path: secondImage});
    });
}

function loadS(){
    chrome.storage.sync.get('sets',function(data){
        if(data.pm) pm = data.pm; else pm = 1;
        if(data.sc) sc = data.sc; else sc = 0.4;
        if(data.fq) fq = data.fq; else fq = 500;
        if(data.ac) ac = data.ac; else ac = 70;
        if(data.custom) custom = data.custom; else custom = false;
        if(data.defaults) defaults = data.defaults; else defaults = [null,null,null,null,null,null];
        if(data.customs) customs = data.customs; else customs = [null,null,null,null,null,null];
        if(data.storedModel) storedModel = data.storedModel; else storedModel = [];
    });
}

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
            data: "ON", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs,
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
    else if(message.data == "setting"){
        pm = message.pmm;
        sc = message.scm;
        fq = message.fqm;
        ac = message.acm;
    }
    else if(message.data == "poses"){
        custom = message.customm;
        defaults = message.defaultsm;
        customs = message.customsm;
    }
    else if (message.data =="login"){
        login = true;
        uid = message.uidm;
        local = storedModel.includes(message.uidm);
    }
    else if (message.data == "logout"){
        login = false;
        uid = undefined;
        local = false;
        custom = false;
    }
    else if (message.data == "saveModel"){
        let exist = storedModel.includes(message.uidm);
        if(!exist) storedModel.push(message.uidm);
    }
    save();
    sendResponse({data:is, pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, localm: local });
}
function buttonClicked(tab) {
    console.log("button clicked!");
    console.log(tab);
    let msg = {
        data: "ON", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, uidm:uid
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
    let msg = {
        data: "ON", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, uidm:uid
    };
    if (is == false) {
        msg.data = "OFF";
    }
    save();
    chrome.tabs.sendMessage(id, msg);
}

function active(tab){
    // console.log("tab changed!");
    // console.log(tab.tabId);
    let msg={
        data: "ON", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, uidm:uid
    }
    let msg2={
        data: "OFF", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, uidm:uid
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
        data: "ON", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, uidm:uid
    }
    let msg2={
        data: "OFF", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, uidm:uid
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
    // console.log("highlight!");
}
