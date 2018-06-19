
var test = Array.from(document.getElementsByClassName('visible'));
var cam = Array.from(document.getElementsByClassName('camera-stream'));



var video = document.querySelector('#camera-stream'),
    image = document.querySelector('#snap'),
    start_camera = document.querySelector('#start-camera'),
    controls = document.querySelector('.controls'),
    take_photo_btn = document.querySelector('#take-photo'),
    delete_photo_btn = document.querySelector('#delete-photo'),
    download_photo_btn = document.querySelector('#download-photo'),
    error_message = document.querySelector('#error-message');


  document.querySelector('#reset').addEventListener("click", function() {
      controls.classList.add("visible");
    start_camera.classList.add("visible");
    video.classList.add("visible");
    image.classList.add("visible");
    error_message.classList.add("visible");
    video.classList.remove("visible");
    controls.classList.remove("visible");
  })

navigator.getMedia = ( navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia);


if(!navigator.getMedia){
  displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
}
else{


  navigator.getMedia(
    {
      video: true
    },

    function(stream){


      video.src = window.URL.createObjectURL(stream);


      video.play();
      video.onplay = function() {
        showVideo();
      };

    },

    function(err){
      displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
    }
  );

}


test.forEach(function(val,index,array){
  val.addEventListener("click", function(e){
    e.preventDefault();


   
    video.play();
    showVideo();
  })
})



take_photo_btn.addEventListener("click", function(e){

  e.preventDefault();

  var snap = takeSnapshot();


  image.setAttribute('src', snap);
  image.classList.add("visible");


  delete_photo_btn.classList.remove("disabled");
  download_photo_btn.classList.remove("disabled");

  download_photo_btn.href = snap;


  video.pause();

});


delete_photo_btn.addEventListener("click", function(e){

  e.preventDefault();


  image.setAttribute('src', "");
  image.classList.remove("visible");


  delete_photo_btn.classList.add("disabled");
  download_photo_btn.classList.add("disabled");

  video.play();

});



function showVideo(){

  console.log("working");
  hideUI();
  if(video.hasAttribute("class: visible")) {
    video.classList.remove("visible");
  controls.classList.remove("visible");
  } else {
  video.classList.add("visible");
  controls.classList.add("visible");
  }
}


function takeSnapshot(){
 

  var hidden_canvas = document.querySelector('canvas'),
      context = hidden_canvas.getContext('2d');

  var width = video.videoWidth,
      height = video.videoHeight;

  if (width && height) {

    hidden_canvas.width = width;
    hidden_canvas.height = height;

 
    context.drawImage(video, 0, 0, width, height);

    return hidden_canvas.toDataURL('image/png');
  }
}


function displayErrorMessage(error_msg, error){
  error = error || "";
  if(error){
    console.log(error);
  }

  error_message.innerText = error_msg;

  hideUI();
  error_message.classList.add("visible");
}


function hideUI(){


  controls.classList.remove("visible");
  start_camera.classList.remove("visible");
  video.classList.remove("visible");
  image.classList.remove("visible");
  error_message.classList.remove("visible");
}