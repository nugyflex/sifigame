function ammocontainer(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = 24;
    this.height = 17;
    this.interactontouch = true;
    this.deleteafterinteract = true;
    this.ammo = 100;
    this.used = false;
    this.draw = function()
    {
        ctx.drawImage(ammocrate, this.x, this.y);
    }
    this.interact = function(player)
    {
        if (weaponcollection.array[player.weaponinuse].ammo !== "inf")
        {
            weaponcollection.array[player.weaponinuse].ammores = weaponcollection.array[player.weaponinuse].ammores + this.ammo;
            this.used = true;
        }
    }
    
}