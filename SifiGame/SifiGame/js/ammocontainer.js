function ammocontainer(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = 24;
    this.height = 17;
    this.interactontouch = true;
    this.deleteafterinteract = true;
    this.ammo = 100;
    this.deleteaftertime = false;
    this.static = true;
    this.falling = 0;
    this.poketointeract = false;
    this.used = false;
    this.draw = function()
    {
        ctx.drawImage(ammocrate, this.x, this.y);
    }
    this.interact = function(player)
    {
        if (player.type == "player" && weaponcollection.array[player.weaponinuse].ammo !== "inf")
        {
            player.weapons[player.weaponinuse].ammores = player.weapons[player.weaponinuse].ammores + this.ammo;
            this.used = true;
        }
    }
    
}
function acid(type, x, y, xvel, yvel) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.xvel = xvel;
    this.yvel = yvel;
    this.width = Math.floor((Math.random() * 6) + 2);;
    this.height = this.width;
    this.interactontouch = true;
    this.deleteafterinteract = false;
    this.ammo = 100;
    this.damage = 0.5;
    this.vel = 4;
    this.poketointeract = false;
    this.deleteaftertime = true;
    this.used = false;
    this.static = false;
    this.theta;
    this.velmodify = 0.05;
    this.timer = 0;
    this.timermax = 600;
    this.falling = 0;
    this.draw = function () {
        ctx.fillStyle = "rgb(70, 150, 60)";
        ctx.fillRect(this.x, this.y, this.width, this.height + 2)
        ctx.fillStyle = "rgb(130, 220, 115)";
        ctx.fillRect(this.x, this.y, this.width, this.height)

    }

    this.interact = function (player) {
        if (player.type == "enemy") {
            player.poisonedtimer = 100;
            player.slowedtimer = 100;
            if (this.vel > 0) {
                player.health = player.health - 0.13;
            }
        }
    }
    this.move = function()
    {

        this.x = this.x + this.xvel;
        this.y = this.y + this.yvel;
        if (this.xvel>0)
        {
            this.xvel = this.xvel - this.velmodify;
        }
        if (this.xvel < 0) {
            this.xvel = this.xvel + this.velmodify;
        }
        if (this.yvel > 0) {
            this.yvel = this.yvel - this.velmodify;
        }
        if (this.yvel < 0) {
            this.yvel = this.yvel + this.velmodify;
        }
        if (this.xvel > -0.5 && this.xvel < 0.5) {
            this.xvel = 0;
        }
        if (this.yvel > -0.5 && this.yvel < 0.5) {
            this.yvel = 0;
        }
        this.timer++;
        if (this.falling == 1)
        {
            this.yvel = 6;
        }
        
    }


    this.launch = function (x1, y1, x2, y2) {
        this.vel = (Math.random() * 5) + 1;
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



    }

}



function buystation(guntype, x, y, price) {
    this.x = x;
    this.y = y;
    this.interactontouch = true;
    this.guntype = guntype;
    this.deleteafterinteract = true;
    this.deleteaftertime = false;
    this.used = false;
    this.static = true;
    this.price = price;
    this.falling = 0;
    weaponcollection.add(this.guntype, player);
    this.weaponindex = weaponcollection.array.length - 1;
    this.width = weaponcollection.array[this.weaponindex].width;
    this.height = weaponcollection.array[this.weaponindex].height;
    this.poketointeract = true;
    this.buyable = true;
    this.messagetext = "'E' to buy " + weaponcollection.array[this.weaponindex].name;
    this.interact = function(player)
    {
        if (player.type == "player") {
            player.weapons[player.weapons.length] = weaponcollection.array[this.weaponindex];
            weaponcollection.array[this.weaponindex].parent = player;
            this.used = true;
        }
    }
    this.draw = function () {
        ctx.fillStyle = "rgb(40, 40, 40)";
        ctx.fillRect(this.x - 2, this.y - 2, weaponcollection.array[this.weaponindex].width + 4, weaponcollection.array[this.weaponindex].height + 4)
        ctx.fillStyle = "rgb(100, 100, 100)";
        ctx.fillRect(this.x, this.y, weaponcollection.array[this.weaponindex].width, weaponcollection.array[this.weaponindex].height)
        ctx.drawImage(weaponcollection.array[this.weaponindex].image1, this.x, this.y);
        /*
        var imageData = ctx.getImageData(this.x, this.y, weaponcollection.array[this.weaponindex].image1.width, weaponcollection.array[this.weaponindex].image1.height);
        var data = imageData.data;

        for(var i = 0; i < data.length; i += 4) {
            var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
            // red
            data[i] = brightness;
            // green
            data[i + 1] = brightness;
            // blue
            data[i + 2] = brightness;
        }

        // overwrite original image
        ctx.putImageData(imageData, this.x, this.y);*/
    }
        //ctx.drawImage(weaponcollection.array[this.weaponindex].image1, this.x, this.y);


    
}

function upgradestation(x, y, price) {
    this.x = x;
    this.y = y;
    this.interactontouch = true;
    this.deleteafterinteract = false;
    this.deleteaftertime = false;
    this.used = false;
    this.static = true;
    this.price = price;
    this.falling = 0;
    this.width = 25;
    this.height = 9
    this.poketointeract = true;
    this.buyable = true;
    this.messagetext = "'E' to buy upgrade weapon";
    this.interact = function (player) {
        if (player.type == "player") {
            player.weapons[player.weaponinuse].upgraded = true;
            this.used = true;
        }
    }
    this.draw = function () {
        ctx.fillStyle = "rgb(40, 40, 40)";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }



}



//TESTING, NOT A REAL CAR
/*
function Car(model, weight, lenth) {
    this.wheels = 4;
    thia.model = model;

    this.drive = function () {
        //this contins thew driving physics


    }

}

var Car_Mun = new Car("Hilux", 1900, 4.1)
var Car_Dad = new Car("BMW", 2100, 4.0)

Car_Mum.drive()



var Car_Mum = {
    wheels : 4,
    weight=1900,
    length=4.1.
    model : model;

Drive(){
    //drive physics

}
}


var Car_Dad = {
    wheels : 4,
    weight=1900,
    length=4.1.
        model : model;

Drive(){
    //drive physics

}
}*/






function medkit(x, y) {
    this.x = x;
    this.y = y;
    this.interactontouch = true;
    this.deleteafterinteract = true;
    this.deleteaftertime = false;
    this.used = false;
    this.poketointeract = false;
    this.static = true;
    this.falling = 0;
    this.width = 7;
    this.height = 9;
    this.health = 15;
    this.interact = function (player) {
        if (player.type == "player") {
            if (player.health < player.healthmax) {
                player.health = player.health + this.health;
                if (player.health > player.healthmax)
                {
                    player.health = player.healthmax;
                }
                this.used = true;
            }
        }
    }
    this.draw = function () {

        ctx.drawImage(medkitpic, this.x, this.y);

    }



}