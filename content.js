import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import Stats from 'stats.js';
//global variables
const stats = new Stats();


/*
 * 프로그램이 실행되면 실행되는 코드
 */
async function setup(){
    const video = await loadVideo();
    // console.log(video);
    const model = await posenet.load();
    // console.log(model);
    setupFPS();
    animate(video, model);
}

/**
 * 카메라가 활성화된 HTMLVideoElement를 생성후 리턴
 */
async function loadVideo(){
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    let video = document.createElement('video');
    video.height = 480;
    video.width = 640;
    video.srcObject = stream;
    video.play();
    return video;
}

/**
 * 매초 마다 pose를 detect합니다.
 * @param {*} video // 카메라로 찍는 화면이 활성화된 HTMLVideoElement
 * @param {*} model // posenet.PoseNet 모델
 */
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
/**
 * 카메라로 1초에 몇번 인식하고 있는지 왼쪽 상단에 표시
 */
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