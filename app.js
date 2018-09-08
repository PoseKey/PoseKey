import * as posenet from '@tensorflow-models/posenet';

async function load(){
    const model = await posenet.load();
    console.log(model);
}
load();