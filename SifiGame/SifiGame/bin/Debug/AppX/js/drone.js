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
    this.draw = function () {
        ctx.drawImage(drone1img, this.frame1 * 9, 0, 9, 8, this.x, this.y, 9, 8);
        this.frame1 = this.frame1 + 1;
        if (this.frame1 == 4) {
            this.frame1 = 0;
        }
    }
    this.calcNewPosition = function (player) {
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
        this.weapons[this.weaponinuse].shoot(playercollection.array[currentmini].x, playercollection.array[currentmini].y);
    }



        
    }
}