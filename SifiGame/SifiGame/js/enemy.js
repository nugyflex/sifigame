function enemy(x, y, vel, index, etype) {
    this.x = x;
    this.y = y;
    this.xvel = 0;
    this.yvel = 0;
    this.dead = 0;
    this.theta = 0;
    this.etype = etype;
    
    this.defaultvel = vel
    this.vel = this.defaultvel;
    if (game2.round<5)
    {
        this.defaultvel = 1.5;
    }
    else
    {
    this.defaultvel = 2.5;
    }
    if (this.etype == 0)
    {
    this.height = 10;
    this.width = 12;
    this.hitheight = 32;
    this.hitwidth = 12;
    this.damage = 15;
    this.health = 20+((game2.round-1)*5);
    this.maxhealth = 20+((game2.round-1)*5);
    }
        if (this.etype == 1)
    {
    this.height = 10;
    this.width = 30;
    this.hitheight = 28;
    this.hitwidth = 30;
    this.damage = 30;
    this.health = 40+((game2.round-1)*7.5);
    this.maxhealth = 40+((game2.round-1)*7.5);
    }
    this.hitoffsetx = 0;
    this.hitoffsety = -22;
    this.type = "enemy";
    this.falling = 0;
    this.frame = 0;

	this.attackcooldown = Math.floor((Math.random() * 60) + 30);
	this.attackcooldown1 = 0;
	this.index = index;
	this.poisoned = 0;
	this.poisonedtimer = 0;
	this.slowed = 0;
	this.slowedtimer = 0;
    this.protected = false;

    //functions called in the main loop are below
	this.attack = function(player)
	{
		if (this.attackcooldown1 < 0)
		{
		player.health = player.health - this.damage;
		this.attackcooldown1 = this.attackcooldown;
		if (player.type == "player") {
		    game2.damagealpha = 0.8;
		}
		}
	}
    this.dropitem = function()
    {
                    /*if ((Math.random()*100)+1>92)
            {
            miscobjectcollection.add("medkit", this.x, this.y);
            }
                    if ((Math.random()*100)+1>95)
            {
                    miscobjectcollection.add("ammocontainer", this.x, this.y);
            }*/
        var randomnumba = Math.floor(Math.random()*15)+1;
        switch(randomnumba)
        {
         
                case 2:
                    miscobjectcollection.add("ammocontainer", this.x, this.y);
                    break;

                    
                
        }
        
    }
    this.ai = function (player) {

        
        if (this.etype == 1)
        {
            if (collisiondetection1.finddistance(this, player)>100)
            {
             this.protected = true;   
            }
            else
            {
                this.protected = false;
            }
        }

		this.attackcooldown1 = this.attackcooldown1 - 1;
        if (this.dead == 0 && this.falling == 0 && player.falling==0 && keypressed.e == 0) {
            
            this.theta = Math.atan(-(player.y - this.y) / (player.x - this.x));

            if (player.x > this.x) {
                this.yvel = Math.sin(this.theta) * -this.vel;
                this.xvel = Math.cos(this.theta) * this.vel;
            }
            else {
                this.yvel = Math.sin(this.theta) * this.vel;
                this.xvel = Math.cos(this.theta) * -this.vel;
            }
        }
		if (this.health < 1)
		{

            this.dropitem();

			this.falling = 1;
			this.y = 10000;
			game2.addmoney(player.index, 20);
		}
		if (this.dead == 1)
		{
			
		    playercollection.delete(this.index);
		    game2.addmoney(player.index, 20);

		}
		if (this.poisonedtimer > 0)
		{
		    this.poisoned = 1;
		}
		else
		{
		    this.poisoned = 0;
		}
		if (this.poisoned == 1)
		{
		    this.health = this.health - 0.05;
		}
		this.poisonedtimer--;

		if (this.slowedtimer > 0) {
		    this.slowed = 1;
		}
		else {
		    this.slowed = 0;
		}
		if (this.slowed == 1) {
		    this.vel = this.defaultvel*0.5;
		}
		else
		{
		    this.vel = this.defaultvel;
		}
		this.slowedtimer--;

	
        


    }
    

    this.calcNewPosition = function () {
        if (this.falling == 1)
        {
            this.yvel = 12;
        }
			
            this.x = this.x + this.xvel;
            this.y = this.y + this.yvel;


        
    }

    this.changeVelocity = function (xChange, yChange) {
        //so that i can call playercollection.array[0].changeVelocity(whatever you want to add to x vel, and y vel); in the loop
        if (this.dead == 0) {
            this.yvel += yChange
            this.xvel += xChange
        }
    }
    this.draw = function () {

        //call this in the loop to draw the enemy
        if (this.dead == 0) {
            ctx.fillStyle = "orange";
            //ctx.fillRect(this.x, this.y, 10, 10);
            if (this.etype == 1)
            {
            if (this.yvel > 0)
            {
            if (this.protected == true)
                {
            ctx.drawImage(robot2_closed, this.x, this.y - 22);
                }
                else
                {
            ctx.drawImage(robot2, this.x, this.y - 22);
                }

            }
            else
            {
            if (this.protected == true)
                {
                    ctx.drawImage(robot2_back_closed, this.x, this.y - 22);
                }
                    else
                {
                    ctx.drawImage(robot2_back, this.x, this.y - 22);
                }
            }
            }
            if (this.etype == 0)
            {
                            if (this.yvel > 0)
            {
            ctx.drawImage(robot1, this.x, this.y - 22);
            }
            else
            {
                            ctx.drawImage(robot1_back, this.x, this.y - 22);
            }
            }
                
        }
        this.frame = this.frame + 1;
        if (this.frame == 4)
        {
            this.frame = 0;
        }
        if (this.xvel == 0 && this.yvel == 0) {

            //ctx.drawImage(enemysheet1, 0, 0, 12, 12, this.x, this.y, 12, 12);
        }
        else
        {
            //ctx.drawImage(enemysheet1, 0, this.frame * 12, 12, 12, this.x, this.y, 12, 12);
        }
                ctx.fillStyle = "rgb(250,75,75)";
        if (this.health < this.maxhealth && this.health > 0) {
 
                ctx.fillRect(this.x+5-(this.health/2), this.y - 30, this.health, 3);
            
        }


        if (game2.debugmode == 1) {
            
            ctx.fillStyle = "black";
            ctx.fillRect(this.x, this.y, this.width, this.height)
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y-(this.hitheight-10), this.hitwidth, this.hitheight);
            ctx.globalAlpha = 1;
        }

    }

}