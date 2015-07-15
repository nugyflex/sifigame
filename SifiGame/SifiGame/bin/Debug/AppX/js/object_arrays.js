//#region Platforms
function platforms() {
    this.count = function () {
        return this.array.length;
    }
    this.array = [];
    this.add = function (x, y, width, height, type, ax, ay, bx, by) {
        var i = this.count();
        this.array[i] = new platform(i, x, y, width, height, type, ax, ay, bx, by)
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
            case greenlaser:
                this.array[i] = new greenlaser(pindex, type)
                break;
            case redlaser:
                this.array[i] = new redlaser(pindex, type)
                break;
            case bomb:
                this.array[i] = new bomb(pindex, type)
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
            this.array[i] = new player(x, y, i)
        }
        if (type == drone) {
            this.array[i] = new drone(x, y)
        }
        if (type == enemy) {
            this.array[i] = new enemy(x, y, vel, i)
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