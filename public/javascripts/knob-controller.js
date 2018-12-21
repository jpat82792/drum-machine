DomReady.ready(function(){
  var knob = document.getElementById('knob');
  console.log(knob);
  var mouseState = false;
  var volumeLevel = 0;
  var levelStart;
  var upDown = true;
  var maxKnob = 240; 
  var minKnob = -60;
  knob.style.transform = "rotateZ(-60deg)";

  knob.addEventListener("mousedown",
  function(e){
    console.log("Mouse down");
    console.log(e);
    mouseState = true;
    levelStart = parseInt(e.screenY, 10);
  });



  document.addEventListener("mousemove", function(e){
    if(mouseState)
    {
      var diff = parseInt(e.screenY, 10) - levelStart;
      console.log(diff);
      levelStart += diff;
      
      value = knob.style.transform;
      getDegs = value.split('(');

      degs = getDegs[1].split('deg')
      degs = degs[0];
      console.log(degs);
      if(degs <= maxKnob && degs >= minKnob)
      {
	newValue = parseInt(degs, 10)+(-1*parseInt(diff, 10));
      }
      else if(degs > maxKnob && diff > 0)
      {
 	newValue = parseInt(degs, 10)+(-1*parseInt(diff, 10));       
      }
      else if(degs < minKnob && diff < 0)
      {
     	newValue = parseInt(degs, 10)+(-1*parseInt(diff, 10));
      }
      console.log(newValue);
      knob.style.transform = "rotateZ("+newValue+"deg)";
    }
  });

  document.addEventListener("mouseup",function(e){
    console.log("up");
    mouseState = false;
    console.log(volumeLevel);
  });
});
