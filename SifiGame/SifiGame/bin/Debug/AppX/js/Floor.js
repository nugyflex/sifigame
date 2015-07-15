function floor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.createpattern = function()
    {


    }
    //a function called in the main loop, it draws the platform
    this.draw = function () {
        ctx.fillStyle = "rgb(65,65,75)"
        //ctx.fillRect(this.x + (this.width / 2), this.y + this.height - 10, 10, 10000);
        if (this.width < 1000 && this.height < 1000) {
            ctx.drawImage(floor1, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        else
        {
            if (this.width < 1000) {
                ctx.drawImage(floor1, 0, 0, this.width, 1000, this.x, this.y, this.width, 1000);
            }
            if (this.height < 1000) {
                ctx.drawImage(floor1, 0, 0, 1000, this.height, this.x, this.y, 1000, this.height);
            }
            if (this.height > 1000&&this.width > 1000) {
                ctx.drawImage(floor1, 0, 0, 1000, 1000, this.x, this.y, 1000, 1000);
            }
            if (this.height ==1000 && this.width == 1000) {
                ctx.drawImage(floor1, 0, 0, 1000, 1000, this.x, this.y, 1000, 1000);
            }
        }
 
        //ctx.fillStyle = "rgb(45,45,55)";
        //ctx.fillRect(this.x, this.y+ this.height, this.width, 20);

        ctx.drawImage(floorBase, 0, 0, this.width, 20, this.x, this.y + this.height, this.width, 20);
    }
}