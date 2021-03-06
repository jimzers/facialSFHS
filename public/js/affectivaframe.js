
/*
   SDK Needs to create video and canvas nodes in the DOM in order to function
   Here we are adding those nodes a predefined div.
*/
var divRoot = $("#affdex_elements")[0];

// The captured frame's width in pixels
var width = 640;

// The captured frame's height in pixels
var height = 480;

/*
   Face detector configuration - If not specified, defaults to
   affdex.FaceDetectorMode.LARGE_FACES
   affdex.FaceDetectorMode.LARGE_FACES=Faces occupying large portions of the frame
   affdex.FaceDetectorMode.SMALL_FACES=Faces occupying small portions of the frame
*/
var faceMode = affdex.FaceDetectorMode.LARGE_FACES;

//Construct a CameraDetector and specify the image width / height and face detector mode.
var detector = new affdex.CameraDetector(divRoot, width, height, faceMode);


// on Initialize
detector.addEventListener("onInitializeSuccess", function() {});
detector.addEventListener("onInitializeFailure", function() {});

/*
  onImageResults success is called when a frame is processed successfully and receives 3 parameters:
  - Faces: Dictionary of faces in the frame keyed by the face id.
           For each face id, the values of detected emotions, expressions, appearane metrics
           and coordinates of the feature points
  - image: An imageData object containing the pixel values for the processed frame.
  - timestamp: The timestamp of the captured image in seconds.
*/
detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {});

/*
  onImageResults success receives 3 parameters:
  - image: An imageData object containing the pixel values for the processed frame.
  - timestamp: An imageData object contain the pixel values for the processed frame.
  - err_detail: A string contains the encountered exception.
*/
detector.addEventListener("onImageResultsFailure", function (image, timestamp, err_detail) {});


// on Reset
detector.addEventListener("onResetSuccess", function() {});
detector.addEventListener("onResetFailure", function() {});

// on Stop
detector.addEventListener("onStopSuccess", function() {});
detector.addEventListener("onStopFailure", function() {});

// on Web Cam Connect
detector.addEventListener("onWebcamConnectSuccess", function() {
    console.log("I was able to connect to the camera successfully.");
});

detector.addEventListener("onWebcamConnectFailure", function() {
    console.log("I've failed to connect to the camera :(");
});
/* api reference
// Track smiles
detector.detectExpressions.smile = true;

// Track joy emotion
detector.detectEmotions.joy = true;

// Detect person's gender
detector.detectAppearance.gender = true;
 */
// detect stuff
detector.detectAllExpressions();
detector.detectAllEmotions();
detector.detectAllEmojis();
detector.detectAllAppearance();

