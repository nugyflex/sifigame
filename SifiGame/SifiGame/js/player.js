function player(x, y, index/*so i can set where the player starts when i instantiate it*/) {
    this.x = x;
    this.y = y;
    this.oldx = x;
    this.oldy = y;
    this.xvel = 0;
    this.yvel = 0;
    this.vel = 4;
    this.frame1 = 0;
    this.frame2 = 0;
    this.colour = "rgb(200,50,50)";
    this.dc = 0;//so that i can control when the player switches frames
    this.width = 8;
    this.height = 31;
    this.lastdir = 1;
	this.falling = 0;
    this.colwithplatform = 0;
    this.moved = 0;
    this.health = 100;
    this.dead = 0;
    this.shoot = 0;
    this.zcooldown = 0;
    this.frametest = 0;
    this.onfloor = 1;
    this.ready = 0;
    this.type = "player";
	this.placecooldown = 0;
	this.damage = 4;
	this.index = index;
	this.rotation = 0;
	this.money = 500;
	this.weapons = [];
	this.weaponinuse = 0;
	this.weaponswitchlatch = 1;
	this.weaponreloadlatch = 1;
	this.sprinting = 0;

    //functions called in the main loop are below
    this.controls = function () {
        if (this.dead == 0 && this.falling == 0) {
            if (keypressed.shift == 1) {
                this.sprinting = 1;
            }
            else
            {
                this.sprinting = 0;
            }
            if (this.sprinting == 1)
            {
                this.vel = 3;
            }
            else
            {
                this.vel = 1.9;
            }
            if (keypressed.w == 1) {
                this.yvel = -1*this.vel;
                this.moved = 1;
            }
            if (keypressed.s == 1) {
                this.yvel = this.vel;
                this.moved = 1;
            }
            if (keypressed.a == 1) {
                this.xvel = -1*this.vel;
                this.moved = 1;
            }
            if (keypressed.d == 1) {
                this.xvel = this.vel;
                this.moved = 1;
            }
            if (keypressed.a == 1 && keypressed.d == 1) {
                this.xvel = 0;
            }
            if (keypressed.w == 1 && keypressed.s == 1) {
                this.yvel = 0;
            }
            if (keypressed.w == 0 && keypressed.s == 0) {
                this.yvel = 0;
            }
            if (keypressed.r == 1 && this.sprinting == 0) {

                if (this.weaponreloadlatch == 0) {
                    weaponcollection.array[this.weaponinuse].reload();
                }
                this.weaponreloadlatch = 1;
            }
            else
            {
                this.weaponreloadlatch = 0;
            }
            if (keypressed.q == 1 && this.sprinting == 0) {
                if (this.weaponswitchlatch==0)
                {
                    this.weaponinuse++;
                    if (this.weaponinuse > this.weapons.length-1)
                    {
                        this.weaponinuse = 0;
                    }
                }
                this.weaponswitchlatch = 1;
            
            }
            else
            {
                this.weaponswitchlatch = 0;
            }
            if (keypressed.z == 1 && this.placecooldown < 0 && this.money > 19.9) {

				this.placecooldown = 10;
                platformcollection.add(mouse.X, mouse.Y, 50, 50, 12);
				game2.submoney(this.index,20);

            }
			this.placecooldown = this.placecooldown - 1;
            if (keypressed.x == 1&&this.placecooldown < 0  && this.money > 19.9) {
				this.placecooldown = 10;
                platformcollection.add(mouse.X, mouse.Y, 50, 50, 11);
				game2.submoney(this.index,20);
            }

            if (keypressed.mouse == 0)
            {
                this.shootlatch = 0;
            }
            if (keypressed.mouse == 1 && this.dead == 0 && this.falling == 0 && this.sprinting == 0) {
                this.weapons[this.weaponinuse].shoot();
            }
            else {
                this.weapons[this.weaponinuse].latched = 0;
            }

            if (keypressed.space == 1 && this.dead == 0 && this.falling == 0) {
                //gun2.shoot();
            }

            weaponcollection.array[0].timer();
            weaponcollection.array[1].timer();
            this.shootcooldown = this.shootcooldown - 1;
            if (keypressed.e == 1 && this.dead == 0 && this.falling == 0) {
                for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {
                    if (collisiondetection1.testcollision(this, platformcollection.array[platformcounter]) && platformcollection.array[platformcounter].removable && this.money >= platformcollection.array[platformcounter].price) {
                        game2.submoney(this.index, platformcollection.array[platformcounter].price)
                        platformcollection.delete(platformcounter);
                    }
                }
            }
        }
    }

    this.calcNewPosition = function () {





        //adding the velosity to the players position 
        this.x = this.x + this.xvel;
        this.y = this.y + this.yvel;


        //making sure the y cant get really big (1000000000000000000000000000)
        /*if (this.y > 100000) {
            this.y = 90000;
        }*/



        /*if (this.dead == 1) {
            this.xvel = 0;
            this.yvel = 0;
        }*/
    }

    this.changeVelocity = function (xChange, yChange) {
        //so that i can call playercollection.array[0].changeVelocity(whatever you want to add to x vel, and y vel); in the loop
        this.yvel += yChange
        this.xvel += xChange
    }
    this.draw = function () {

        //ctx.drawImage(testguy, 0, (this.frametest * 36), 14, 35, this.x - 7, this.y-50, 14, 35);
        
        //call this in the loop to draw the player

        if (this.xvel == 0 && this.lastdir == 1 && this.yvel == 0) {

            ctx.drawImage(standing_right, 0, this.frame1 * 31, 16, 31, this.x - 8, this.y, 16, 31);
        }
        if (this.xvel == 0 && this.lastdir == 2 && this.yvel == 0) {
            ctx.drawImage(standing_left, 0, this.frame1 * 31, 16, 31, this.x, this.y, 16, 31);

        }
        if (this.xvel == 0 && this.lastdir == 3 && this.yvel == 0) {
            ctx.drawImage(standing_down, 0, this.frame1 * 31, 16, 31, this.x - 4, this.y, 16, 31);

        }


        if (this.xvel > 0) {
            ctx.drawImage(walking_right, 0, this.frame1 * 31, 16, 31, this.x - 8, this.y, 16, 31);
            this.lastdir = 1;
        }
        if (this.xvel == 0 && this.yvel > 0) {
            ctx.drawImage(walking_down, 0, this.frame1 * 31, 16, 31, this.x - 4, this.y, 16, 31);
            this.lastdir = 3;
        }
        if (this.xvel == 0 && this.yvel < 0) {
            ctx.drawImage(walking_up, 0, this.frame1 * 31, 16, 31, this.x - 4, this.y, 16, 31);
            this.lastdir = 3;
        }

        if (this.xvel < 0) {
            ctx.drawImage(walking_left, 0, this.frame1 * 31, 16, 31, this.x, this.y, 16, 31);
            this.lastdir = 2;
        }


        if (this.dc == 1) {
            this.frame1 = this.frame1 + 1;
            this.frame2 = this.frame2 - 1;
            this.frametest = this.frametest + 1
        }
        if (this.frame1 == 4) {
            this.frame1 = 0;
        }

        if (this.frametest == 8) {
            this.frametest = 0;
        }
        if (this.frame2 == -1) {
            this.frame2 = 3;
        }
        this.dc = this.dc + 1;
        if (this.dc == 4) {
            this.dc = 0;
        }
        if (game2.debugmode == 1) {
            ctx.fillStyle = "orange";
            ctx.fillRect(this.x, this.y + (this.height - 10), this.width, 10)
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }


        //weapon1.draw(this.x + 30, this.y);
        //ctx.fillRect(0, 0, 2, 2)

        this.rotation = this.rotation+0.1;


    }
    this.healthf = function () {
        if (this.health > 0) {
            ctx.fillStyle = "rgb(200,75,75)";
            ctx.fillRect(game2.canvastranslatex + 20, game2.canvastranslatey + 20, 20, this.health);
        }
        if (this.health < 0) {
			this.falling = 1;
            this.y = 6000;
        }
    }
}
