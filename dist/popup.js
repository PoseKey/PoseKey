chrome.runtime.onMessage.addListener(gotMessage);

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
