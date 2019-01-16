import * as posenet from '@tensorflow-models/posenet';

const videoWidth = 600;
const videoHeight = 500;
// const stats = new Stats();

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// kick off the demo
bindPage();

export async function bindPage() {
    // Load the PoseNet model weights with architecture 0.75
    // const net = await posenet.load(0.75);
  
    // document.getElementById('loading').style.display = 'none';
    // document.getElementById('main').style.display = 'block';
  
    let video;
    video = await loadVideo();
  }
  async function loadVideo(){
    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    let video = document.getElementById('video');
    video.height = 480;
    video.width = 640;
    video.srcObject = stream;
    video.play();
    return video;
}
