function platform(index, x, y, width, height, type, ax, ay, bx, by, image, price) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.xvel = 1.8;
    this.yvel = 1.8;
    this.ax1 = ax;
    this.ay1 = ay;
    this.bx1 = bx;
    this.by1 = by;
    this.colour = "rgb(65,65,75)";
    this.health = 50;
    this.index = index;
    this.breakable = false;
    this.removable = false;
    this.locked = 1;
    this.image = image;
    this.theta = 1;
    this.v1_mv;
    this.v1_bv;
    this.v2_mv;
    this.v2_bv;
    this.v3_mv;
    this.v3_bv;
    this.v4_mv;
    this.v4_bv;
    this.v1_m = function()
    {
        this.v1_mv = Math.tan(this.theta)
        return this.v1_mv;
    }
    this.v1_b = function () {
        this.v1_bv = this.y - (this.v1_m() * this.x)
        return this.v1_bv;
    }
    this.v2_m = function()
    {
        this.v2_mv = -1 / this.v1_m();
        return this.v2_mv;
    }
    this.v2_b = function () {
        this.v2_bv = (this.y + (Math.cos(this.theta) * this.width)) - (this.v4_m() * (this.x + (Math.sin(this.theta) * this.width)));
        return this.v2_bv;
    }
    this.v3_m = function () {
        this.v3_mv = this.v1_m();
        return this.v3_mv;
    }
    this.v3_b = function () {
        this.v3_bv = (this.y + (Math.cos(this.theta) * this.height)) - (this.v1_m() * (this.x + (Math.sin(this.theta) * this.height)));
        return this.v3_bv;
    }
    this.v4_m = function () {
        this.v4_mv = (-1 / this.v1_m());
        return this.v4_mv;
    }
    this.v4_b = function () {
        this.v4_bv = this.y - (this.v2_m() * this.x);
        return this.v4_bv;
    }
    
    

    //a function called in the main loop, it draws the platform
    this.draw = function () {
        /*if (this.width < playercollection.array[0].width) {
            this.width = playercollection.array[0].width + 2;
        }
        if (this.height < playercollection.array[0].height) {
            this.height = playercollection.array[0].height + 2;
        }*/
        ctx.fillStyle = this.colour;

        //ctx.fillRect(this.x, this.y, this.width, this.height);
        switch (this.type)
        {
                
            case PLATFORMTYPE_GREYBOX:
                ctx.save();
                ctx.translate(this.x, this.y);
                //ctx.rotate(this.theta);
                ctx.fillStyle = this.colour;
                ctx.fillRect(0, 0, this.width, this.height);
                ctx.restore();

                break
                
            case 16:
                ctx.drawImage(wallbaseleft, 0, 0, this.width, 24, this.x, this.y + this.height - 24, this.width, 24);
                ctx.drawImage(wallbaseright, this.x + this.width - 2, this.y + this.height - 24);
                ctx.drawImage(walltopmain, 0, 0, this.width, this.height, this.x, this.y - 24, this.width, this.height);
                ctx.drawImage(walltopright, 0, 0, 2, this.height, this.x+this.width-2, this.y - 24, 2, this.height);

                //ctx.drawImage(floor1, 0, 0, this.width, 1000, this.x, this.y, this.width, 1000);

                break;

        case PLATFORMTYPE_PILLAR1:
            this.width = 40;
            this.height = 26;
            ctx.drawImage(wall1, this.x, this.y - (100 - this.height));

            break;

        case PLATFORMTYPE_SMALL_BOX:
            this.width = 40;
            this.height = 26;
            ctx.drawImage(box1, this.x, this.y - (49 - this.height));
            break;
            
        case PLATFORMTYPE_HALFARCH_LEFT:
            this.width = 17;
            this.height = 12;
            ctx.drawImage(ruins1, this.x - 1, this.y - (90 - this.height));
            break;

        case PLATFORMTYPE_HALFARCH_RIGHT:
            this.width = 17;
            this.height = 12;
            ctx.drawImage(ruins2, this.x - 42, this.y - (90 - this.height));
            break;

        case PLATFORMTYPE_HOLEWALL:
            this.width = 100;
            this.height = 13;
            ctx.drawImage(holewall1, this.x, this.y - (70-this.height));
            break;
    
        case PLATFORMTYPE_PILLAR1_MOVING:
            this.width = 40;
            this.height = 26;
            ctx.drawImage(wall1, this.x, this.y - (100 - this.height));

            break;

			case 11:
			this.height = 50;
			this.width = 20;
			this.breakable = true;
			ctx.drawImage(barricade1, this.x, this.y - 14);
			if (this.health<50)
			{
            ctx.drawImage(barricade4, 0, 0, 20, 64, this.x, this.y-14, 20, 64);
			if (this.health<30)
			{
			     ctx.drawImage(barricade4, 0, 64, 20, 64, this.x, this.y-14, 20, 64);
			     if (this.health < 10)
			{
				 ctx.drawImage(barricade4, 0, 128, 20, 64, this.x, this.y-14, 20, 64);	
			}
			}
			}
			else{
			ctx.drawImage(barricade1, this.x, this.y - 14);			
			}
			break;
			case 12:
			this.height = 18;
			this.width = 51;
			this.breakable = true;

			if (this.health < 50) {
			    ctx.drawImage(barricade3, 0, 0, 51, 31, this.x, this.y - 13, 51, 31);
			    if
			(this.health < 30) {
			        ctx.drawImage(barricade3, 0, 31, 51, 31, this.x, this.y - 13, 51, 31);
			        if (this.health < 10)
			        {
			            ctx.drawImage(barricade3, 0, 62, 51, 31, this.x, this.y - 13, 51, 31);
			        }
			    }
			}
			else {
			    ctx.drawImage(barricade2, this.x, this.y - 9);
			}
			break;
            case PLATFORMTYPE_DOOR:
                this.removable = true;
                this.price = price;
                this.width = 100;
                this.height = 13;
                this.messagetext = "'E' to open this door";
                ctx.fillStyle = this.colour;
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.drawImage(door1, this.x + 15, this.y - 57)
                break;

            case PLATFORMTYPE_DOORWAY:
                this.width = 15;
                this.height = 13;
                ctx.drawImage(doorway1, this.x, this.y - 57)
                if (this.locked == 1)
                {
                    ctx.drawImage(doorway2, this.x, this.y - 57)
                }
                break;


            case PLATFORMTYPE_IMAGE:
                this.width = 0;
                this.height = 0
                break;


        
        }
        if (game2.debugmode == 1)
        {
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }

    }
    this.execute = function()
    {
        if (this.health < 1) {
            platformcollection.delete(this.index);
        }

        if (this.type == PLATFORMTYPE_PILLAR1_MOVING)
        {

        if (this.x > this.bx1 && this.xvel > 0)
        {
            this.xvel = this.xvel * -1;
        }
        if (this.y > this.by1 && this.yvel > 0) {
            this.yvel = this.yvel * -1;
        }
        if (this.x < this.ax1 && this.xvel < 0) {
            this.xvel = this.xvel * -1;
        }
        if (this.y < this.ay1 && this.yvel < 0) {
            this.yvel = this.yvel * -1;
        }
        if (this.y > this.by1-2&& this.y < this.by1+2 && this.y > this.ay1 - 2 && this.y < this.ay1+2)
        {
            this.yvel = 0;
        }
        if (this.x > this.bx1 - 2 && this.x < this.bx1 + 2 && this.x > this.ax1 - 2 && this.x < this.ax1 + 2) {
            this.xvel = 0;
        }
        this.x = this.x + this.xvel;
        this.y = this.y + this.yvel;
        }
    }
}