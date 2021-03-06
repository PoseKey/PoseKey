console.log('background running');

let is = null;
let lastTab;
let lastWindow;
let first = false;
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
 */

let login, uid, local = false;

/*
 *
 *
 */
let isDialog = true, ri, gi, bi, ti, hi, vi;

let msg, msg2;

load();
loadS();
//power
function save(){
    if(is==true)
        chrome.storage.sync.set({
            power: true,
            first: false,
            sets:{
                pm: pm,
                sc: sc,
                fq: fq,
                ac: ac,
                custom:custom, defaults:defaults, customs:customs,
                local: local,
            }
        });
    else
        chrome.storage.sync.set({
            power: false,
            first: false,
            sets:{
                pmm: pm,
                scm: sc,
                fqm: fq,
                acm: ac,
                custom:custom, defaults:defaults, customs:customs,
                local: local,
            }});
}
function load(){
    chrome.storage.sync.get('power',function(data){
        is = data.power;
        console.log(data.power);
        if(is)chrome.browserAction.setIcon({path: firstImage});
        else chrome.browserAction.setIcon({path: secondImage});
    });
    chrome.storage.sync.get('first',(data)=>{
        if(data.first) first = data.first;
        else first = true;
    })
    if(first) chrome.tabs.create({url : "/option/index.html"});
}

