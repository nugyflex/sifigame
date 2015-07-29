function projectile(pindex,type) {
    this.x = 10000;
    this.y = 10000;
    this.xvel = 0;
    this.yvel = 0;
    this.theta = 0;
    this.visible = 1;
    this.pindex = pindex;
    this.armourpiercing = 0;
    this.canexplode = false;
    this.hitoffsetx = 0;
    this.hitoffsety = 0;
    this.hitheight = 10;
    this.hitwidth = 10;
    this.hitarray = [];

    x11 = 0;
    y11 = 0;
    x22 = 0;
    y22 = 0;
    this.addhitarray = function(index)
    {
        
        this.hitarray[this.hitarray.length] = index;

    }
    this.checkifinarray = function (index) {
        for (arraycounter = 0; arraycounter < this.hitarray.length ; arraycounter++) {

            if (this.hitarray[arraycounter] == index) {
                return 1;
            }

        }
        return 0;
    }

    this.launch = function(x1, y1, x2, y2) {

        this.x = x1;
        this.y = y1;

        this.theta = Math.atan(-(y2 - y1) / (x2 - x1));



        if (x2 > x1) {
            this.yvel = Math.sin(this.theta) * -this.vel;
            this.xvel = Math.cos(this.theta) * this.vel;
        }
        else {
            this.yvel = Math.sin(this.theta) * this.vel;
            this.xvel = Math.cos(this.theta) * -this.vel;
        }

        if (x2 < x1) {
            //this.xvel = this.xvel * -1;
        }

        this.x11 = x1;
        this.y11 = y1;
        this.x22 = x2;
        this.y22 = y2;



    }

    this.calcnewposition = function () {
        this.x = this.x + this.xvel;
        this.y = this.y + this.yvel;
        this.drawtimer++;
        if (this.drawtimer>3)
        {
            this.visible == 1;
        }
    }

}

