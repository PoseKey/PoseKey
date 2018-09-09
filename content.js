import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import Stats from 'stats.js';

const stats = new Stats();
async function setup(){
    const video = await loadVideo();
    // console.log(video);
    const model = await posenet.load();
    // console.log(model);
    setupFPS();
    animate(video, model);
}
async function loadVideo(){
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    let video = document.createElement('video');
    video.height = 480;
    video.width = 640;
    video.srcObject = stream;
    video.play();
    return video;
}

function animate(video, model){
    async function detect(){
        stats.begin();
        const pose = await model.estimateSinglePose(video);
        // console.log(pose);
        stats.end();
        requestAnimationFrame(detect);
    }
    detect();
}
function setupFPS() {
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
  }

setup();

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse){
//     console.log(message.txt);
//     if(message.txt === "hello") {
//         let paragraphs = document.getElementsByTagName('p');
//         for (elt of paragraphs) {
//             elt.style['background-color'] = '#FF00FF';
//         }
//     }
// }