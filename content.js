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
//save& load
let myIncomingClassifier = [];
let myGroups = []

//setting values initialized by message from background
let pm, sc, fq, ac;
let mode;
//variables for mapping each poses with functions
let custom, defaults, customs, list;
//variables for loading custom define model
let uid;

let size = 1.0;
let screen, dialog, text, isDialog = false;
let ri = 255, gi = 255, bi = 255, ti = 0.0;
let Sstyle;
let Dstyle;// dialog.style =  "position: fixed;display: none;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0,0,0,0.5);z-index: 2;cursor: pointer;"
let HorizontalInterface = false, VerticalInterface = false; //Horizontal - 1 = top, 0 - bottom; Vertical - 1 - left, 0 - bottom;
    /*
 * 프로그램이 실행되면 실행되는 코드
 */
function setStyle(){
    let Dposition = "";
    if(!HorizontalInterface){
        Dposition = "right:0;";
    }
    if(!VerticalInterface){
        Dposition = Dposition + "bottom:0;";
    }
    Sstyle = "pointer-events:none;position:fixed;display:block;z-index:9999999999;pointer-events:none;height:100%;width:100%;top:0;left:0;";
    Dstyle = "pointer-events:none;position:fixed;display:flex;margin:10px;"+Dposition+"padding:10px;background-color:rgba("+ri+","+gi+","+bi+","+ti+");border-radius:5px;justify-content:center;align-items:center";
    screen.style = Sstyle;
    dialog.style = Dstyle;
    text.style = "padding:0px;margin:0px;";
    text.style.font = "16px arial,serif";
}
async function LoadInterface(){
    isDialog = true;
    screen = document.createElement('div');
    dialog = document.createElement('div');
    // dialog.innerHTML = "PoseKey Loading...";
    text = document.createElement('p');
    text.innerHTML = "PoseKey - Loading...";
    setStyle();
    screen.appendChild(dialog);
    dialog.appendChild(text);
    document.body.appendChild(screen);
}

