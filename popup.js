import * as posenet from '@tensorflow-models/posenet';

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

const height = 480;
const width = 640;

setup();


async function setup(){
    const net = await posenet.load(0.75);

    document.getElementById('loading').style.display = 'none';
    document.getElementById('main').style.display = 'block';

    let video;

    try {
        video = await loadVideo();
    } catch (e) {
        let info = document.getElementById('info');
        info.textContent = 'this browser does not support video capture,' +
            'or this device does not have a camera';
        info.style.display = 'block';
        throw e;
    }
}

async function setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
          'Browser API navigator.mediaDevices.getUserMedia not available');
    }
  
    const video = document.getElementById('video');
    video.width = width;
    video.height = height;
  
    const mobile = isMobile();
    const stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {
            facingMode: 'user',
            width: mobile ? undefined : width,
            height: mobile ? undefined : height,
        },
    });
    video.srcObject = stream;
  
    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
  }
  
  async function loadVideo() {
    const video = await setupCamera();
    video.play();
  
    return video;
  }


// chrome.runtime.onMessage.addListener(gotMessage);

// function buttonClicked(tab) {
//     console.log("button clicked!");
//     // console.log(tab);
//     let msg = {
//         data: "ON"
//     };
//     if(is===true){
//         msg.data = "OFF";
//         is = false;
//         chrome.browserAction.setIcon({path: "likeR.png"});
//     }
//     else {
//         is = true;
//         chrome.browserAction.setIcon({path: "likeG.png"});
//     }
//     chrome.tabs.sendMessage(tab.id, msg);
// }
