function floating_number(x,y,xvel,yvel,string, index, size, colour)
{
    this.x = x;
    this.y = y;
    this.xvel = xvel;
    this.yvel = yvel;
    this.string = string;
    this.alphacounter = 1;
    this.index = index;
    this.size = size
    this.colour = colour;
    if (this.colour == "orange random")
    {
        var colpick = Math.floor((Math.random() * 4) + 1);
        console.log((Math.random() * 4) + 1);
        switch (colpick) {
            case 1:
                this.colour = "rgb(200, 75, 75)";
                break;
            case 2:
                this.colour = "orange";
                break;
            case 3:
                this.colour = "yellow";
                break;
            case 4:
                this.colour = "white";
                break;
        }

    }
    this.draw = function()
    {
        if (this.alphacounter > 0) {
            ctx.fillStyle = this.colour;
            ctx.font = this.size + "px SpacedOut";
            ctx.globalAlpha = this.alphacounter;
            ctx.fillText(this.string, this.x, this.y);
            ctx.globalAlpha = 1;
        this.x = this.x + this.xvel;
        this.y = this.y + this.yvel;
        this.alphacounter = this.alphacounter - 0.03;

            
        }
        else
        {
            if (this.alphacounter < -10) {
                floating_numbercollection.delete(this.index);
            }

        }

    }

}