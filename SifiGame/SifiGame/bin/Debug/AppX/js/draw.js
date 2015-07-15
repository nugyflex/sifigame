function thingstodraw() {
    this.count = function () {
        return this.drawarray.length;
    }
    this.countfloors = function () {
        return this.drawarrayfloor.length;
    }
    this.drawarray = [];
    this.drawarrayfloor = [];
    this.add = function (index, type, y) {
        var i = this.count();
        this.drawarray[i] = new thing(index, type, y);
    }
    this.addfloor = function (index, type, y) {
        var j = this.countfloors();
        this.drawarrayfloor[j] = new thing(index, type, y);
    }

    this.draw = function () {
        var currentmin;
        var currentmini;
        for (i = 0; i < this.count() ; i++) {

            currentmin = 1000000000;
            currentmini = -1

            for (drawcounter = 0; drawcounter < this.count() ; drawcounter++) {
                if (this.drawarray[drawcounter].y < currentmin && this.drawarray[drawcounter].drawn == false) {
                    currentmin = this.drawarray[drawcounter].y;
                    currentmini = drawcounter;

                }


            }
            if (currentmini > -1) {
                switch (this.drawarray[currentmini].type) {
                    case "platform":
                        platformcollection.array[this.drawarray[currentmini].index].draw();
                        break;

                    case "projectile":
                        projectilecollection.array[this.drawarray[currentmini].index].draw();
                        break;

                    case "explosion":
                        explosioncollection.array[this.drawarray[currentmini].index].draw();
                        break;

                    case "player":
					if (playercollection.array[this.drawarray[currentmini].index].falling == 0)
					{
                        playercollection.array[this.drawarray[currentmini].index].draw();
					}
					break;

                }

                this.drawarray[currentmini].drawn = true;
            }
        }

    }
    this.drawfloors = function () {
        var currentmin;
        var currentmini;
        for (i = 0; i < this.countfloors() ; i++) {
            
            currentmin = 1000000000;
            currentmini = -1

            for (drawcounter = 0; drawcounter < this.countfloors() ; drawcounter++) {
                if (this.drawarrayfloor[drawcounter].y < currentmin && this.drawarrayfloor[drawcounter].drawn == false) {
                    currentmin = this.drawarrayfloor[drawcounter].y;
                    currentmini = drawcounter;

                }


            }
            switch (this.drawarrayfloor[currentmini].type) {

                case "floor":
                    floorcollection.array[this.drawarrayfloor[currentmini].index].draw();
                    break;
            }
            this.drawarrayfloor[currentmini].drawn = true;
        }

    }
    this.finish = function () {
        //remove everything from the array, called at end of draw thing
        this.drawarray.length = 0;
    }
    this.finishfloors = function () {
        //remove everything from the array, called at end of draw thing
        this.drawarrayfloor.length = 0;
    }
    this.load = function () {
        for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {
            this.add(platformcounter, "platform", platformcollection.array[platformcounter].y);
        }
        for (projectilecounter = 0; projectilecounter < projectilecollection.count() ; projectilecounter++) {
            this.add(projectilecounter, "projectile", projectilecollection.array[projectilecounter].y);
        }
        for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {
            if (playercollection.array[playercounter].dead == 0) {
                this.add(playercounter, "player", playercollection.array[playercounter].y);
            }
        }
        for (explosioncounter = 0; explosioncounter < explosioncollection.count() ; explosioncounter++) {
            this.add(explosioncounter, "explosion", explosioncollection.array[explosioncounter].y);
        }

    }
    this.loadfloors = function()
    {
        for (floorcounter = 0; floorcounter < floorcollection.count() ; floorcounter++) {
            this.addfloor(floorcounter, "floor", floorcollection.array[floorcounter].y);
        }
    }
    this.execute = function () {
        this.load();
        this.draw();
        this.finish();
    }
    this.executefloors = function () {
        this.loadfloors();
        this.drawfloors();
        this.finishfloors();
    }
}