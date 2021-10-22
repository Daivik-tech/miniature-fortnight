function setup()
{
canvas=createCanvas(280,280);
canvas.center();    
backround("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function clearcanvas()
{
backround("white");    
}
function preload()
{
classifier=ml5.imageClassifier('Doodlenet')    
}
function draw()
{
//Set strke weight to 13    
strokeweight(13);
//Set stroke color to black
stroke(0);
//If mouse is pressed,draw line between previous and current mouse positions
if(mouseIspressed)
{
line(pmouseX,pmouseY,mouseX,mouseY);    
}    
}
function classifyCanvas()
{
classifier.classify(canvas,gotResult)    
}
function gotResult(error,results)
{
if(error)
{
console.error(error);    
}    
}
console.log(results);
document.getElementById('label').innerHTML='Label:'+results[0].label;
document.getElementById('confidence').innerHTML='Confidence'+Math.round(results[0].confidence*100)+'%';
utterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis)