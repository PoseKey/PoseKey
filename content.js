import * as mobilenetModule from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import * as posenet from '@tensorflow-models/posenet';
import {drawKeypoints, drawSkeleton} from './demo_util';
//global variables
let isDetecting;
let loading = false;
let loaded = false;
let videoErr =false;

let stream;
let video;
let canvas;
let ctx;

let model;
let knn;
let mobilenet;
//classifiers
const TOPK = 10;

let count = 0;
let hit =[0,0,0,0,0,0,0];
//save& load
let myIncomingClassifier = [];
let myGroups = []
/*
 * 프로그램이 실행되면 실행되는 코드
 */
async function setup(){
    video = await loadVideo().catch((error)=>{
        if(error){
            videoErr = true;
            console.log('Pose-Detector(Chrome:Extension) has been stopped because the site is insecure for camera permission!')
        }
    });
    // console.log(video);
    await loadCanvas();
    // if(model) model.dispose();
    model = await posenet.load(0.75);
    // console.log(model);
    // if(knn) knn.dispose();
    knn = knnClassifier.create();
    // console.log(knn);
    // if(!mobilenet)
    mobilenet = await mobilenetModule.load();
    // console.log(mobilenet);
    await myloadModel();
}
async function detect(){
    let playAlert = setInterval(async function(){
        if(isDetecting === true&& count==0){
            // const pose = await 
            let pose = await model.estimateSinglePose(video,0.4,true,16);
            // console.log(pose);
            ctx.clearRect(0,0,640,480);
            if (pose.score >= 0.1) {
                drawKeypoints(pose.keypoints, 0.5, ctx);
                drawSkeleton(pose.keypoints, 0.5, ctx);
            }
            let logits;
            const image = tf.fromPixels(canvas);
            // 'conv_preds' is the logits activation of MobileNet.
            const infer = () => mobilenet.infer(image, 'conv_preds');
            const numClasses = knn.getNumClasses();
            if (numClasses > 0) {
                // If classes have been added run predict
                logits = infer();
                const res = await knn.predictClass(logits, TOPK);
                console.clear();
                console.log("%c" + res.classIndex + " " + res.confidences[res.classIndex]*100, "color: blue; font-size: 100pt");
                // chrome.tabs.executeScript(null,{code:"scrollBy(0,200);"});
                //control
                var ytb_video = document.getElementsByTagName("video")[0];
                var nextButton = document.getElementsByClassName("ytp-next-button")[0];

                if(res.confidences[res.classIndex]*100 > 60){
                    switch(res.classIndex){
                        case 1:
                            if(ytb_video.volume < 0.2){
                                ytb_video.volume = 0.2;
                            }
                            else{
                                ytb_video.volume -= 0.2;
                            }
                            break;
                        case 2:
                            if (ytb_video.volume > 0.8){
                                ytb_video.volume = 1;
                            }
                            else{ 
                                ytb_video.volume += 0.1;
                            }
                            break;
                        case 3:
                            //scrollBy(0,200);
                            if(ytb_video.paused){
                                ytb_video.play();
                            }
                            else{
                                ytb_video.pause();
                            }
                            count = 5;
                            break;
                        case 4:
                            ytb_video.currentTime -= 10;
                            break;
                        case 5:
                            ytb_video.currentTime += 10;
                            break;
                        case 6:
                            //scrollBy(0,-200);
                            nextButton.click();
                            break;
                        default:
                            break;
                    }
                    // if(res.classIndex != 0) count = 5;
                }
            }
            // Dispose image when done
            image.dispose();
            if (logits != null) {
                logits.dispose();
            }
            // console.log(pose);
        }
        else if(count!=0){
            count--;
        }
        else clearInterval(playAlert);
    },500);
}
/**
 * 카메라가 활성화된 HTMLVideoElement를 생성후 리턴
 */
async function loadVideo(){
    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    // console.log(stream);
    let video = document.createElement('video');
    video.height = 480;
    video.width = 640;
    video.srcObject = stream;
    video.play();
    return video;
}

async function loadCanvas(){
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    // document.body.appendChild(canvas);
    canvas.width = 640;
    canvas.height = 480;
}

async function myloadModel(){
    const myLoadedModel  = await tf.loadModel('https://posekey.github.io/youtube/model/model.json');
    // console.log(myLoadedModel);
    // console.log('myLoadedModel.layers.length');
    // console.log(myLoadedModel.layers.length);

    const myMaxLayers = myLoadedModel.layers.length;
    const myDenseEnd =  myMaxLayers - 2;
    const myDenseStart = myDenseEnd/2;                                  
    for (let myWeightLoop = myDenseStart; myWeightLoop < myDenseEnd; myWeightLoop++ ){
        // console.log('myLoadedModel.layers['+myWeightLoop+'].getWeights()[0].print(true)');
        myIncomingClassifier[myWeightLoop - myDenseStart] =  myLoadedModel.layers[myWeightLoop].getWeights()[0];
        myGroups[myWeightLoop - myDenseStart] =  myLoadedModel.layers[myWeightLoop].name;                        
    }
    // console.log('Printing all the incoming classifiers');
    // for (let x=0;  x < myIncomingClassifier.length; x++){
    //   myIncomingClassifier[x].print(true);
    // }
    // console.log('Activating Classifier');
    knn.dispose();
    knn.setClassifierDataset(myIncomingClassifier);
    // console.log(knn);
    // console.log('Classifier loaded');
}

// setup();
chrome.runtime.onMessage.addListener(gotMessage);
async function gotMessage(message, sender, sendResponse){
    console.log(message.data);
    if(message.data === "OFF") {
        isDetecting = false;
        //video.pause();
        video.srcObject = null;
        stream.getTracks().forEach((track) => {
            track.stop();
        });
    }
    else if (message.data === "ON"){
        // video = await loadVideo();
        if(!loading){
            loading = true;
            await setup();
            loaded = true;
        }
        if(!isDetecting && loaded && !videoErr){
            video = await loadVideo();
            isDetecting = true;
            detect();
        }
    }
}
