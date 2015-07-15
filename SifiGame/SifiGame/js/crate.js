function crate(x, y, width, height, type, ax, ay, bx, by) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 15;
    this.type = type;
    this.xvel = 0;
    this.yvel = 0;
    this.ax1 = ax;
    this.ay1 = ay;
    this.bx1 = bx;
    this.by1 = by;
    this.colour = "rgb(65,65,75)";
	this.health = 100;
    //a function called in the main loop, it draws the platform
    this.draw = function () {


            ctx.drawImage(box1, this.x, this.y - 15);
            break;
			
			this.x = this.x + this.xvel;
			this.y = this.y + this.yvel;
			
    }

    }
}