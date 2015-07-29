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
    this.ammomax = 10;
    this.reloading = 0;
    this.latch = 0;
    this.latched = 1;
    this.ammores = 1000;
    this.rof = 6;//(rounds a second)
    this.shootcooldown = 60/this.rof;
    this.projectile = "greenlaser";
    this.shootcooldowntimer = -1;
    this.image = gun2pic;
    this.reloadtimer = 0;
    this.parent = parent;
    this.reloadtimermax = 30;
    this.upgraded = false;
    this.shoot = function (x, y, xoffset, yoffset) {
        if (this.reloading == 0) {
            if (this.latch == 0) {
                if (this.shootcooldowntimer < 0 && this.ammo > 0) {
                    shoot(this.parent, x, y, this.parent.index, this.projectile, xoffset, yoffset);
                    if (this.ammo !== "inf") {
                        this.ammo = this.ammo - 1;
                    }
                    this.shootcooldowntimer = this.shootcooldown;
                }
            }
            else {
                if (this.latched == 0) {
                    if (this.ammo > 0) {
                        shoot(this.parent, x, y, this.parent.index, this.projectile, xoffset, yoffset);
                        if (this.ammo !== "inf") {
                        this.ammo = this.ammo - 1;
                        }
                                    }
                }
                this.latched = 1;
            }

        }
    }
    this.initreload = function()
    {
        if (this.ammo < this.ammomax&&this.reloading == 0) {
            this.reloadtimer = this.reloadtimermax;
            this.reloading = 1;
        }
    }
    this.reload = function()
    {
        if (this.reloadtimer == 0) {
            if (this.ammo < this.ammomax) {
                if (this.ammores > this.ammomax - this.ammo) {
                    this.ammores = this.ammores - (this.ammomax - this.ammo);
                    this.ammo = this.ammomax;

                }
                else {
                    this.ammo = this.ammo + this.ammores;
                    this.ammores = 0;
                }

            }
            this.reloading = 0;
        }
    }
    
    this.timer = function () {
        this.shootcooldowntimer = this.shootcooldowntimer - 1;
        this.reloadtimer = this.reloadtimer - 1;
        if (this.upgraded)
        {
            this.projectile = this.projectile2;
            this.shootcooldown = this.shootcooldown2;
        }
    }
}


function guntype1(parent) {

    this.name = "pulse rifle"
    gun.call(this, parent);
    this.ammo = 20;
    this.ammores = 100;
    this.ammomax = 20;
    this.height = 9;
    this.width = 25;
	this.image = gun2pic;
	this.rof = 6;//(rounds a second)
	this.shootcooldown = 60 / this.rof;
	this.projectile = "greenlaser";
	this.image1 = gun1;
	this.reloadtimermax = 120;
	this.projectile2 = "purplelaserpiercing";
    this.rof2 = 8;
    this.shootcooldown2 = 60 / this.rof2;
}

function guntype2(parent) {

    this.name = "laser pistol";
    gun.call(this, parent);
    this.image = gun1pic;
    this.rof = 6;
    this.ammo = 12;
    this.ammomax = 12;
    this.ammores = 60;
    this.width = 18;
    this.reloadtimermax = 60;
    this.shootcooldown = 60 / this.rof;
    //this.ammo = "inf";
    this.latch = 1;
    this.image1 = gun2;
    this.height = 9;
    this.projectile = "redlaser";
    this.projectile2 = "purplelaser";
}

function lm14(parent) {

    this.name = "LM - 14";
    gun.call(this, parent);
    this.image = gun1pic;
    this.rof = 6;
    this.ammo = 16;
    this.ammomax = 16;
    this.ammores = 80;
    this.width = 25;
    this.reloadtimermax = 60;
    this.shootcooldown = 60 / this.rof;
    //this.ammo = "inf";
    this.latch = 1;
    this.image1 = lm14pic;
    this.height = 5;
    this.projectile = "redlaserpiercing";
    this.projectile2 = "purplelaserpiercing";

}

function guntype3(parent) {

    this.name = "drone minigun"
    gun.call(this, parent);
    this.ammo = 200000;
    this.ammores = 100;
    this.ammomax = 200000;
    this.image1 = gun2;
    this.height = 9;
    this.width = 25;
    this.rof = 1.4;//(rounds a second)
    this.shootcooldown = 60 / this.rof;
    this.projectile = "redlaserweak";
}

function acidgun(parent) {

    this.name = "acid gun"
    gun.call(this, parent);
    this.ammo = 50;
    this.ammores = 300;
    this.ammomax = 50;
    this.height = 9;
    this.width = 25;
    this.image = acidgun1pic;
    this.rof = 20;//(rounds a second)
    this.shootcooldown = 60 / this.rof;
    this.projectile = "acid";
    this.image1 = acidgun1;
    this.reloadtimermax = 150;
    this.projectile2 = "acid2";
    this.rof2 = 25;
    this.shootcooldown2 = 60 / this.rof2;
}





guntype1.prototype = Object.create(gun.prototype);
guntype2.prototype = Object.create(gun.prototype);
guntype3.prototype = Object.create(gun.prototype);
acidgun.prototype = Object.create(gun.prototype);
lm14.prototype = Object.create(gun.prototype);

