import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
// import 'babel-polyfill';
// a();
// function a(){
//     abc();
// }
// async function abc(){
//     const model = await posenet.load();
// }

let video;
navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream)=>{
    video = document.createElement('video');
    video.height = 480;
    video.width = 640;
    video.srcObject = stream;
    video.play();
    posenet.load().then((model)=>{        
    console.log(model);
        frames(model,video);
    });
});

function frames(model, video){
    model.estimateSinglePose(video).then((pose)=>{
        console.log(pose);
    });
    // requestAnimationFrame(frames);
}

// function frames(model, video){
//     model.estimateSinglePose(video).then((pose)=>{
//         console.log(pose);
//     });
//     // requestAnimationFrame(frames);
// }

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