Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function clickpic(){
Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
    
});
}
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/I_vVuSQqn/model.json",model_Loaded);
function model_Loaded(){
    console.log("model_Loaded!");
}

prediction_1="";
prediction_2="";

function speak(){
    var synth= window.speechSynthesis;
    speak_1="The first prediction is"+prediction_1;
    speak_2="The second predicton is"+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_1+speak_2);
    synth.speak(utterThis);
}
 function check(){
    var imagedude=document.getElementById("captured_image");
    classifier.classify(imagedude,gotResult)
}
    function gotResult(error,result){
    if (error){
        console.error(error);
    }
        else {
            console.log(result);
            prediction_1=result[0].label;
            prediction_2=result[1].label;
            document.getElementById("result1").innerHTML=prediction_1;
            document.getElementById("result2").innerHTML=prediction_2;
            speak();
            if(prediction_1=="Happy"){
                document.getElementById("emoji1").innerHTML="&#128522;";
                
            }
             if(prediction_1=="Sad"){
                document.getElementById("emoji1").innerHTML="&#128532;";
                
            }
             if(prediction_1=="Angry"){
                document.getElementById("emoji1").innerHTML="&#128548;";
                
            }
            if(prediction_2=="Happy"){
                document.getElementById("emoji2").innerHTML="&#128522;";
                
            }
             if(prediction_2=="Sad"){
                document.getElementById("emoji2").innerHTML="&#128532;";
                
            }
             if(prediction_2=="Angry"){
                document.getElementById("emoji2").innerHTML="&#128548;";
                
            }
        }
}