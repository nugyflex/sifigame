/*function weapon(x, y, vel, index) {
    this.x = x;
    this.y = y;
    this.xoffset = 14;
    this.yoffset = 3;
    this.parentplayer;
    
    this.dx = function(playerx,playery)
    {
        var theta = Math.atan((playery - mouse.Y) / (playerx - mouse.X));
        var result;

        result = Math.sin(theta) * (this.xoffset - this.yoffset * Math.tan(theta)) / Math.tan(theta);

        return result;
    }

    this.dy = function (playerx, playery) {


        var theta = Math.atan((playery - mouse.Y) / (playerx - mouse.X));
        var result;

        result = Math.sin(theta) * (this.xoffset - this.yoffset * Math.tan(theta)) + this.yoffset / Math.cos(theta)

        return result;

    }

    this.draw = function (playerx, playery)
    {
        //ctx.fillStyle = "rgb(50,255,50)"
        //ctx.fillRect(this.x, this.y, 10.10)
        ctx.save();
        ctx.translate(playerx + this.dx(playerx,playery), playery + this.dy(playerx,playery));
        ctx.rotate(Math.atan((playery - mouse.Y) / (playerx - mouse.X)));
        ctx.drawImage(gun1, 0, 0);
        ctx.restore();
    }

}

weapon1 = new weapon(0,0,0,0);*/

function gun(parent) {
    
    this.ammo = 10;
    this. ammomax = 10;
    this.latch = 0;
    this.latched = 1;
    this.ammores = 1000;
    this.rof = 6;//(rounds a second)
    this.shootcooldown = 60/this.rof;
    this.projectile = "greenlaser";
    this.shootcooldowntimer = -1;
    this.image = gun2pic;
    this.shoot = function () {
        if (this.latch == 0) {
            if (this.shootcooldowntimer < 0&&this.ammo>0) {
                shoot(parent, mouse.X, mouse.Y, parent.index, this.projectile);
                                if (this.ammo !== "inf")
                {
                this.ammo = this.ammo - 1;
                }
                this.shootcooldowntimer = this.shootcooldown;
            }
        }
        else {
            if (this.latched == 0) {
                shoot(parent, mouse.X, mouse.Y, parent.index, this.projectile);
                if (this.ammo !== "inf")
                {
                this.ammo = this.ammo - 1;
                }
            }
            this.latched = 1;
        }


    }
    this.reload = function()
    {
     
        if (this.ammo<this.ammomax)
        {
            if (this.ammores > this.ammomax - this.ammo) {
                this.ammores = this.ammores - (this.ammomax - this.ammo);
                this.ammo = this.ammomax;

            }
            else {
                this.ammo = this.ammo + this.ammores;
                this.ammores = 0;
            }
            
        }

        
    }
    
    this.timer = function () {
        this.shootcooldowntimer = this.shootcooldowntimer - 1;
    }
}


function guntype1(parent) {

    gun.call(this, parent);
    this.ammo = 20;
    this.ammores = 100;
    this.ammomax = 20;
	this.image = gun2pic;
    this.rof = 6;//(rounds a second)
    this.projectile = "greenlaser";
}

function guntype2(parent) {

    gun.call(this, parent);
	this.image = gun1pic;
    this.ammo = "inf";
    this.latch = 1;
    this.projectile = "redlaser";

}



guntype1.prototype = Object.create(gun.prototype);
guntype2.prototype = Object.create(gun.prototype);