/**
 * Created by Martin on 1/25/18.
 */

//Execute the eventWindowLoaded function
window.addEventListener("load",eventWindowLoaded, false);

//Called when the window has been loaded it then calls the canvasapp()
function eventWindowLoaded() {
    canvasApp();
}


//Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
}


//The function where ALL our canvas code will go
function canvasApp() {


    if (!canvasSupport()) {
        return;
    }


    //Set up the canvas object
    var theCanvas = document.getElementById("myCanvas");
    var context = theCanvas.getContext("2d");

    //Canvas dimensions
    var canvasHeight = theCanvas.height;
    var canvasWidth = theCanvas.width;

    //Set canvas color
    var canvasColor = "gray";

    var images = [];
    var imagesSource = ["./images/joybase.png",
                        "./images/joystick.png"];

    //for mouse down check
    var mouseClick = false;

    // load all the images
    function loadImages( images, imagesSource, callback ) {
        var loadedImages = 0;

        // for each imageSource
        for ( var src = 0; src < imagesSource.length; src++ ) {
            //create a new image object
            images[src] = new Image();

            //load the image
            images[src].onload = function() {
                if( ++loadedImages >= imagesSource.length ) {
                    callback( images );
                };
            }
            //set the image source
            images[src].src = imagesSource[src];
        }
    }


    //global unchanged joystick start x
    var stickStartX = 250;

    //variables associated with joystick object
    var joyStick = {
         x : stickStartX,
         y : 240,
        width : 51,
        height : 107
    };

    var leftColor = "white";
    var rightColor = "white";


    function drawLightLeft(color) {
        context.beginPath();
         /*
         if(joyStick.x <= 225){
         context.shadowColor = "white";
         context.shadowBlur = 10;
         }
         if (joyStick.x > 226){
         context.shadowBlur = 0;
         }
         */
        context.arc(224, 380, 10, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = color;
        context.fill();
        context.closePath();
    }


    function drawLightRight(color) {

        context.beginPath();
        /*
        if(joyStick.x >= 322){
            context.shadowColor = "white";
            context.shadowBlur = 10;
        }
        if (joyStick.x < 322){
            context.shadowBlur = 0;
        }
        */
        context.arc(368, 380, 10, 0, 2*Math.PI);

        context.stroke();
        context.fillStyle = color;
        context.fill();


        context.closePath();



    }



    //draws joystick base
    function drawJoystickBase() {
        context.drawImage(images[0], 200,300);

    }

    //draws joystick
    //start x: 250, y: 235
    //Y coordinate does not move
    function drawJoystick() {
        context.drawImage(images[1],joyStick.x,235);

    }

    //move the joystick
    function moveJoystick( x, y ) {
        //x coordinate boundaries 223 & 324

            //only moves within red ball width
            if((x > joyStick.x) && (x < (joyStick.x + joyStick.width))){
                //only moves if within red ball height
                if ((y > 235) && (y < 290)){

                    //tracks center of joystick
                    joyStick.x = x - 25;

                    //checks borders
                    if(joyStick.x > 324){
                        joyStick.x = 323;
                    }
                    //checks borders
                    if(joyStick.x < 223){
                        joyStick.x = 224;
                    }
                    if(joyStick.x >= 322){
                        rightColor = "yellow";
                    } else {
                        rightColor ="white";
                    }
                    if(joyStick.x <= 225){
                        leftColor = "blue";
                    } else {
                        leftColor = "white";
                    }
                    console.log("moves");

                    //redraws canvas
                    drawCanvas();
                }
            }

        console.log( "Joystick " + joyStick.x);
    }




    //get the mouse position
    function eventMouseMove(e) {

       // console.log( "mouse down ");

        console.log( "Mouse: " + e.offsetX + ", " + e.offsetY );

        //gets true mouse position
        var moveX = e.offsetX;
        var moveY = e.offsetY;

        //checks if mouse is down
        if (mouseClick == true){
            moveJoystick(moveX, moveY);
        }

    }


    //checks if mouse is held down
    function eventMouseDown(e) {
        mouseClick = true;
    }

    //checks if mouse is released
    function eventMouseUp(e) {
        mouseClick = false;
    }


    //draw the canvas
    function drawCanvas() {

        //clear the canvas
        clearCanvas( canvasColor );

        //draw the base
        drawJoystickBase();

        //draw the joystick
        drawJoystick();

        drawLightLeft(leftColor);

        drawLightRight(rightColor);

    }


    // clear canvas
    function clearCanvas( ) {

        //Set fill style
        context.fillStyle = canvasColor;

        //Fill canvas with color
        context.fillRect(0, 0, canvasWidth , canvasHeight);

    }


    //EVENT LISTENERS

    //mouse move
    theCanvas.addEventListener( "mousemove", eventMouseMove , false );
    //mouse down
    theCanvas.addEventListener( "mousedown", eventMouseDown , false );
    //mouse up
    theCanvas.addEventListener( "mouseup", eventMouseUp, false );

    //load the images
    loadImages( images, imagesSource, function(images) {
        // draw the canvas
        drawCanvas();
    });


} //End of Canvas App