import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import Stats from 'stats.js';
//global variables
const stats = new Stats();
let isDetecting;
let stream;
let video;
/*
 * 프로그램이 실행되면 실행되는 코드
 */
async function setup(){
    video = await loadVideo();
    // console.log(video);
    const model = await posenet.load(1.0);
    // console.log(model);
    // setupFPS();
    // animate(model);
    let playAlert = setInterval(async function(){
        if(isDetecting === true){
            // const pose = await 
            model.estimateSinglePose(video,0.2,true,16).then((pose)=>console.log(pose));
            // console.log(pose);
        }
    },1000);
}

/**
 * 카메라가 활성화된 HTMLVideoElement를 생성후 리턴
 */
async function loadVideo(){
    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
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
// function animate(model){
//     async function detect(){
//         // console.log(isDetecting);
//         stats.begin();
//         if(isDetecting === true){
//             // const pose = await 
//             model.estimateSinglePose(video,0.5,true,16).then((pose)=>console.log(pose));
//             // console.log(pose);
//         }
//         stats.end();
//         requestAnimationFrame(detect);
//     }
//     detect();
// }
/**
 * 카메라로 1초에 몇번 인식하고 있는지 왼쪽 상단에 표시
 */
function setupFPS() {
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
}

setup();
chrome.runtime.onMessage.addListener(gotMessage);

async function gotMessage(message, sender, sendResponse){
    // console.log(message.data);
    if(message.data === "OFF") {
        isDetecting = false;
        // stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: false });
        // var tracks = await stream.getTracks();
        // tracks.forEach(track => track.stop());
        video.pause();
        video.srcObject = null;
        stream.getTracks().forEach((track) => {
            track.stop();
        });
    }
    else if (message.data === "ON"){
        video = await loadVideo();
        isDetecting = true;
    }
}