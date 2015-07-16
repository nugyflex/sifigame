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

    this.latch = 0;
    this.rof = 3;//(rounds a second)
    this.shootcooldown = 33.3 / this.rof;
    this.projectile = "greenlaser";
    this.shootcooldowntimer = -1;
    this.shoot = function ()
    {
        if (this.latch == 0) {
            if (this.shootcooldowntimer < 0) {
                shoot(parent, mouse.X, mouse.Y, parent.index, this.projectile);
                this.shootcooldowntimer = this.shootcooldown;
            }
        }


    }
    this.timer = function()
    {
        this.shootcooldowntimer = this.shootcooldowntimer - 1;
    }
}

function gun3(parent) {

    this.latch = 1;
    this.latched = 1;
    this.rof = 10;//(rounds a second)
    this.shootcooldown = 33.3 / this.rof;
    this.projectile = "redlaser";
    this.shootcooldowntimer = -1;
    this.shoot = function () {
        if (this.latch == 0)
            {
            if (this.shootcooldowntimer < 0)
            {
                shoot(parent, mouse.X, mouse.Y, parent.index, this.projectile);
                this.shootcooldowntimer = this.shootcooldown;
            }
        }
        else
        {
            if (this.latched == 0)
            {
                shoot(parent, mouse.X, mouse.Y, parent.index, this.projectile);
            }
            this.latched = 1;
        }


    }
    this.timer = function () {
        this.shootcooldowntimer = this.shootcooldowntimer - 1;
    }
}

