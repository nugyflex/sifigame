function camera(player,game)
{
    this.theta;
    this.vel = 2;
    this.center = function () {
        if (player.dead == 0 && player.falling == 0 && player.type == "player") {
            this.theta = Math.atan(-(playercollection.array[0].y - game.canvastranslatey) / ((playercollection.array[0].x - cwidth / 2) - game.canvastranslatex));


            if (game.canvastranslatex < playercollection.array[0].x - cwidth / 2) {
                game.canvastranslatex = game.canvastranslatex + 2;
            }
            if (game.canvastranslatex > playercollection.array[0].x - cwidth / 2) {
                game.canvastranslatex = game.canvastranslatex - 2;
            }
            if (game.canvastranslatey < playercollection.array[0].y - cheight / 2) {
                game.canvastranslatey = game.canvastranslatey + 2;
            }
            if (game.canvastranslatey > playercollection.array[0].y - cheight / 2) {
                game.canvastranslatey = game.canvastranslatey - 2;
            }
        }
            ctx.translate(game.canvastranslatex * -1, game.canvastranslatey * -1);
        

    }
    
}