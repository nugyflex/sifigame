function drone(x, y, index) {
    this.x = x;
    this.y = y;;
    this.xvel = 0;
    this.yvel = 0;
    this.frame1 = 0;
    this.width = 16;
    this.height = 38;
    this.dead = 0;
    this.type = "drone"
    this.falling = 0;
    this.weapons = [];
    this.weaponinuse = 0;
    this.index = index;
    this.money = 0;
    this.parentindex = 0;
    this.closestenemyx;
        this.closestenemyy;
    this.draw = function () {
        ctx.drawImage(drone1img, this.frame1 * 9, 0, 9, 8, this.x, this.y, 9, 8);
        this.frame1 = this.frame1 + 1;
        if (this.frame1 == 4) {
            this.frame1 = 0;
        }
                ctx.save();
        ctx.translate(this.x + 8, this.y+16);
        if (this.closestenemyx < this.x) {
            ctx.rotate((Math.atan((this.closestenemyy - (this.y+16)) / (this.closestenemyx - this.x))));
            ctx.scale(-1, 1);
        }
        else {
            ctx.rotate(Math.atan((this.closestenemyy - (this.y+16)) / (this.closestenemyx - this.x)));
        }



        //ctx.fillRect(0, -4, 25, 9);
        ctx.drawImage(this.weapons[this.weaponinuse].image1, 0, -1 * this.weapons[this.weaponinuse].height/2);
        ctx.restore();
    }
    this.calcNewPosition = function (player) {
        player.y = player.y - 10;
        if (this.x < player.x) {
            this.xvel = (player.x - this.x) / 25;
        }
        if (this.x > player.x) {
            this.xvel = (this.x - player.x) / -25;
        }
        if (this.y < player.y) {
            this.yvel = ((player.y - 10) - this.y) / 15;
        }
        if (this.y > player.y) {
            this.yvel = (this.y - (player.y - 10)) / -15;
        }
        //adding the velosity to the drones position 
        this.x = this.x + this.xvel;

        this.y = this.y + this.yvel;
        player.y = player.y + 10;
    }
    this.ai = function()
    {
        if (playercollection.array.length>2)
        {
        var currentmin;
        var currentmini;
        for (i = 0; i < playercollection.array.length  ; i++) {

            currentmin = 1000000000;
            currentmini = -1

            for (enemycounter = 0; enemycounter < playercollection.array.length ; enemycounter++) {
                if (collisiondetection1.finddistance(this, playercollection.array[enemycounter]) < currentmin&&playercollection.array[enemycounter].type == "enemy") {
                    currentmin = collisiondetection1.finddistance(this, playercollection.array[enemycounter]);
                    currentmini = enemycounter;

                }


            }
        }
        if (keypressed.mouse == 1) {

        }
        else {
            this.weapons[this.weaponinuse].latched = 0;
        }
        if (collisiondetection1.finddistance(this, playercollection.array[currentmini]) < 300) {
            //this.weapons[this.weaponinuse].shoot(playercollection.array[currentmini].x, playercollection.array[currentmini].y, 4, 16);
        }
            //console.log(playercollection.array[currentmini].x + " , " + playercollection.array[currentmini].y);
            this.weapons[this.weaponinuse].timer();
                this.closestenemyx = playercollection.array[currentmini].x;
                this.closestenemyy = playercollection.array[currentmini].y;

    }



        
    }
}