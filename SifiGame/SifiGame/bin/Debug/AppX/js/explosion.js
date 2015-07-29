function explosion(x, y, radius, index) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.index = index;
    this.height = this.radius;
    this.frame = 0;
    this.dc = 0;


    this.draw = function () {
        //ctx.fillStyle = "rgb(50,255,50)"
        //ctx.fillRect(this.x, this.y, 10.10)
        ctx.drawImage(explosion1, 0, this.frame * 100, 100, 100, this.x - this.radius / 2, this.y - this.radius / 2, radius, radius)
        if (this.dc == 1) {
            this.frame++;
        }
        if (this.frame == 3)
        {
            explosioncollection.delete(this.index);
        }
        if (this.dc == 0)
        {
            this.dc++;

        }
        else
        {
            this.dc = this.dc - 1;
        }
    }

}
