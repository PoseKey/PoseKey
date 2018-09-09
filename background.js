console.log('background running');

let is = true;
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log("button clicked!");
    // console.log(tab);
    let msg = {
        txt: "ON"
    };
    if(is===true){
        msg = {
            txt: "OFF"
        }
        is = false;
    }
    else {
        msg = {
            txt: "ON"
        }
        is = true;
    }
    chrome.tabs.sendMessage(tab.id, msg);
}