function loadS(){
    chrome.storage.sync.get('sets',function(data){
        // console.log(data);
        if(data.pm) pm = data.pm; else pm = 1;
        if(data.sc) sc = data.sc; else sc = 0.3;
        if(data.fq) fq = data.fq; else fq = 500;
        if(data.ac) ac = data.ac; else ac = 60;
        if(data.custom) custom = data.custom; else custom = false;
        if(data.defaults) defaults = data.defaults; else defaults = [null,null,null,null,null,null];
        if(data.customs) customs = data.customs; else customs = [null,null,null,null,null,null];
        if(data.local) local = data.local; else local = false;
        if(data.isDialog == false) isDialog = data.isDialog;else isDialog = true;
        if(data.ri) ri = data.ri; else ri = 56;
        if(data.gi) gi = data.gi; else gi = 104;
        if(data.bi) bi = data.bi; else bi = 188;
        if(data.ti) ti = data.ti; else ti = 0.3;
        if(data.hi == false) hi = data.hi; else hi = true;
        if(data.vi == false) vi = data.vi; else vi = true;
    });
}
function updateMsg(){
    msg={
        data: "ON", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, uidm:uid,
        isDialogm: isDialog,
        rim: ri,
        gim: gi,
        bim: bi,
        tim: ti,
        him: hi,
        vim: vi,
    }
    msg2={
        data: "OFF", pmm:pm, scm:sc, fqm:fq, acm:ac, customm:custom, defaultsm:defaults, customsm:customs, uidm:uid, 
        isDialogm: isDialog,
        rim: ri,
        gim: gi,
        bim: bi,
        tim: ti,
        him: hi,
        vim: vi,
    }
}
function updateCurrent(){
    if(is)
        chrome.tabs.query({active:true,currentWindow: true},function(tabs){
            var current = tabs[0].id;
            chrome.tabs.sendMessage(current, msg);
        });
    else 
        chrome.tabs.query({active:true,currentWindow: true},function(tabs){
            var current = tabs[0].id;
            chrome.tabs.sendMessage(current, msg2);
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
    updateMsg();
    if(message.data=="trigger"){
        if(is===true){
            is = false;
            updateMsg();
            chrome.browserAction.setIcon({path: secondImage});
            /* 모든 탭에 OFF하라고 보냄*/
            chrome.tabs.query({}, function(tabs) {
                for (let i=0; i<tabs.length; i++) {
                    chrome.tabs.sendMessage(tabs[i].id, msg2);
                }
            });
        }
        else {
            is = true;
            updateMsg();
            chrome.browserAction.setIcon({path: firstImage});
            chrome.tabs.query({active:true,currentWindow: true},function(tabs){
                var current = tabs[0].id;
                chrome.tabs.sendMessage(current, msg);
            });   // 현재 탭에만 ON하라고 보냄
        }
    }
    else if(message.data == "?"){
        // console.log("?");
    }
    // else if(message.data =="ON"){
    //     is = true;
    //     updateMsg();
    //     chrome.browserAction.setIcon({path: firstImage});
    //     chrome.tabs.query({active:true,currentWindow: true},function(tabs){
    //         var current = tabs[0].id;
    //         chrome.tabs.sendMessage(current, msg);
    //     });
    // }
    // else if(message.data =="OFF"){
    //     is = false;
    //     updateMsg();
    //     chrome.browserAction.setIcon({path: secondImage});
    //     /* 모든 탭에 OFF하라고 보냄*/
    //     chrome.tabs.query({}, function(tabs) {
    //         for (let i=0; i<tabs.length; i++) {
    //             chrome.tabs.sendMessage(tabs[i].id, msg);
    //         }
    //     });
    // }
    else if(message.data == "setting"){
        pm = message.pmm;
        sc = message.scm;
        fq = message.fqm;
        ac = message.acm;
        updateMsg();
        updateCurrent();
    }
    else if(message.data == "poses"){
        custom = message.customm;
        defaults = message.defaultsm;
        customs = message.customsm;
        updateMsg();
        updateCurrent();
    }
    else if(message.data =="interface"){
        ri = message.rim;
        gi = message.gim;
        bi = message.bim;
        ti = message.tim;
        updateMsg();
        updateCurrent();
    }
    else if(message.data =="interfaceIO"){
        isDialog = message.isDialogm;
        hi = message.him;
        vi = message.vim;
        updateMsg();
        updateCurrent();
    }
    else if (message.data =="login"){
        uid = message.uidm;
        updateMsg();
        updateCurrent();
    }
    else if (message.data == "logout"){
        login = false;
        uid = undefined;
        local = false;
        custom = false;
        updateMsg();
        updateCurrent();
    }
    else if (message.data == "saveModel"){
        local = true;
        updateMsg();
        updateCurrent();
    }

    //function mapped to poses
    else if(message.data == "close tab"){
        chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
            chrome.tabs.remove(tab[0].id)
        })
    }
    else if(message.data == "move tab left"){
        chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
            if (tab[0].index > 0) {
                chrome.tabs.move(tab[0].id, {'index': tab[0].index - 1})
            }
        })
    }
    else if(message.data == "move tab right"){
        chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
            chrome.tabs.move(tab[0].id, {'index': tab[0].index + 1})
        })
    }
    else if(message.data == "close window"){
        chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
            chrome.windows.remove(tab[0].windowId)
        })
    }
    // else if(message.data == "zoom-in"){
    //     chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
    //         chrome.tabs.getZoom(tab[0].id, (zoomFactor) => {
    //             // console.log(zoomFactor)
    //             chrome.tabs.setZoom(tab[0].id, zoomFactor + 0.1)
    //         })
    //     })
    // }
    // else if(message.data == "zoom-out"){
    //     chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
    //         chrome.tabs.getZoom(tab[0].id, (zoomFactor) => {
    //             chrome.tabs.setZoom(tab[0].id, zoomFactor - 0.1)
    //         })
    //     })
    // }
    // else if(message.data == "zoom-reset"){
    //     chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
    //         chrome.tabs.setZoom(tab[0].id, 0)
    //     })     
    // }
    // else if(message.data == "back"){
    //     chrome.tabs.executeScript(null, {'code': 'window.history.back()'})
    // }
    // else if(message.data == "forward"){
    //     chrome.tabs.executeScript(null, {'code': 'window.history.forward()'})    
    // }
    // else if(message.data == "reload"){
    //     chrome.tabs.executeScript(null, {'code': 'window.location.reload()'})   
    // }

    save();
    sendResponse({
        data:is,
        pmm:pm,
        scm:sc,
        fqm:fq,
        acm:ac,
        customm:custom,
        defaultsm:defaults,
        customsm:customs,
        localm: local,
        isDialogm: isDialog,
        rim: ri,
        gim: gi,
        bim: bi,
        tim: ti,
        him: hi,
        vim: vi,
    });
}

function onLoad(id){
    console.log("onLoad!");
    // console.log(id);
    updateMsg();
    if (is == false) {
        msg.data = "OFF";
    }
    save();
    chrome.tabs.sendMessage(id, msg);
}

function active(tab){
    // console.log("tab changed!");
    // console.log(tab.tabId);
    updateMsg();
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
}

function window(windowId){
    updateMsg();
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
    save();
}
