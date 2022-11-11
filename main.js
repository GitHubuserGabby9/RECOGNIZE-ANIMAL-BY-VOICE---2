function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eFL1dOvSG/model.json', modelReady);
}
function modelReady(){
    classifer.classify(gotResults);
}