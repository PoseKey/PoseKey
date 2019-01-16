// import * as posenet from '@tensorflow-models/posenet';
// import { createSecureContext } from 'tls';

// navigator.getUserMedia = navigator.getUserMedia ||
//     navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

// const height = 480;
// const width = 640;
// let video;

setup();

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message);
}

async function setup(){
    const button = document.getElementById('ON');
    button.onclick = ()=>{
        console.log("clicked");
        chrome.runtime.sendMessage(
            {data:"trigger"},
            (response)=>{
                console.log(response);
            }
        );
    };
    // const button2 = document.getElementById('options');
    // button2.onclick = ()=>{
    //     chrome.runtime.openOptionsPage();
    // }
}
// const net = await posenet.load(0.75);

    // document.getElementById('loading').style.display = 'none';
    // document.getElementById('main').style.display = 'block';
    
    // const show = await loadButton();
    // document.body.appendChild(show);
    // try {
    //     video = await loadVideo();
    // } catch (e) {
    //     let info = document.getElementById('info');
    //     info.textContent = 'this browser does not support video capture,' +
    //         'or this device does not have a camera\n';
    //     info.style.display = 'block';

    //     const button = document.createElement('button');
    //     button.innerText = "allow camera";
    //     button.onclick = function(){
    //         console.log("ACS");
    //     };

    //     info.appendChild(button);
    // }
// async function loadVideo(){
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//         throw new Error(
//             'Browser API navigator.mediaDevices.getUserMedia not available');
//     }
//     stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
//     let video = document.getElementById('video');
//     video.height = 480;
//     video.width = 640;
//     video.srcObject = stream;
//     video.play();
//     return video;
// }

// async function loadButton(){
//     const show = document.createElement('button');
//     show.innerText = "show";
//     show.onclick = function(){
//         console.log("show");
//         chrome.tabs.sendMessage({}, {data: "require"});
//     };
//     return show;
// }
