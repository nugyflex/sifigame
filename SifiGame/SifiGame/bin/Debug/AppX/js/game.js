function game() {
    this.running = false;
    this.pausecounter = 0;
    this.paused = false;
    this.canvastranslatex = 0;
    this.canvastranslatey = 0;
    this.round = 0;
    this.numberofenemies = 0;
    this.playercap = 60;
    this.fixedplayercap = 30;
    this.roundbreakmax = 530;
    this.roundbreak = 530;
    this.lastamount = 0;
    this.debugmode = 0;
    this.damagealpha = 0;
    this.TNOE = 0;
	
	this.startgame = function(map)
	{

	    /*switch (map) {
	        case "map1":
	            this.loadmap1();
	            break;
	    }*/
	    this.loadmap1();
	    this.startround();
	    setInterval(gameLoop, 1000 / 60);

	}

    this.pause = function () {
        this.pausecounter = this.pausecounter + 1;

    }

    this.loadmap1 = function()
    {

        platformcollection.add(300, 40, 60, 60, PLATFORMTYPE_GREYBOX);
        platformcollection.add(300, 520, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(250, 420, 40, 20, PLATFORMTYPE_SMALL_BOX);
        platformcollection.add(500, 520, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(700, 300, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(-200, 400, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(-230, 370, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(-20, 370, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(0, 560, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(-700, 560, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(-1600, 540, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(500, 0, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(350, 1000, 40, 20, 6);
        platformcollection.add(500, 1000, 40, 20, 8);
        platformcollection.add(350, 1100, 40, 20, 6);
        platformcollection.add(500, 1100, 40, 20, 8);
        platformcollection.add(350, 1200, 40, 20, 6);
        platformcollection.add(500, 1200, 40, 20, 8);
        platformcollection.add(350, 1300, 40, 20, 6);
        platformcollection.add(500, 1300, 40, 20, 8);
        platformcollection.add(100, 100, 40, 20, 7);
        platformcollection.add(500, 1400, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(520, 1600, 40, 20, PLATFORMTYPE_SMALL_BOX);/*
        platformcollection.add(-700, -2000, 60, 10000, PLATFORMTYPE_GREYBOX);
        platformcollection.add(-700, -2000, 10000, 60, PLATFORMTYPE_GREYBOX);
        platformcollection.add(3000, -2000, 600, 10000, PLATFORMTYPE_GREYBOX);
        platformcollection.add(-700, 5000, 10000, 60, PLATFORMTYPE_GREYBOX);*/
        platformcollection.add(200, 200, 50, 50, 9, 100, 200, 500, 200);
        platformcollection.add(400, 200, 50, 50, 9, 100, 225, 500, 225);
        platformcollection.add(700, 1700, 50, 50, 9, 600, 1700, 600, 1780);
        platformcollection.add(700, 1700, 50, 50, 9, 640, 1700, 640, 1780);
        platformcollection.add(700, 700, 50, 50, 11);
        platformcollection.add(700, 700, 50, 50, 12);

        floorcollection.add(-100, -100, 1000, 1000);
        floorcollection.add(300, -900, 300, 900);

        floorcollection.add(570, -600, 700, 50);
        floorcollection.add(570, -400, 700, 50);
        floorcollection.add(300, 800, 300, 700);
        floorcollection.add(300, 1600, 300, 200);
        floorcollection.add(300, 1450, 100, 200);
        floorcollection.add(500, 1450, 100, 200);

        floorcollection.add(800, 400, 700, 700);
        floorcollection.add(300, 1700, 780, 100);


        platformcollection.add(929, 400, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(1029, 400, 40, 20, PLATFORMTYPE_PILLAR1);
        //platformcollection.add(1129, 400, 40, 20, PLATFORMTYPE_PILLAR1);
        //platformcollection.add(1229, 400, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(1200, 370, 300, 30, PLATFORMTYPE_DOOR_750);
        platformcollection.add(1329, 400, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(1429, 400, 40, 20, PLATFORMTYPE_PILLAR1);

        platformcollection.add(1480, 500, 40, 20, 8);
        platformcollection.add(1480, 600, 40, 20, 8);
        platformcollection.add(1480, 700, 40, 20, 8);
        platformcollection.add(1480, 800, 40, 20, 8);
        platformcollection.add(1480, 900, 40, 20, 8);
        platformcollection.add(1480, 1000, 40, 20, 8);

        platformcollection.add(829, 1050, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(929, 1050, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(1029, 1050, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(1129, 1050, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(1240, 1050, 40, 20, 6);
        platformcollection.add(1340, 1050, 40, 20, 8);
        platformcollection.add(1429, 1050, 40, 20, PLATFORMTYPE_PILLAR1);

        floorcollection.add(1200, 1090, 200, 310);
        floorcollection.add(1000, 1390, 400, 410);
        floorcollection.add(1200, 0, 100, 450);

        platformcollection.add(300, -300, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(340, -300, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(100, 200, 100, 100, PLATFORMTYPE_DOOR_750);
        platformcollection.add(380, -300, 300, 30, PLATFORMTYPE_DOOR_750);
        platformcollection.add(480, -300, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(520, -300, 40, 20, PLATFORMTYPE_PILLAR1);
        platformcollection.add(560, -300, 40, 20, PLATFORMTYPE_PILLAR1);


        playercollection.add(cwidth / 2, cheight / 2, player);
        playercollection.add(cwidth / 2, cheight / 2, drone);
        weaponcollection.add("guntype2", playercollection.array[0]);
        weaponcollection.add("guntype3", playercollection.array[1]);
        playercollection.array[0].weapons[0] = weaponcollection.array[0];
        playercollection.array[1].weapons[0] = weaponcollection.array[1];

        miscobjectcollection.add("ammocontainer", 600, 600);
        miscobjectcollection.add("ammocontainer", 304, -460);
        miscobjectcollection.add("ammocontainer", 304, -490);
        miscobjectcollection.add("ammocontainer", 304, -520);
        miscobjectcollection.add("ammocontainer", 1210, 50);
        miscobjectcollection.add("ammocontainer", 1210, 80);
        miscobjectcollection.add("ammocontainer", 1210, 110);
        miscobjectcollection.add("acid", 1230, 110, 0, 4);
        miscobjectcollection.add("buystation", 300, 300, "acidgun");
        miscobjectcollection.add("buystation", 340, 300, "guntype1");
    }

    this.getplayercap = function(round)
    {

        switch (round)
        {
            case 1:
                return 5;
                break;

            case 2:
                return 10;
                break

            case 3:
                return 20;
                break;

            case 4:
                return 40;
                break;

            case 5:
                return 50;
                break;

            case 6:
                return 60;
                break;

            case 7:
                return 70;
                break;

            case 8:
                return 90;
                break;

            case 9:
                return 100;
                break;



        }
        if (round>9&&round<16)
        {
            return 120;
        }
        if (round > 15) {
            return 200;
        }

    }

    this.getnumberofenemies = function () {
        for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {

            if (playercollection.array[playercounter].type == "enemy")
            {
                this.numberofenemies++;
            }

        }
        return this.numberofenemies;


    }


    this.startround = function () {

        this.round = this.round + 1;
        this.playercap = this.getplayercap(this.round);



    }

    this.runround = function()
    {

        if (this.getnumberofenemies() == 0)
        {
            this.roundbreak = this.roundbreak - 1;
        }
        if (this.getnumberofenemies() == 0 && this.roundbreak < 1)
        {
            this.startround();
            this.roundbreak = this.roundbreakmax;
        }
        this.numberofenemies = 0;
        if (this.TNOE < this.getplayercap(this.round) && this.getnumberofenemies() < this.fixedplayercap-1) {
            var spawnpoint = Math.floor((Math.random() * 4) + 1);
            this.TNOE++;
            switch (spawnpoint) {

                case 1:
                    playercollection.add(440, 830, enemy, 2.2);
                    break;
                case 2:
                    playercollection.add(960, 1750, enemy, 2.2);
                case 3:
                    playercollection.add(500, 0, enemy, 2.2);
                    break;
                case 4:
                    playercollection.add(1000, 600, enemy, 2.2);
                    break;

            }
            //playercollection.add(440, 830, enemy, 3.5);


        }
        
    
    
        
        this.numberofenemies = 0;
        if (this.getnumberofenemies() == this.playercap)
        {
            this.playercap = -1;
        }
        this.numberofenemies = 0;
        if (keypressed.f == 1 && this.roundbreak < this.roundbreakmax && this.roundbreak > 0)
        {
            this.roundbreak = 3;
        }
    }
    this.drawhud = function()
    {
        if (keypressed.k == 1) {
            if (playercollection.array[0].klatch == 1) {
                if (this.debugmode == 1)
                {
                    this.debugmode = 0;
                }
                else
                {
                    this.debugmode = 1;
                }
            }

            playercollection.array[0].klatch = 0;
        }
        else
        {
            playercollection.array[0].klatch = 1;
        }
        this.drawcrosshair();
        ctx.fillStyle = "rgb(200,75,75)";
        ctx.font = "20px SpacedOut";
        ctx.fillText("Round " + this.round, this.canvastranslatex + cwidth - 200, this.canvastranslatey + 50);
        if (this.roundbreak < 529) {
            ctx.fillText("Time to next round:  " + Math.floor(this.roundbreak/33.33333), this.canvastranslatex + cwidth - 300, this.canvastranslatey + 110);
            ctx.fillText("Press F to start round", this.canvastranslatex + cwidth - 300, this.canvastranslatey + 150);
        }
        if (this.roundbreak < 2) {
            this.addmoney(0,100);
        }
        if (this.getnumberofenemies() > 0) {
            ctx.fillText("Number of enemies remaining:  " + this.getnumberofenemies()/2, this.canvastranslatex + cwidth - 400, this.canvastranslatey + 80);
        }
        
        // Adds UI for buying doors/other misc.
        
        for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {
            if (collisiondetection1.testcollision(playercollection.array[0], platformcollection.array[platformcounter]) && platformcollection.array[platformcounter].removable) {
                ctx.fillText(platformcollection.array[platformcounter].messagetext, this.canvastranslatex + cwidth / 2 - ctx.measureText(platformcollection.array[platformcounter].messagetext).width / 2, this.canvastranslatey + 50);
                if (platformcollection.array[platformcounter].price > 0) {
                    ctx.fillText("$" + platformcollection.array[platformcounter].price, this.canvastranslatex + cwidth / 2 - ctx.measureText("$" + platformcollection.array[platformcounter].price).width / 2, this.canvastranslatey + 70);
                }
            }
            if (collisiondetection1.testcollision(playercollection.array[0], platformcollection.array[platformcounter]) && platformcollection.array[platformcounter].removable && playercollection.array[0].money < platformcollection.array[platformcounter].price) {
                ctx.fillText("Insufficient Funds", this.canvastranslatex + cwidth / 2 - ctx.measureText("Insufficient Funds").width/2, this.canvastranslatey + 90);
            }
        }
        
        //ctx.fillText("x,y of intersect =  " + collisiondetection1.checklineintersectrect(platformcollection.array[0], playercollection.array[0].x, playercollection.array[0].y, mouse.X, mouse.Y), this.canvastranslatex + (cwidth / 2), this.canvastranslatey + (cheight / 2));



        if (this.debugmode == 1)
        {
            

            ctx.fillText("v1_m: " + Math.floor(platformcollection.array[0].v1_m() * 100) / 100 + " v1_b: " + Math.floor(platformcollection.array[0].v1_b() * 100) / 100, this.canvastranslatex + (cwidth / 2), this.canvastranslatey + (cheight / 2) - 20);
            ctx.fillText("v2_m: " + Math.floor(platformcollection.array[0].v2_m() * 100) / 100 + " v2_b: " + Math.floor(platformcollection.array[0].v2_b() * 100) / 100, this.canvastranslatex + (cwidth / 2), this.canvastranslatey + (cheight / 2));
            ctx.fillText("v3_m: " + Math.floor(platformcollection.array[0].v3_m() * 100) / 100 + " v3_b: " + Math.floor(platformcollection.array[0].v3_b() * 100) / 100, this.canvastranslatex + (cwidth / 2), this.canvastranslatey + (cheight / 2) + 20);
            ctx.fillText("v4_m: " + Math.floor(platformcollection.array[0].v4_m() * 100) / 100 + " v4_b: " + Math.floor(platformcollection.array[0].v4_b() * 100) / 100, this.canvastranslatex + (cwidth / 2), this.canvastranslatey + (cheight / 2) + 40);
            ctx.fillText("mouse x,y =  " + Math.floor(mouse.X) + " , " + Math.floor(mouse.Y), this.canvastranslatex + (cwidth / 2), this.canvastranslatey + (cheight / 2) + 80);

            ctx.fillText("Y  " + Math.round(playercollection.array[0].y), this.canvastranslatex + 20, this.canvastranslatey + cheight - 30);
            ctx.fillText("X  " + Math.round(playercollection.array[0].x), this.canvastranslatex + 20, this.canvastranslatey + cheight - 50);

            ctx.fillText("misc objects: " + miscobjectcollection.count(), this.canvastranslatex + cwidth - 350, this.canvastranslatey + cheight - 170);
            ctx.fillText("players: " + playercollection.count(), this.canvastranslatex + cwidth - 350, this.canvastranslatey + cheight - 150);
            ctx.fillText("platforms: " + platformcollection.count(), this.canvastranslatex + cwidth - 350, this.canvastranslatey + cheight - 130);
            ctx.fillText("projectiles: " + projectilecollection.count(), this.canvastranslatex + cwidth - 350, this.canvastranslatey + cheight - 110);
            ctx.fillText("floating_numbers: " + floating_numbercollection.count(), this.canvastranslatex + cwidth - 350, this.canvastranslatey + cheight - 90);
            ctx.fillText("floors: " + floorcollection.count(), this.canvastranslatex + cwidth - 350, this.canvastranslatey + cheight - 70);
            ctx.fillText("explosions: " + explosioncollection.count(), this.canvastranslatex + cwidth - 350, this.canvastranslatey + cheight - 50);
            ctx.fillText("total objects: " + (floating_numbercollection.count() + playercollection.count() + projectilecollection.count() + platformcollection.count() + floorcollection.count() + explosioncollection.count()), this.canvastranslatex + cwidth - 350, this.canvastranslatey + cheight - 30);
        }
        ctx.fillText("$" + playercollection.array[0].money, this.canvastranslatex + 20, this.canvastranslatey + 140);

        if (playercollection.array[0].dead == 0 && playercollection.array[0].type == "player") {
            ctx.drawImage(playercollection.array[0].weapons[playercollection.array[0].weaponinuse].image, this.canvastranslatex + cwidth - 120, this.canvastranslatey + cheight - 100);
            ctx.fillText(playercollection.array[0].weapons[playercollection.array[0].weaponinuse].name, this.canvastranslatex + cwidth - 150, this.canvastranslatey + cheight - 35);

            if (playercollection.array[0].weapons[playercollection.array[0].weaponinuse].ammo == "inf") {
                ctx.drawImage(infinity, this.canvastranslatex + cwidth - 100, this.canvastranslatey + cheight - 130);
            }
            else {
                ctx.fillText(playercollection.array[0].weapons[playercollection.array[0].weaponinuse].ammo + " / " + playercollection.array[0].weapons[playercollection.array[0].weaponinuse].ammores, this.canvastranslatex + cwidth - 100, this.canvastranslatey + cheight - 120);
            }
        }
        if (this.damagealpha > 0) {
            ctx.globalAlpha = this.damagealpha;
            ctx.fillStyle = "rgb(210,75,75)"
            ctx.fillRect(this.canvastranslatex, this.canvastranslatey, cwidth, cheight);
            this.damagealpha = this.damagealpha - 0.1;
            ctx.globalAlpha = 1;
        }
        if (playercollection.array[0].weapons[playercollection.array[0].weaponinuse].reloadtimer>0)
     {
            ctx.fillRect(this.canvastranslatex + cwidth - 100, this.canvastranslatey + cheight - 160,(              playercollection.array[0].weapons[playercollection.array[0].weaponinuse].reloadtimer / playercollection.array[0].weapons[playercollection.array[0].weaponinuse].reloadtimermax)*82, 10)
            ctx.fillRect(this.canvastranslatex+cwidth-104, this.canvastranslatey + cheight - 164,88,2);
                    ctx.fillRect(this.canvastranslatex+cwidth-104, this.canvastranslatey + cheight - 164,2,18);
                            ctx.fillRect(this.canvastranslatex+cwidth-16, this.canvastranslatey + cheight - 164,2,18);
                            ctx.fillRect(this.canvastranslatex+cwidth-104, this.canvastranslatey + cheight - 148,88,2);
    }

			//console.log(this.alphacounter);
			if(this.alphacounter>0)
			{
			this.alphacounter = this.alphacounter - 0.05;
			}
						if(this.alphacounter<0)
			{
			this.alphacounter = 0;
						}

						for (floating_numbercounter = 0; floating_numbercounter < floating_numbercollection.count() ; floating_numbercounter++) {
						    floating_numbercollection.array[floating_numbercounter].draw();
						}

						if (this.running == 0) {
						    ctx.globalAlpha = 0.2;
						    ctx.fillStyle = "rgb(0,0,0)";
						    ctx.fillRect(this.canvastranslatex, this.canvastranslatey, 5000, 5000);
						    ctx.globalAlpha = 1;
						    ctx.fillStyle = "rgb(200,75,75)";
						    ctx.font = "160px SpacedOut";
						    ctx.fillText("Paused", this.canvastranslatex + cwidth / 2 - 270, this.canvastranslatey + cheight / 2 + 40);
						}

						if (playercollection.array[0].type == "player") {
						    playercollection.array[0].healthf();
						}


    }
    this.drawcrosshair = function()
    {
        ctx.fillStyle = "rgb(200,50,50)"
        ctx.fillRect(mouse.X-2,mouse.Y-2,4,4)
    }
	    this.submoney = function(playerindex, amount)
    {
		playercollection.array[playerindex].money = playercollection.array[playerindex].money - amount;
		this.lastamount = amount;
		floating_numbercollection.add(this.canvastranslatex + 20, this.canvastranslatey + 160, (Math.random() * 4) + 1, (Math.random() * 4) + 1, "-" + amount, 20, "rgb(200,75,75)")
    }

	    this.addmoney = function(playerindex, amount)
    {
		playercollection.array[playerindex].money = playercollection.array[playerindex].money + amount;
		this.lastamount = amount*-1;
		floating_numbercollection.add(this.canvastranslatex + 20, this.canvastranslatey + 160, (Math.random() * 4) + 1, (Math.random() * 4) + 1, "+" + amount, 20, "rgb(200,75,75)")
    }
	
}