async function CloseInterface(){
    screen.style = "display:hidden";
    dialog.style = "display:hidden";
    text.innerHTML = "";
}
async function setup(){
    video = await loadVideo().catch((error)=>{
        if(error){
            videoErr = true;
            console.log('Pose-Detector(Chrome:Extension) has been stopped because the site is insecure for camera permission!')
            text.innerHTML = "Camera not connected";
        }
    });
    // console.log(video);
    await loadCanvas();
    // document.body.appendChild(canvas);
    // if(model) model.dispose();
    switch (pm){
        case 0: mode = 0.5;
        break;
        case 1: mode = 0.75;
        break;
        case 2: mode = 1.0;
        break;
        default: mode = 1.01;
        break;
    }
    model = await posenet.load(mode);
    // console.log(model);
    // if(knn) knn.dispose();
    knn = knnClassifier.create();
    // console.log(knn);
    // if(!mobilenet)
    mobilenet = await mobilenetModule.load();
    // console.log(mobilenet);
    if (custom ==true && uid!= undefined){
        await loadCustomModel();
    }
    else await myloadModel();
}
async function detect(){
    let playAlert = setInterval(async function(){
        if(isDetecting === true && count==0){
            // const pose = await 
            let pose = await model.estimateSinglePose(video,sc,true,16);
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
                // chrome.tabs.executeScript(null,{code:""});
                //control
                // console.clear();
                if(custom  && uid!= undefined){
                    list = customs;
                    if(customs[res.classIndex - 1] == undefined){
                        // console.log("%c" + "Idle " + res.confidences[res.classIndex]*100 + "%", "color: blue; font-size: 50pt");
                        text.innerHTML = "Idle " + res.confidences[res.classIndex]*100 + "%";
                    }
                    else {
                        // console.log("%c" + defaults[res.classIndex - 1] + " " + res.confidences[res.classIndex]*100 + "%", "color: blue; font-size: 50pt");
                        text.innerHTML = customs[res.classIndex - 1] + " " + res.confidences[res.classIndex]*100 + "%";
                    }
                }
                else{
                    list = defaults;
                    if(defaults[res.classIndex - 1] == undefined){
                        // console.log("%c" + "Idle " + res.confidences[res.classIndex]*100 + "%", "color: blue; font-size: 50pt");
                        text.innerHTML = "Idle " + res.confidences[res.classIndex]*100 + "%";
                    }
                    else {
                        // console.log("%c" + defaults[res.classIndex - 1] + " " + res.confidences[res.classIndex]*100 + "%", "color: blue; font-size: 50pt");
                        text.innerHTML = defaults[res.classIndex - 1] + " " + res.confidences[res.classIndex]*100 + "%";
                    }
                }
                // console.log(defaults[res.classIndex - 1] + " " + res.confidences[res.classIndex]*100);
                let ytb_video = document.getElementsByTagName("video")[0];

                // console.log(defaults[res.classIndex - 1] == "Scroll Up");
                if(res.classIndex != 0 && res.confidences[res.classIndex]*100 >= ac){
                    
                    switch(list[res.classIndex - 1]){
                        case "scroll up":
                            scrollBy(0,-200);
                            // console.log("scroll up");
                            break;

                        case "scroll down":
                            scrollBy(0,200);
                            // console.log("scroll down");
                            break;

                        case "go to top":
                            scrollTo(0,0);
                            // console.log("go to top");
                            break;

                        case "go to bottom":
                            scrollBy(0,document.body.scrollHeight);
                            // console.log("go to bottom");
                            break;
                        
                        case "volume down":
                            if(ytb_video.volume < 0.2){ytb_video.volume = 0.2;} else{ ytb_video.volume -= 0.2;}
                            // console.log("volume down");
                            break;

                        case "volume up":
                            if (ytb_video.volume > 0.8)
                                {ytb_video.volume = 1;} 
                            else{ ytb_video.volume += 0.1;}
                            // console.log("volume up");
                            break;
                        
                        case "stop video":
                            if(ytb_video.paused){ytb_video.play();} else{ytb_video.pause();}
                            count = 5;
                            // console.log("stop video");
                            break;
                        
                        case "forward 10sec":
                            ytb_video.currentTime -= 10;
                            // console.log("forward 10sec");
                            break;
                        
                        case "backward 10sec":
                            ytb_video.currentTime += 10;
                            // console.log("backward 10sec");
                            break;
                        
                        case "previous slide":
                            location.href = '#slide=previous';
                            // console.log("previous slide");
                            break;

                        case "next slide":
                            location.href = '#slide=next';
                            // console.log("next slide");
                            break;
                        
                        case "next video":
                            let nextButton = document.getElementsByClassName('ytp-next-button')[0]; nextButton.click();
                            // console.log("next video");
                            break;
                        
                        case "close tab":
                            chrome.runtime.sendMessage({data: "close tab"});
                            // console.log("close tab");
                            break;
                        
                        case "new tab":
                            window.open("chrome://newtab");
                            break;
                        case "move tab left":
                            chrome.runtime.sendMessage({data: "move tab left"}, 
                                // function(response) {
                                //     console.log(response.farewell);
                                // }
                            );
                            // console.log("move tab left");
                            break;
                        
                        case "move tab right":
                            chrome.runtime.sendMessage({data: "move tab right"},
                                // function(response) {
                                //     console.log(response.farewell);
                                // }
                            );
                            // console.log("move tab right");
                            break;
                        
                        case "close window":
                            chrome.runtime.sendMessage({data: "close window"},
                                // function(response) {
                                //     console.log(response.farewell);
                                // }
                            );
                            // console.log("close window");
                            break;

                        case "zoom-in":
                            size = size + 0.1;
                            document.body.style.zoom=size;
                            // chrome.runtime.sendMessage({data: "zoom-in"});
                            // console.log("zoom-in");
                            break;
                        
                        case "zoom-out":
                            size = size - 0.1;
                            document.body.style.zoom = size;
                            // chrome.runtime.sendMessage({data: "zoom-out"});
                            // console.log("zoom-out");
                            break;
                        
                        case "zoom-reset":
                            size = 1.0;
                            document.body.style.zoom = size;
                            // chrome.runtime.sendMessage({data: "zoom-reset"});
                            // console.log("zoom-reset");
                            break;
                        
                        case "back":
                            window.history.back();
                            // chrome.runtime.sendMessage({data: "back"});
                            // console.log("back");
                            break;

                        case "forward":
                            window.history.forward();
                            // chrome.runtime.sendMessage({data: "forward"});
                            // console.log("forward");
                            break;

                        case "reload":
                            window.location.reload();
                            // chrome.runtime.sendMessage({data: "reload"});
                            // console.log("reload");
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
    },fq);
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
    const myLoadedModel  = await tf.loadModel('https://ujoy7851.github.io/Capstone/model/model.json');
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

async function loadCustomModel(){
    const myLoadedModel  = await tf.loadModel("https://s3.ap-northeast-2.amazonaws.com/ai-models/user/" + uid + "/model.json");
    const myMaxLayers = myLoadedModel.layers.length;
    const myDenseEnd =  myMaxLayers - 2;
    const myDenseStart = myDenseEnd/2;                                  
    for (let myWeightLoop = myDenseStart; myWeightLoop < myDenseEnd; myWeightLoop++ ){
        myIncomingClassifier[myWeightLoop - myDenseStart] =  myLoadedModel.layers[myWeightLoop].getWeights()[0];
        myGroups[myWeightLoop - myDenseStart] =  myLoadedModel.layers[myWeightLoop].name;                        
    }
    knn.dispose();
    knn.setClassifierDataset(myIncomingClassifier);
}
// setup();
chrome.runtime.onMessage.addListener(gotMessage);
async function gotMessage(message, sender, sendResponse){
    console.log(message);
    if(message.data === "OFF") {
        // (console.log("PoseKey - turned off"));
        if(isDialog){
            CloseInterface();
        }
        isDetecting = false;
        if(video){
            video.pause();
            video.srcObject = undefined;
            stream.getTracks().forEach((track) => {
                track.stop();
            });
        }
    }
    else if (message.data === "ON"){
        // console.log("PoseKey - Initializing");
        // video = await loadVideo();
        pm = message.pmm;
        sc = message.scm;
        fq = message.fqm;
        ac = message.acm;
        
        ri = message.rim;
        gi = message.gim;
        bi = message.bim;
        ti = message.tim;
        isDialog = message.isDialogm;
        VerticalInterface = message.vim;
        HorizontalInterface = message.him;
        
        custom = message.customm;
        defaults = message.defaultsm;
        customs = message.customsm;
        
        uid = message.uidm;
        
        if(text){
            text.innerHTML = "PoseKey - Initializing";
            setStyle();
        }
        else LoadInterface();
        if(text&&isDialog==false){
            CloseInterface();
        }
        if(!loading){
            // console.log("PoseKey - Loading Model...");
            if(isDialog){
                text.innerHTML = "PoseKey - Loading Model...";
            }
            loading = true;
            await setup();
            loaded = true;
        }
        if(!isDetecting && loaded && !videoErr){
            // console.log("PoseKey - Loading Video...");
            if(isDialog){
                text.innerHTML = "PoseKey - Loading Video...";
            }
            video = await loadVideo();
            isDetecting = true;
            detect();
        }
    }
}
