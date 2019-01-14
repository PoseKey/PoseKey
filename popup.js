
let video;
const height = 480;
const width = 640;

function setup(){
    video = loadVideo();
}

async function loadVideo(){
    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    let video = document.createElement('video');
    video.height = 480;
    video.width = 640;
    video.srcObject = stream;
    video.play();
    return video;
}


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
