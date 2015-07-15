function floating_number(x,y,xvel,yvel,string, index)
{
    this.x = x;
    this.y = y;
    this.xvel = xvel;
    this.yvel = yvel;
    this.string = string;
    this.alphacounter = 1;
    this.index = index;
    this.draw = function()
    {
        if (this.alphacounter > 0) {
            ctx.fillStyle = "rgb(200,75,75)";
            ctx.font = "20px SpacedOut";
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