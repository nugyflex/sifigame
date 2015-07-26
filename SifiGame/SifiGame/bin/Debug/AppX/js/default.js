//setting up the canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.tabIndex = 1;
c.focus();
//loading in all the images
window.addEventListener("keydown", onKeyDown, true);
window.addEventListener("keyup", onKeyUp, true);
window.addEventListener("mousedown", mouseDown, true);
window.addEventListener("mouseup", mouseUp, true);

window.onmousemove = function (e) {
    var bbox = c.getBoundingClientRect();

    mouse.X = e.clientX - bbox.left * (c.width / bbox.width) + game2.canvastranslatex-10;
    mouse.Y = e.clientY - bbox.top * (c.height / bbox.height) + game2.canvastranslatey-10;
}


c.width = window.innerWidth-20;
c.height = window.innerHeight-24.5;
var cwidth = c.width;
var cheight = c.height;








function thing(index, type, y, height)
{
    this.index = index;
    this.type = type;
    this.y = y;
    this.drawn = false;
    this.height = height;
    
}

var projectilecounter = 0;

var floorcounter = 0;

var platformcounter = 0;
var keypressed =
{
    w: 0,
    s: 0,
    a: 0,
    d: 0,
    space: 0,
    z: 0,
    shootcooldown: 0,
    x: 0,
    e: 0,
    f: 0,
    mouse: 0,
    k: 0,
    q: 0,
    r: 0
};

var platformside =
{
    top: 1,
    bottom: 2,
    left: 3,
    right: 4,
    topleft: 5,
    topright: 6,
    bottomleft: 7,
    bottomright: 8,
};
var mouse =
    {
        X: 0,
        Y: 0
    }

var projectilecollection = new projectiles();
var collisiondetection1 = new collisiondetection();
var platformcollection = new platforms();
var thingstodraw1 = new thingstodraw();
var playercollection = new players();
var explosioncollection = new explosions();
var floorcollection = new floors();
var floating_numbercollection = new floating_numbers();
var weaponcollection = new weapons();
var miscobjectcollection = new miscobjects();

window.onmousemove



var timer = 50;
    window.onload = function () {
        ctx.fillStyle = "white";
        ctx.fillRect(-8000, -8000, 16000, 16000);
        ctx.drawImage(startscreen, game2.canvastranslatex + cwidth / 2 - 400, game2.canvastranslatey + cheight / 2 - 300);
            draw();


    };

    var game2 = new game;
    game2.startgame("map1");

    camera1 = new camera(playercollection.array[0], game2);

    var rotatething = 0;
    var fps = 60;
    function draw() {
        setTimeout(function () {
            requestAnimationFrame(draw);

                camera1.center();
                ctx.fillStyle = "rgb(30,30,50)";
                ctx.fillRect(-8000, -8000, 16000, 16000);

            //to draw a background
                thingstodraw1.executefalling();
                thingstodraw1.executefloors();
                thingstodraw1.execute();
                game2.drawhud();
                ctx.translate(game2.canvastranslatex, game2.canvastranslatey);
        }, 1000 / fps);
    }



