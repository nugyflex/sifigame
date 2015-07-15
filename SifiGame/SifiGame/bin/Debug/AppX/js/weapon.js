function weapon(x, y, vel, index) {
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

weapon1 = new weapon(0,0,0,0);