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
        ["./img/locked.png",//0
            "./img/unlock.png",//1
            "./img/screen.png",//2
            "./img/screenlong.png",//3
            "./img/screensmall.png",//4
            "./img/up.png",//5
            "./img/down.png",//6
            "./img/gButton.png",//7
            "./img/gButtonD.png",//8
            "./img/carscreen.png",//9
            "./img/car.png",//10
            "./img/emup.png",//11
            "./img/emdown.png",//12
            "./img/screenup.png"//13
        ];

    var frameCounter = 0;
    var pause;

    var moveX;
    var moveY;

    var days = Math.round(Math.random()*100);

    var swOne = 5;
    var swTwo = 5;
    var swThree = 5;
    var swFour = 5;

    var lkOne = 0;
    var lkTwo = 0;
    var lkThree = 0;
    var lkFour = 0;

    var feedMess1 = "FED";
    var feedMess2 = "FED";
    var feedMess3 = "FED";
    var feedMess4 = "FED";
    var fed = "FED";
    var hungry = "HUNGRY";
    var starve = "STARVED";
    var white = "white";
    var yellow = "yellow";
    var red = "red";
    var tColor1 = "white";
    var tColor2 ="white";
    var tColor3 ="white";
    var tColor4 ="white";
    var fColor1 = "green";
    var fColor2 = "green";
    var fColor3 = "green";
    var fColor4 = "green";
    var sColor1 = "green";
    var sColor2 = "green";
    var sColor3 = "green";
    var sColor4 = "green";
    var green = "green";
    var fenMess1 = "ON";
    var fenMess2 = "ON";
    var fenMess3 = "ON";
    var fenMess4 = "ON";
    var eMess1 = "ENCLOSED";
    var eMess2 = "ENCLOSED";
    var eMess3 = "ENCLOSED";
    var eMess4 = "ENCLOSED";
    var on = "ON";
    var off = "OFF";
    var enclosed = "ENCLOSED";
    var loose = "LOOSE";

    var butt1 = 7;
    var butt2 = 7;
    var butt3 = 7;
    var butt4 = 7;
    var car1x = 60;
    var car1y = 455;
    var car2x = 60;
    var car2y = 513;
    var car3x = 60;
    var car3y = 565;
    var mvOne = false;
    var mvTwo = false;
    var mvThree = false;

    var rap = false;

    var fail = 12;
    var panic = false;
    var rapPanic = false;
    var rexPanic = false;
    var ankPanic = false;
    var stegoPanic = false;

    var patrons = Math.round(Math.random()*500);

    var dec = 10000000;

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
    }///

    function drawScreens(){
        // ---Raptors----------
        context.drawImage(images[4],50,150);
        context.font = "15px Arial";
        context.fillStyle = tColor1;
        context.fillText("RAPTORS:", 65, 180);
        context.fillText(feedMess1, 65, 200);
        context.fillStyle = white;
        context.fillText("FENCES: ",65,220);
        context.fillStyle = fColor1;
        context.fillText(fenMess1,135,220);
        // ---T-Rex------------
        context.drawImage(images[4],200,150);
        context.font = "15px Arial";
        context.fillStyle = tColor2;
        context.fillText("T-REX:", 215, 180);
        context.fillText(feedMess2, 215, 200);
        context.fillStyle = white;
        context.fillText("FENCES: ",215,220);
        context.fillStyle = fColor2;
        context.fillText(fenMess2,285,220);
        // ---Ankylosaurus-----
        context.drawImage(images[4],350,150);
        context.font = "15px Arial";
        context.fillStyle = tColor3;
        context.fillText("ANKYLO:", 365, 180);
        context.fillText(feedMess3, 365, 200);
        context.fillStyle = white;
        context.fillText("FENCES:",365,220);
        context.fillStyle = fColor3;
        context.fillText(fenMess3,435,220);
        // ---Stegosaurus------
        context.drawImage(images[4],500,150);
        context.font = "15px Arial";
        context.fillStyle = tColor4;
        context.fillText("STEGO:", 515, 180);
        context.fillText(feedMess4, 515, 200);
        context.fillStyle = white;
        context.fillText("FENCES:",515,220);
        context.fillStyle = fColor4;
        context.fillText(fenMess4,585,220);


        // v_______Raptor Attack_________v

        context.drawImage(images[3],50,700);
        //
        context.font = "25px Arial";
        context.fillStyle = white;
        context.fillText("DAYS SINCE LAST RAPTOR ATTACK: " + days ,70,735,310);

        // v________Cars/Screen__________v
        context.drawImage(images[9],50,430);
        context.drawImage(images[10],car1x,car1y);
        context.drawImage(images[10],car2x,car2y);
        context.drawImage(images[10],car3x,car3y);


        // STATUS
        context.drawImage(images[13],673,70);
        //Raptors
        context.font = "18px Arial";
        context.fillStyle = white;
        context.fillText("RAPTORS:",690,105);
        context.fillStyle = sColor1;
        if(rapPanic == true){
            eMess1 = loose;
            sColor1 = red;
        } else {
            eMess1 = enclosed;
            sColor1 = green;
        }
        context.fillText(eMess1,690,125);
        //T-Rex
        context.fillStyle = white;
        context.fillText("T-REX:",690,155);
        context.fillStyle = sColor2;
        if(rexPanic == true){
            eMess2 = loose;
            sColor2 = red;
        } else {
            eMess2 = enclosed;
            sColor2 = green;
        }
        context.fillText(eMess2,690,175);
        //Ank
        context.fillStyle = white;
        context.fillText("ANKYLO:",690,205);
        context.fillStyle = sColor3;
        if(ankPanic == true){
            eMess3 = loose;
            sColor3 = red;
        } else {
            eMess3 = enclosed;
            sColor3 = green;
        }
        context.fillText(eMess3,690,225);
        //Stegosaurus
        context.fillStyle = white;
        context.fillText("STEGO:",690,255);
        context.fillStyle = sColor4;
        if(stegoPanic == true){
            eMess4 = loose;
            sColor4 = red;
        } else {
            eMess4 = enclosed;
            sColor4 = green;
        }
        context.fillText(eMess4,690,275);

        context.fillStyle = white;
        context.fillText("REMAINING",690,330);
        context.fillText("PATRONS:",690,355);
        context.fillText(patrons,780,355);


    }///

    function drawSwitches() {
        // ---Raptors----------
        context.drawImage(images[swOne],100,50);
        // ---T-Rex------------
        context.drawImage(images[swTwo],250,50);
        // ---Ankylosaurus-----
        context.drawImage(images[swThree],400,50);
        // ---Stegosaurus------
        context.drawImage(images[swFour],550,50);

    }///

    function switchClick() {
        // ---Raptors----------
        if ((moveX > 100) && (moveX < 150)){
            if((moveY > 50) && (moveY < 130)){
                    if (swOne == 5){
                        swOne = 6;

                    } else {
                        swOne = 5;
                        feedMess1 = fed;
                        tColor1 = white;
                    }


            }
        }
        // ---T-Rex------------
        if ((moveX > 250) && (moveX < 300)){
            if((moveY > 50) && (moveY < 130)){
                if (swTwo == 5){
                    swTwo = 6;

                } else {
                    swTwo = 5;
                    feedMess2 = fed;
                    tColor2 = white;
                }
            }
        }
        // ---Ankylosaurus-----
        if ((moveX > 400) && (moveX < 450)){
            if((moveY > 50) && (moveY < 130)){
                if (swThree == 5){
                    swThree = 6;

                } else {
                    swThree = 5;
                    feedMess3 = fed;
                    tColor3 = white;
                }
            }
        }
        // ---Stegosaurus------
        if ((moveX > 550) && (moveX < 600)){
            if((moveY > 50) && (moveY < 130)){
                if (swFour == 5){
                    swFour = 6;

                } else {
                    swFour = 5;
                    feedMess4 = fed;
                    tColor4 = white;
                }
            }
        }
    }///

    function drawLabelRect(){
        //FEED
        context.beginPath();
        context.fillStyle = "dimgray";
        context.fillRect(50,25,600,120);
        context.fillStyle = "grey";
        context.font = "20px Arial";
        context.fillText("FEED",320,49);
        context.closePath();
        //FENCES
        context.beginPath();
        context.fillStyle = "dimgray";
        context.fillRect(50,260,600,130);
        context.fillStyle = "grey";
        context.font = "20px Arial";
        context.fillText("FENCES",310,285);
        context.closePath();
        //CARS
        context.beginPath();
        context.fillStyle = "dimgray";
        context.fillRect(50,400,600,260);
        context.fillStyle = "grey";
        context.font = "20px Arial";
        context.fillText("CAR CONTROLS",275,420);
        context.font ="13px Arial";
        context.fillText("START/STOP", 550,469);
        context.fillText("START/STOP", 550,529);
        context.fillText("START/STOP", 550,589);

        context.closePath();
        //RAPTOR BUTT
        context.beginPath();
        context.fillStyle = "dimgray";
        context.fillRect(50,680,600,90);
        context.fillStyle ="grey";
        context.fillText("TEACH RAPTORS",490,730);
        context.closePath();

        context.beginPath();
        context.fillStyle = "grey";
        context.fillRect(197,25,5,125);
        context.fillRect(348,60,5,90);
        context.fillRect(498,25,5,125);
        context.closePath();

        context.beginPath();
        context.fillStyle = "grey";
        context.fillRect(198,260,5,130);
        context.fillRect(348,300,5,100);
        context.fillRect(498,260,5,130);
        context.closePath();

        context.beginPath();
        context.fillStyle = "dimgray";
        context.fillRect(660,25,225,490);
        context.fillStyle = "grey";
        context.font = "20px Arial";
        context.fillText("ENCLOSURE STATUS",670, 50);
        context.closePath();

        context.beginPath();
        context.fillStyle = "dimgray";
        context.fillRect(660,550,225,220);
        context.fillStyle = "grey";
        context.fillText("EMERGENCY",705,580);
        context.closePath();

    }///

    function drawCarLoc(){
        context.fillStyle = "white";
        context.font = "13px Arial";
        context.fillText("|-RAPTORS-|",80, 455);
        context.fillText("|---T-REX---|", 170, 455);
        context.fillText("|--ANKYLO--|",252,455);
        context.fillText("|--STEGO--|",338,455);
    }

    function drawLocks(){

        // ---Raptors----------
        context.drawImage(images[lkOne],80,280);
        // ---T-Rex------------
        context.drawImage(images[lkTwo],230,280);
        // ---Ankylosaurus-----
        context.drawImage(images[lkThree],380,280);
        // ---Stegosaurus------
        context.drawImage(images[lkFour],530,280);

    }///

    function lockClick(){
        // ---Raptors----------
        if((moveX > 80) && (moveX < 170)){
            if((moveY > 280) && (moveY < 370)){
                if(lkOne == 0){
                    lkOne = 1;
                    fenMess1 = off;
                    fColor1 = red;
                } else {
                    lkOne = 0;
                    fenMess1 = on;
                    fColor1 = green;

                }
            }
        }

        // ---T-Rex------------
        if((moveX > 230) && (moveX < 300)){
            if((moveY > 280) && (moveY < 370)){
                if(lkTwo == 0){
                    lkTwo = 1;
                    fenMess2 = off;
                    fColor2 = red;
                } else {
                    lkTwo = 0;
                    fenMess2 = on;
                    fColor2 = green;
                }
            }
        }

        // ---Ankylosaurus-----
        if((moveX > 380) && (moveX < 470)){
            if((moveY > 280) && (moveY < 370)){
                if(lkThree == 0){
                    lkThree = 1;
                    fenMess3 = off;
                    fColor3 = red;
                } else {
                    lkThree = 0;
                    fenMess3 = on;
                    fColor3 = green;
                }
            }
        }

        // ---Stegosaurus------
        if((moveX > 530) && (moveX < 600)){
            if((moveY > 280) && (moveY < 370)){
                if(lkFour == 0){
                    lkFour = 1;
                    fenMess4 = off;
                    fColor4 = red;
                } else {
                    lkFour = 0;
                    fenMess4 = on;
                    fColor4 = green;
                }
            }
        }

    }///

    function drawButts(){
        // Car One
        context.drawImage(images[butt1],490,440);
        //Car Two
        context.drawImage(images[butt2],490,500);
        // Car Three
        context.drawImage(images[butt3],490,560);

        //Raptor Doors
        context.drawImage(images[butt4],420, 700);

        //Fail Safe
        context.drawImage(images[fail],688,590);

    }///

    function clickButts(){
        pause = frameCounter + 5;
        //Car One
        if((moveX > 490) && (moveX < 540)){
            if((moveY > 460) && (moveY < 510)){
                if(mvOne == false){
                    butt1 = 8;
                    mvOne = true;
                } else {
                    butt1 = 7;
                    mvOne = false;
                }

            }
        }
        //Car Two
        if((moveX > 490) && (moveX < 540)){
            if((moveY > 520) && (moveY < 570)){
                if(mvTwo == false){
                    butt2 = 8;
                    mvTwo = true;
                } else {
                    butt2 = 7;
                    mvTwo = false;
                }

            }
        }
        //Car Three
        if((moveX > 490) && (moveX < 540)){
            if((moveY > 580) && (moveY < 630)){
                if(mvThree == false){
                    butt3 = 8;
                    mvThree = true;
                } else {
                    butt3 = 7;
                    mvThree = false;
                }

            }
        }
        //Raptors
        if((moveX > 420) && (moveX < 470)){
            if((moveY > 700) &&(moveY < 750)){
                if (rap == false){
                    days = 0;
                    butt4 = 8;
                    rap = true;
                } else {
                    rap = false;
                    butt4 = 7;
                }

            }
        }
        //Fail Safe
        if((moveX > 688) && (moveX < 863)){
            if((moveY > 590) && (moveY < 765)){
                if(panic == false){
                    fail = 11;
                }
                if (panic == true){
                    fail = 12;
                    rapPanic = false;
                    stegoPanic = false;
                    rexPanic = false;
                    ankPanic = false;
                    panic = false;
                    lkOne = 0;
                    lkTwo = 0;
                    lkThree = 0;
                    lkFour = 0;

                    feedMess1 = fed;
                    feedMess2 = fed;
                    feedMess3 = fed;
                    feedMess4 = fed;

                    fenMess1 = on;
                    fenMess2 = on;
                    fenMess3 = on;
                    fenMess4 = on;

                    fColor1 = green;
                    fColor2 = green;
                    fColor3 = green;
                    fColor4 = green;

                    tColor1 = white;
                    tColor2 = white;
                    tColor3 = white;
                    tColor4 = white;

                    mvOne = false;
                    mvTwo = false;
                    mvThree = false;

                    butt1 = 7;
                    butt2 = 7;
                    butt3 = 7;
                    butt4 = 7;
                }
            }
        }

    }///

    function moveCars() {
        if (mvOne == true){
            if(frameCounter % 10 == 0){
                car1x += 1;
            }
            if(car1x > 380){
                car1x = 60;
            }

        }
        if(mvTwo == true){
            if(frameCounter % 10 == 0) {
                car2x += 1;
            }
            if(car2x > 380) {
                car2x = 60;
            }
        }
        if(mvThree == true){
            if(frameCounter % 10 == 0) {
                car3x += 1;
            }
            if(car3x > 380){
                car3x = 60;
            }
        }
    }///

    function timeEvent() {
        // ---Raptors----------
        if(tColor1 == red){

        }else {
            if (frameCounter % 500 == 0) {
                tColor1 = yellow;
                feedMess1 = hungry;
                if (frameCounter % 1500 == 0) {
                    tColor1 = red;
                    feedMess1 = starve;
                }
            }
        }

        // ---T-Rex------------
        if(tColor2 == red){

        }else {
            if(frameCounter % 1000 == 0) {
                tColor2 = yellow;
                feedMess2 = hungry;
            }else if (frameCounter % 2900 == 0){
                    tColor2 = red;
                    feedMess2 = starve;
                }
            }

        // ---Ankylosaurus-----
        if(tColor3 == red){

        }else{
            if(frameCounter % 700 == 0) {
                tColor3 = yellow;
                feedMess3 = hungry;
            }
            else if (frameCounter % 3000 == 0){
                    tColor3 = red;
                    feedMess3 = starve;
                }
            }

        // ---Stegosaurus------
        if (tColor4 == red){

        } else {
            if(frameCounter % 800 == 0) {
                tColor4 = yellow;
                feedMess4 = hungry;
            }else if (frameCounter % 3500 == 0){
                    tColor4 = red;
                    feedMess4 = starve;
                }
            }

    }///

    function eventClick(e) {
        console.log("clicked");

        switchClick();
        lockClick();
        clickButts();


    }///

    function eventMouseMove(e) {

        console.log( "Mouse: " + e.offsetX + ", " + e.offsetY );

        //gets true mouse position
        moveX = e.offsetX;
        moveY = e.offsetY;


    }///

    ///WHEN ALL STARVED/WHEN ALL OFF, PANIC
    function panicMode() {
        if((feedMess1 == "STARVED")&&(feedMess2 == "STARVED")&&(feedMess3 == "STARVED")&&(feedMess4 == "STARVED")){
            if((lkOne==1)&&(lkTwo == 1)&&(lkThree == 1)&&(lkFour == 1)){
                panic = true;
            }
        }
        if (panic == true){
            rapPanic = true;
            stegoPanic = true;
            rexPanic = true;
            ankPanic = true;
            fail = 11;
        }
    }///

    function enclosures(){
        if((feedMess1 == "STARVED") && (lkOne == 1)){
            rapPanic = true;
        } else {
            rapPanic = false;
        }
        if((feedMess2 == "STARVED") && (lkTwo == 1)){
            rexPanic = true;
        } else {
            rexPanic = false;
        }
        if((feedMess4 == "STARVED") && (lkFour == 1)){
            stegoPanic = true;
        } else {
            stegoPanic = false;
        }
        if((feedMess3 == "STARVED") && (lkThree == 1)){
            ankPanic = true;
        } else {
            ankPanic = false;
        }
    }///

    function remainingPatrons(){
        if (rapPanic == true){
            if(rexPanic == true){
                dec = 15;
            } else if(stegoPanic == true){
                if (rexPanic == true){
                    dec = 12;
                } else if(ankPanic == true){
                    dec = 10;
                } else {
                    dec = 25;
                }

            } else if(ankPanic == true){
                if (rexPanic == true){
                    dec = 12;
                } else if (stegoPanic == true){
                    dec = 10;
                } else {
                    dec = 15;
                }

            } else{
                dec = 35;
            }

        } else{
            dec = 10000000;
        }
        if(frameCounter % dec == 0){
            if (patrons < 0){
                patrons = 0;
            } else {
                patrons -= 1;
            }

        }

    }///

    //draw the canvas
    function drawCanvas() {

        //clear the canvas
        clearCanvas( canvasColor );

        drawLabelRect();

        drawScreens();

        drawLocks();

        drawSwitches();

        timeEvent();

        moveCars();

        drawButts()
        //console.log(frameCounter);
        drawCarLoc();

        panicMode();
        //console.log(panic);
        enclosures();

        remainingPatrons();


    }///

    // clear canvas
    function clearCanvas( ) {

        //Set fill style
        context.fillStyle = canvasColor;

        //Fill canvas with color
        context.fillRect(0, 0, canvasWidth , canvasHeight);

    }///

    //drawing and frame incrementing loop
    function loop() {
        requestAnimationFrame(loop);
        frameCounter++;
        drawCanvas();
    }///
    
    //EVENT LISTENERS
    theCanvas.addEventListener("click", eventClick, false);
    theCanvas.addEventListener("mousemove",eventMouseMove, false);

    //load the images
    loadImages( images, imagesSource, function(images) {
        //looping
        loop();
    });



} //End of Canvas App