/////////////////////////////////////////////////////////////////////////////////////////////////////////
function gameLoop() {
    game2.pause();
    if (game2.running) {
        timer = timer - 1;
        if (timer == -1) {
            //timer = 50;
        }
        if (keypressed.a == 0 && keypressed.d == 0) {

            playercollection.array[0].xvel = 0;
        }


        //ctx.drawImage(background1, game2.canvastranslatex, game2.canvastranslatey);

        if (playercollection.array[0].dead == 1) {
            playercollection.array[0].draw();
            playercollection.array[0].y = playercollection.array[0].y + 20;
        }
		for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {
            if (playercollection.array[playercounter].dead==0) {
				if (playercollection.array[playercounter].falling == 1)
				{

					if (playercollection.array[playercounter].y > 9000) {
					    playercollection.delete(playercounter);
					}

				}

				
			}
			
		}
				for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {

					if (platformcollection.array[platformcounter].y > 9000) {
					    platformcollection.delete(platformcounter);
					}

			
		}
        var thing1 = 0
        for (floorcounter = 0; floorcounter < floorcollection.count() ; floorcounter++) {

            if (collisiondetection1.testfeetcollision(playercollection.array[0], floorcollection.array[floorcounter]) == 0) {
                thing1 = thing1 + 1;
            }

        }

        for (explosioncounter = 0; explosioncounter < explosioncollection.count(); explosioncounter++) {

            if (explosioncollection.array[explosioncounter].frame > 3) {
                explosioncollection.delete(explosioncounter);
            } 


        }

        for (floating_numbercounter = 0; floating_numbercounter < floating_numbercollection.count(); floating_numbercounter++) {

            if (floating_numbercollection.array[floating_numbercounter].alphacounter < 0)
            {
                floating_numbercollection.delete(floating_numbercounter);
            }

        }

        if (thing1 == floorcollection.count()) {
            playercollection.array[0].falling = 1;
            playercollection.array[0].xvel = 0;
            playercollection.array[0].yvel = 0;
        }
		
		
        for (miscobjectcounter = 0; miscobjectcounter < miscobjectcollection.count() ; miscobjectcounter++) {
            for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {

                collisiondetection1.stopplayer(miscobjectcollection.array[miscobjectcounter], platformcollection.array[platformcounter]);


            }
        }
		for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {
            for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {
					
					if (platformcollection.array[platformcounter].type == 11 && playercollection.array[playercounter].type == "enemy")
					{
						if (collisiondetection1.testcollision(playercollection.array[playercounter],platformcollection.array[platformcounter]))
						{
						playercollection.array[playercounter].attack(platformcollection.array[platformcounter]);
						 if (platformcollection.array[platformcounter].health < 1) {
							platformcollection.array[platformcounter].y = 10000;
                        }
						}
					}
					if (platformcollection.array[platformcounter].type == 12 && playercollection.array[playercounter].type == "enemy")
					{
						if (collisiondetection1.testcollision(playercollection.array[playercounter],platformcollection.array[platformcounter]))
						{
						playercollection.array[playercounter].attack(platformcollection.array[platformcounter]);
						 if (platformcollection.array[platformcounter].health < 1) {
							platformcollection.array[platformcounter].y = 10000;
                        }
						}
					}
					

            }
            platformcollection.array[platformcounter].execute();
        }		
		
		
		
		
        playercollection.array[0].colwithplatform = 0;
        for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {
            for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {

                    collisiondetection1.stopplayer(playercollection.array[playercounter], platformcollection.array[platformcounter]);
                    collisiondetection1.stopplayer(playercollection.array[playercounter], platformcollection.array[platformcounter]);
            }
        }



        for (floorcounter = 0; floorcounter < floorcollection.count() ; floorcounter++) {
            for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {
                if (playercollection.array[playercounter].type == "enemy") {
                    var thing3 = 0;
                    for (floorcounter1 = 0; floorcounter1 < floorcollection.count() ; floorcounter1++) {
                        if (collisiondetection1.checkifinside(playercollection.array[playercounter],floorcollection.array[floorcounter1]))
                            thing3 = thing3 + 1;
                    }

                    if (thing3 == 0) {
                        collisiondetection1.stopplayerrev(playercollection.array[playercounter], floorcollection.array[floorcounter]);
                    }

                }



            }
        }




        player_loop();
        if (playercollection.array[1].type == "drone") {
            playercollection.array[1].ai();
        }
        game2.runround();





        if (playercollection.array[0].type == "player") {
            playercollection.array[1].calcNewPosition(playercollection.array[0]);
        }

        for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {

    
        }


        
        for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {
            if (playercollection.array[playercounter].type == "enemy") {
                playercollection.array[playercounter].calcNewPosition();
                if (playercollection.array[0].type == "player") {
                    playercollection.array[playercounter].ai(playercollection.array[0]);
                }
            }
            if (playercollection.array[playercounter].type == "player") {
                playercollection.array[playercounter].calcNewPosition();
                playercollection.array[playercounter].controls();
            }
        }
        if (playercollection.array[0].colwithplatform == 1) {
            console.log("=1")
        }



        projectile_collision();
        /*
        ctx.save();
        ctx.translate(500, 500);
        ctx.rotate(rotatething);

        ctx.fillStyle = "rgb(70,70,255)";
        ctx.fillRect(0, 0, 100, 40);


        ctx.restore();
        ctx.fillStyle = "rgb(200,100,50)";
        ctx.fillRect(500, 500, 1, 1);
        rotatething = rotatething + 0.01;
        */



    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
