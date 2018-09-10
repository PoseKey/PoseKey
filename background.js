console.log('background running');

let is = true;
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log("button clicked!");
    // console.log(tab);
    let msg;
    if(is===true){
        msg = {
            txt: "OFF"
        }
        is = false;
        chrome.browserAction.setIcon({path: "likeR.png"});
    }
    else {
        msg = {
            txt: "ON"
        }
        is = true;
        chrome.browserAction.setIcon({path: "likeG.png"});
    }
    chrome.tabs.sendMessage(tab.id, msg);
}