function redlaserpiercing(pindex, type)
{
    projectile.call(this, pindex, type);


    this.width = 10;
    this.height = 10;
    this.vel = 8;
    this.visible = 1;
    this.damagemultiplier = 5;
    this.image = bulletsheet1;
    this.armourpiercing = 1;
    this.draw = function () {

        if (this.visible == 1) {
            ctx.save();


            ctx.translate(this.x, this.y);

            ctx.rotate(Math.atan((this.y22 - this.y11) / (this.x22 - this.x11)));

            //ctx.fillStyle = "rgb(200,100,50)";
            //ctx.fillRect(0, 0, 10, 3);
            ctx.drawImage(this.image, 0, 0, 10, 3, 0, 0, 10, 3);

            ctx.restore();


        }
        if (game2.debugmode == 1) {
            ctx.globalAlpha = 0.5;
            this.colour = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }


}

function redlaser(pindex, type)
{
    projectile.call(this, pindex, type);


    this.width = 10;
    this.height = 10;
    this.vel = 8;
    this.visible = 1;
    this.damagemultiplier = 3.5;
    this.image = bulletsheet1;
    this.armourpiercing = 0;
    this.draw = function () {

        if (this.visible == 1) {
            ctx.save();


            ctx.translate(this.x, this.y);

            ctx.rotate(Math.atan((this.y22 - this.y11) / (this.x22 - this.x11)));

            //ctx.fillStyle = "rgb(200,100,50)";
            //ctx.fillRect(0, 0, 10, 3);
            ctx.drawImage(this.image, 0, 0, 10, 3, 0, 0, 10, 3);

            ctx.restore();


        }
        if (game2.debugmode == 1) {
            ctx.globalAlpha = 0.5;
            this.colour = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }


}
function purplelaserpiercing(pindex, type) {
    projectile.call(this, pindex, type);


    this.width = 10;
    this.height = 10;
    this.vel = 12;
    this.visible = 1;
    this.damagemultiplier = 6;
    this.image = bulletsheet4;
    this.armourpiercing = 1;
    this.draw = function () {

        if (this.visible == 1) {
            ctx.save();


            ctx.translate(this.x, this.y);

            ctx.rotate(Math.atan((this.y22 - this.y11) / (this.x22 - this.x11)));

            //ctx.fillStyle = "rgb(200,100,50)";
            //ctx.fillRect(0, 0, 10, 3);
            ctx.drawImage(this.image, 0, 0, 10, 3, 0, 0, 10, 3);

            ctx.restore();


        }
        if (game2.debugmode == 1) {
            ctx.globalAlpha = 0.5;
            this.colour = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }


}

function purplelaserexplosive(pindex, type) {
    projectile.call(this, pindex, type);


    this.width = 20;
    this.height = 20;
    this.vel = 12;
    this.damagemultiplier = 1;
    this.image = bulletsheet3;
    this.canexplode = true;
    this.radius = 100;
    this.draw = function () {
        if (this.visible == 1) {


            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(Math.atan((this.y22 - this.y11) / (this.x22 - this.x11)));
            ctx.drawImage(this.image, 0, 0, 10, 4, 0, 0, 10, 4);
            ctx.restore();


        }
        if (game2.debugmode == 1) {
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }
    this.explode = function()
    {
        explosioncollection.add(this.x, this.y, this.radius);
        for (playercounter = 0; playercounter < playercollection.count(); playercounter++)
        {
            if (collisiondetection1.collisiondetectionradius(this, playercollection.array[playercounter]) && playercollection.array[playercounter].type == "enemy")
            {
                playercollection.array[playercounter].health = playercollection.array[playercounter].health - ((1 / collisiondetection1.finddistance(this, playercollection.array[playercounter])) * this.radius * 2.5);
                game2.addmoney(playercollection.array[projectilecollection.array[projectilecounter].pindex].index, 0.5);
                if ((Math.random() * 100) + 1 > 50)
                {
                    var velmultiplyertestx = -1;
                }
                else
                {
                    var velmultiplyertestx = 1;
                }
                if ((Math.random() * 100) + 1 > 50) {
                    var velmultiplyertesty = -1;
                }
                else {
                    var velmultiplyertesty = 1;
                }
                
                floating_numbercollection.add(playercollection.array[playercounter].x, playercollection.array[playercounter].y, ((Math.random() * 2) + 0.1) * velmultiplyertestx, ((Math.random() * 2) + 0.1) * velmultiplyertesty, Math.floor((1 / collisiondetection1.finddistance(this, playercollection.array[playercounter])) * this.radius * 2.5), 12, "orange random")
            }
        }
        for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {
            if (collisiondetection1.collisiondetectionradius(this, platformcollection.array[platformcounter])&&platformcollection.array[platformcounter].breakable) {
                platformcollection.array[platformcounter].health = platformcollection.array[platformcounter].health - ((1 / collisiondetection1.finddistance(this, platformcollection.array[platformcounter])) * this.radius * 2.5*4);
            }
        }
    }


}

function purplelaser(pindex, type) {
    projectile.call(this, pindex, type);


    this.width = 10;
    this.height = 10;
    this.vel = 10;
    this.visible = 1;
    this.damagemultiplier = 12;
    this.image = bulletsheet4;
    this.armourpiercing = 0;

    this.draw = function () {

        if (this.visible == 1) {
            ctx.save();


            ctx.translate(this.x, this.y);

            ctx.rotate(Math.atan((this.y22 - this.y11) / (this.x22 - this.x11)));

            //ctx.fillStyle = "rgb(200,100,50)";
            //ctx.fillRect(0, 0, 10, 3);
            ctx.drawImage(this.image, 0, 0, 10, 3, 0, 0, 10, 3);

            ctx.restore();


        }
        if (game2.debugmode == 1) {
            ctx.globalAlpha = 0.5;
            this.colour = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }


}

function redlaserweak(pindex, type)
{
    projectile.call(this, pindex, type);


    this.width = 10;
    this.height = 10;
    this.vel = 10;
    this.visible = 1;
    this.damagemultiplier = 2.5;
    this.image = bulletsheet1;
    this.armourpiercing = 0;
    this.draw = function () {
        if (this.visible == 1) {


            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(Math.atan((this.y22 - this.y11) / (this.x22 - this.x11)));

            //ctx.fillStyle = "rgb(200,100,50)";
            //ctx.fillRect(0, 0, 10, 3);
            ctx.drawImage(this.image, 0, 0, 10, 3, 0, 0, 10, 3);

            ctx.restore();


        }
        if (game2.debugmode == 1) {
            ctx.globalAlpha = 0.5;
            this.colour = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }


}


function greenlaser(pindex, type) {
    projectile.call(this, pindex, type);


    this.width = 10;
    this.height = 10;
    this.vel = 8;
    this.damagemultiplier = 5;
    this.image = bulletsheet2
    this.armourpiercing = 1;
    this.draw = function () {
        if (this.visible == 1) {


            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(Math.atan((this.y22 - this.y11) / (this.x22 - this.x11)));
            ctx.drawImage(this.image, 0, 0, 10, 3, 0, 0, 10, 3);
            ctx.restore();


        }
        if (game2.debugmode == 1) {
            ctx.globalAlpha = 0.5;
            this.colour = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }


}

function bomb(pindex, type) {
    projectile.call(this, pindex, type);


    this.width = 20;
    this.height = 20;
    this.vel = 12;
    this.damagemultiplier = 1;
    this.image = bulletsheet3;
    this.canexplode = true;
    this.radius = 100;
    this.draw = function () {
        if (this.visible == 1) {


            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(Math.atan((this.y22 - this.y11) / (this.x22 - this.x11)));
            ctx.drawImage(this.image, 0, 0, 10, 4, 0, 0, 10, 4);
            ctx.restore();


        }
        if (game2.debugmode == 1) {
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "rgb(200,40,40)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }
    this.explode = function()
    {
        explosioncollection.add(this.x, this.y, this.radius);
        for (playercounter = 0; playercounter < playercollection.count(); playercounter++)
        {
            if (collisiondetection1.collisiondetectionradius(this, playercollection.array[playercounter]) && playercollection.array[playercounter].type == "enemy")
            {
                playercollection.array[playercounter].health = playercollection.array[playercounter].health - ((1 / collisiondetection1.finddistance(this, playercollection.array[playercounter])) * this.radius * 2.5);
                game2.addmoney(playercollection.array[projectilecollection.array[projectilecounter].pindex].index, 0.5);
                if ((Math.random() * 100) + 1 > 50)
                {
                    var velmultiplyertestx = -1;
                }
                else
                {
                    var velmultiplyertestx = 1;
                }
                if ((Math.random() * 100) + 1 > 50) {
                    var velmultiplyertesty = -1;
                }
                else {
                    var velmultiplyertesty = 1;
                }
                
                floating_numbercollection.add(playercollection.array[playercounter].x, playercollection.array[playercounter].y, ((Math.random() * 2) + 0.1) * velmultiplyertestx, ((Math.random() * 2) + 0.1) * velmultiplyertesty, Math.floor((1 / collisiondetection1.finddistance(this, playercollection.array[playercounter])) * this.radius * 2.5), 12, "orange random")
            }
        }
        for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {
            if (collisiondetection1.collisiondetectionradius(this, platformcollection.array[platformcounter])&&platformcollection.array[platformcounter].breakable) {
                platformcollection.array[platformcounter].health = platformcollection.array[platformcounter].health - ((1 / collisiondetection1.finddistance(this, platformcollection.array[platformcounter])) * this.radius * 2.5*4);
            }
        }
    }


}

purplelaserexplosive.prototype = Object.create(projectile.prototype);
purplelaserpiercing.prototype = Object.create(projectile.prototype);
purplelaser.prototype = Object.create(projectile.prototype);
redlaser.prototype = Object.create(projectile.prototype);
redlaserpiercing.prototype = Object.create(projectile.prototype);
redlaserweak.prototype = Object.create(projectile.prototype);
greenlaser.prototype = Object.create(projectile.prototype);
bomb.prototype = Object.create(projectile.prototype);