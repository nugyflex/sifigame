function enemy(x, y, vel, index) {
    this.x = x;
    this.y = y;
    this.xvel = 0;
    this.yvel = 0;
    this.dead = 0;
    this.theta = 0;
    this.vel = vel;
    this.height = 10;
    this.width = 10;
    this.type = "enemy";
    this.falling = 0;
    this.frame = 0;
	this.health = 20;
	this.attackcooldown = Math.floor((Math.random() * 60) + 30);
	this.damage = 10;
	this.attackcooldown1 = 0;
	this.index = index;



    //functions called in the main loop are below
	this.attack = function(player)
	{
		if (this.attackcooldown1 < 0)
		{
		player.health = player.health - this.damage;
		this.attackcooldown1 = this.attackcooldown;
		game2.damagealpha = 0.8;

		}
	}
    this.ai = function (player) {


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
			this.falling = 1;
			this.y = 10000;
		}
		if (this.dead == 1)
		{
			
            playercollection.delete(this.index);

		}

	
        


    }
    

    this.calcNewPosition = function () {
        if (this.dead == 0 && this.falling == 0) {
			
            this.x = this.x + this.xvel;
            this.y = this.y + this.yvel;


        }
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
            ctx.fillRect(this.x, this.y, 10, 10);
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
        if (this.health > 0) {
            if (this.health < 20) {
                if (this.health > 15) {
                    ctx.fillStyle = "lime";
                }
                else {
                    if (this.health > 5) {
                        ctx.fillStyle = "yellow";
                    }
                    else {

                        ctx.fillStyle = "red";

                    }
                }
                ctx.fillRect(this.x - 5, this.y - 5, this.health, 3);
            }
        }


        

    }

}