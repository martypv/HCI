
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
    var imagesSource =
        ["./img/locked.png",
        "./img/unlock.png",
        "./img/screen.png",
        "./img/key.png",
        "./img/button.png", "./img/button2.png"];

    var clickOne = 0;
    var clickTwo = 0;
    var clickThree = 0;

    var button = 0;

    var messageOne = "PRESS THE _ ";

    var messageTwo = "BUTTON _";

    var messColor = "white";

    var moveX;
    var moveY;

    var imNum = 5;





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


    function drawLockOne(im){
        context.drawImage(images[im], 80, 100);
        console.log(im);
    }

    function drawLockTwo(im2){
        context.drawImage(images[im2], 260, 50);

    }

    function drawLockThree(im3) {
        context.drawImage(images[im3], 430, 100);
    }



    function drawScreen(){
        context.drawImage(images[2],100, 350);

        if(clickOne == 1){
            if(clickTwo == 1){
                if(clickThree == 1){
                    imNum = 4;
                    context.font= "35px Arial";
                    context.fillStyle = messColor;
                    context.fillText(messageOne, 115, 402);
                    context.fillText(messageTwo, 115, 452);
                } else {
                    context.font= "35px Arial";
                    context.fillStyle = "white";
                    context.fillText("ARE YOU REALLY _", 115, 402);
                    context.fillText("SURE? _", 115, 452);
                }
            }else if (clickThree ==1){
                context.font= "35px Arial";
                context.fillStyle = "white";
                context.fillText("ARE YOU REALLY _", 115, 402);
                context.fillText("SURE? _", 115, 452);
            } else {
                context.font= "35px Arial";
                context.fillStyle = "white";
                context.fillText("ARE YOU SURE _", 115, 402);
                context.fillText("ABOUT THIS? _", 115, 452);
            }
        } else if(clickTwo == 1){
            context.font= "35px Arial";
            context.fillStyle = "white";
            context.fillText("ARE YOU SURE _", 115, 402);
            context.fillText("ABOUT THIS? _", 115, 452);
        } else {
            context.font= "35px Arial";
            context.fillStyle = "white";
            context.fillText("SYSTEM IS VERY _", 115, 402);
            context.fillText("LOCKED _", 115, 452);
        }



    }


    function drawButton(){

        context.drawImage(images[imNum],250, 250);
        if (clickOne == 1){
            if(clickTwo == 1) {
                if (clickThree == 1) {
                    if (button == 1) {
                        context.font= "35px Arial";
                        messColor = "red";
                        messageOne = "MISSILE WARNING _";
                        messageTwo = "SENT _";
                    }
                } else {
                    button = 0;
                    imNum = 5;
                }
            }else{
                button = 0;
                imNum = 5;
            }
        } else {
            button = 0;
            imNum = 5;
        }

    }


    function eventClickLock(e) {
        console.log("clicked");
        if((moveX > 80) && (moveX < 171)){
            if((moveY > 100) && (moveY < 191)){
                if(clickOne == 0){
                    clickOne = 1;
                } else {
                    clickOne = 0;
                }

            }
        }
        if((moveX > 260) && (moveX < 351)){
            if((moveY > 50) && (moveY < 141)){
                if(clickTwo == 0){
                    clickTwo = 1;
                } else {
                    clickTwo = 0;
                }

            }
        }
        if((moveX > 430) && (moveX < 521)){
            if((moveY > 100) && (moveY < 191)){
                if(clickThree == 0){
                    clickThree = 1;
                } else {
                    clickThree = 0;
                }
            }
        }

        if((moveX > 250) && (moveX < 326)){
            if((moveY > 250) && (moveY < 326)){
                if(clickOne == 1) {
                    if (clickTwo == 1) {
                        if (clickThree == 1) {
                            button = 1;
                        }
                    }
                }

            }
        }


    }

    function eventMouseMove(e) {

        console.log( "Mouse: " + e.offsetX + ", " + e.offsetY );

        //gets true mouse position
        moveX = e.offsetX;
        moveY = e.offsetY;
        console.log("Clickone: " + clickOne);
        console.log("Clicktwo: " + clickTwo);
        console.log("ClickThree: " + clickThree);


    }

    function drawKey(x,y) {
        context.drawImage(images[3],x - 32,y);
    }




    //draw the canvas
    function drawCanvas() {

        //clear the canvas
        clearCanvas( canvasColor );

        var im = clickOne;
        var im2 = clickTwo;
        var im3 = clickThree;


        drawLockOne(im);
        drawLockTwo(im2);
        drawLockThree(im3);
        drawScreen();
        drawButton();
        drawKey(moveX,moveY);





    }


    // clear canvas
    function clearCanvas( ) {

        //Set fill style
        context.fillStyle = canvasColor;

        //Fill canvas with color
        context.fillRect(0, 0, canvasWidth , canvasHeight);

    }

    var frameCounter = 0;

    function loop() {
        requestAnimationFrame(loop);
        frameCounter++;
        drawCanvas();
    }


    //EVENT LISTENERS
    theCanvas.addEventListener("click", eventClickLock, false);
    theCanvas.addEventListener("mousemove",eventMouseMove, false);



    //load the images
    loadImages( images, imagesSource, function(images) {
        // draw the canvas
      //  drawCanvas();
        loop();
    });



} //End of Canvas App