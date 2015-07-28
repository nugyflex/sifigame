function camera(player,game)
{
    this.theta;
    this.x = 0;
    this.y = 0;
    this.vel = 2.2;
    this.center = function (player) {
        if (player.dead == 0 && player.falling == 0 && player.type == "player") {
            this.theta = Math.atan(-(playercollection.array[0].y - game.canvastranslatey) / ((playercollection.array[0].x - cwidth / 2) - game.canvastranslatex));




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
        //adding the velosity to the x/y position 
            
        this.x = this.x + this.xvel;

        this.y = this.y + this.yvel;
        }
        else
        {
            this.xvel = 0;
            this.yvel = 0;
        }
    
        
        game.canvastranslatex =this.x-cwidth/2;
        game.canvastranslatey = this.y-cheight/2;
        mouse.Y = mouse.Y + this.yvel;
        mouse.X = mouse.X + this.xvel;        
        ctx.translate(game.canvastranslatex * -1, game.canvastranslatey * -1);
        
        
        
        


        
    
    }
    
}