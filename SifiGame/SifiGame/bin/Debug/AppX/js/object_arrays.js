//#region Platforms
function platforms() {
    this.count = function () {
        return this.array.length;
    }
    this.array = [];
    this.add = function (x, y, width, height, type, ax, ay, bx, by, image) {
        var i = this.count();


        if (type == PLATFORMTYPE_DOOR) {
            this.array[i] = new platform(i, x, y, width, height, type, ax, ay, bx, by, image, ax)
            this.array[i + 1] = new platform(i + 1, x + 85, y+13, 15, 13, PLATFORMTYPE_GREYBOX)
            this.array[i + 2] = new platform(i + 1, x, y + 13, 15, 13, PLATFORMTYPE_DOORWAY)
            //this.array[i + 3] = new platform(i + 1, x, y + 13, 15, 13, PLATFORMTYPE_IMAGE, 0,0,0,0,doorway1)
        }
        else
        {
            this.array[i] = new platform(i, x, y, width, height, type, ax, ay, bx, by, image)
        }
    }
    this.delete = function (index) {
        var initialcount = this.array.length;
        for (platformcounter = index; platformcounter < initialcount; platformcounter++) {

            if (platformcounter < initialcount - 1) {
                this.array[platformcounter] = this.array[platformcounter + 1];
                this.array[platformcounter].index = this.array[platformcounter].index - 1;
            }
            if (platformcounter == initialcount - 1) {
                this.array.length = this.array.length - 1;
            }

        }
    }
}
//#endregion
//#region Floors
function floors() {
    this.array = [];
    this.count = function () {
        return this.array.length;
    }
    this.add = function (x, y, width, height, type) {
        var i = this.count();
        this.array[i] = new floor(x, y, width, height, type)

    }

}
function explosions() {
    this.array = [];
    this.count = function () {
        return this.array.length;
    }
    this.add = function (x, y, radius, i) {
        var i = this.count();
        this.array[i] = new explosion(x, y, radius)

    }
    this.delete = function (index) {
        var initialcount = this.array.length;
        for (explosioncounter = index; explosioncounter < initialcount; explosioncounter++) {

            if (explosioncounter < initialcount - 1) {
                this.array[explosioncounter] = this.array[explosioncounter + 1];
                this.array[explosioncounter].index = this.array[explosioncounter].index - 1;
            }
            if (explosioncounter == initialcount - 1) {
                this.array.length = this.array.length - 1;
            }

        }
    }
}
//#endregion
//#region Projectile
function projectiles() {
    this.array = [];
    this.count = function () {

        return this.array.length;
    }


    this.add = function (pindex, type) {
        var i = this.count();
        switch(type)
        {
            case "greenlaser":
                this.array[i] = new greenlaser(pindex, type)
                break;
            case "redlaser":
                this.array[i] = new redlaser(pindex, type)
                break;
            case "bomb":
                this.array[i] = new bomb(pindex, type)
                break
            case "redlaserweak":
                this.array[i] = new redlaserweak(pindex, type)
                break
        }

    }
    this.delete = function (index) {
        var initialcount = this.array.length;
        for (projectilecounterd = index; projectilecounterd < initialcount; projectilecounterd++) {

            if (projectilecounterd < initialcount - 1) {
                this.array[projectilecounterd] = this.array[projectilecounterd + 1];
            }
            if (projectilecounterd == initialcount - 1) {
                this.array.length = this.array.length - 1;
            }

        }
    }
}
//#endregion
//#region Players
function players() {
    this.count = function () {
        return this.array.length;
    }
    this.array = [];
    this.add = function (x, y, type, vel) {
        var i = this.count();
        if (type == player) {
            this.array[i] = new player(x, y, i);
        }
        if (type == drone) {
            this.array[i] = new drone(x, y, i);
        }
        if (type == enemy) {
            this.array[i] = new enemy(x, y, vel, i);
        }
    }
    this.delete = function (index) {
        var initialcount = this.array.length;
        for (playercounter = index; playercounter < initialcount; playercounter++) {

            if (playercounter < initialcount - 1) {
                this.array[playercounter] = this.array[playercounter + 1];
            }
            if (playercounter == initialcount - 1) {
                this.array.length = this.array.length - 1;
            }

        }
    }
}
//#endregion
function floating_numbers() {
    this.count = function () {
        return this.array.length;
    }
    this.array = [];
    this.add = function (x, y, xvel, yvel, string, size, colour) {
        var i = this.count();
            this.array[i] = new floating_number(x, y, xvel, yvel, string, i, size, colour)
    }
    this.delete = function (index) {
        var initialcount = this.array.length;
        for (floating_numbercounter = index; floating_numbercounter < initialcount; floating_numbercounter++) {

            if (floating_numbercounter < initialcount - 1) {
                this.array[floating_numbercounter] = this.array[floating_numbercounter + 1];
                this.array[floating_numbercounter].index = this.array[floating_numbercounter].index - 1;
            }
            if (floating_numbercounter == initialcount - 1) {
                this.array.length = this.array.length - 1;
            }

        }
    }
}

function weapons() {
    this.count = function () {
        return this.array.length;
    }
    this.array = [];
    this.add = function (type, player) {
        var i = this.count();
        if (type=="guntype1")
        {
            this.array[i] = new guntype1(player);
        }
        if (type=="guntype2")
        {
            this.array[i] = new guntype2(player);
        }
        if (type == "guntype3") 
        {
            this.array[i] = new guntype3(player);
        }
        if (type == "acidgun")
        {
            this.array[i] = new acidgun(player);
        }
    }
    
    this.delete = function (index) {
        var initialcount = this.array.length;
        for (weapon = index; weaponcounter < initialcount; weaponcounter++) {

            if (weaponcounter < initialcount - 1) {
                this.array[weaponcounter] = this.array[weaponcounter + 1];
                this.array[weaponcounter].index = this.array[weaponcounter].index - 1;
            }
            if (weaponcounter == initialcount - 1) {
                this.array.length = this.array.length - 1;
            }

        }
    }
}

function miscobjects() {
    this.count = function () {
        return this.array.length;
    }
    this.array = [];
    this.add = function (type, x, y, xvel, yvel) {
        var i = this.count();
        if (type == "ammocontainer") {
            this.array[i] = new ammocontainer(type,x,y);
        }
        if (type == "acid") {
            this.array[i] = new acid(type, x, y, xvel, yvel);
        }
        if (type == "buystation") {
            this.array[i] = new buystation(xvel, x, y, yvel);
        }
        if (type == "medkit") {
            this.array[i] = new medkit(x, y);
        }

    }
    this.delete = function (index) {
        var initialcount = this.array.length;
        for (miscobjectcounter = index; miscobjectcounter < initialcount; miscobjectcounter++) {

            if (miscobjectcounter < initialcount - 1) {
                this.array[miscobjectcounter] = this.array[miscobjectcounter + 1];
                this.array[miscobjectcounter].index = this.array[miscobjectcounter].index - 1;
            }
            if (miscobjectcounter == initialcount - 1) {
                this.array.length = this.array.length - 1;
            }

        }
    }
}
