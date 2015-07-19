function thingstodraw() {
    this.count = function () {
        return this.drawarray.length;
    }
    this.countfloors = function () {
        return this.drawarrayfloor.length;
    }
    this.drawarray = [];
    this.drawarrayfloor = [];
    this.add = function (index, type, y, height) {
        var i = this.count();
        this.drawarray[i] = new thing(index, type, y, height);
    }
    this.addfloor = function (index, type, y, height) {
        var j = this.countfloors();
        this.drawarrayfloor[j] = new thing(index, type, y, height);
    }

    this.draw = function () {
        var currentmin;
        var currentmini;
        for (i = 0; i < thingstodraw1.drawarray.length  ; i++) {

            currentmin = 1000000000;
            currentmini = -1

            for (drawcounter = 0; drawcounter < thingstodraw1.drawarray.length ; drawcounter++) {
                if (thingstodraw1.drawarray[drawcounter].y + thingstodraw1.drawarray[drawcounter].height < currentmin && thingstodraw1.drawarray[drawcounter].drawn == false) {
                    currentmin = thingstodraw1.drawarray[drawcounter].y + thingstodraw1.drawarray[drawcounter].height;
                    currentmini = drawcounter;

                }


            }
            if (currentmini > -1) {
                switch (this.drawarray[currentmini].type) {
                    case "platform":
                        platformcollection.array[thingstodraw1.drawarray[currentmini].index].draw();
                        break;

                    case "projectile":
                        projectilecollection.array[thingstodraw1.drawarray[currentmini].index].draw();
                        break;

                    case "explosion":
                        explosioncollection.array[thingstodraw1.drawarray[currentmini].index].draw();
                        break;

                    case "miscobject":
                        miscobjectcollection.array[thingstodraw1.drawarray[currentmini].index].draw();
                        break;

                    case "player":
                        if (playercollection.array[thingstodraw1.drawarray[currentmini].index].falling == 0)
					{
                            playercollection.array[thingstodraw1.drawarray[currentmini].index].draw();
					}
					break;

                }

                thingstodraw1.drawarray[currentmini].drawn = true;
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
                if (this.drawarrayfloor[drawcounter].y + this.drawarrayfloor[drawcounter].height < currentmin && this.drawarrayfloor[drawcounter].drawn == false) {
                    currentmin = this.drawarrayfloor[drawcounter].y + this.drawarrayfloor[drawcounter].height;
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
            this.add(platformcounter, "platform", platformcollection.array[platformcounter].y, platformcollection.array[platformcounter].height);
        }
        for (projectilecounter = 0; projectilecounter < projectilecollection.count() ; projectilecounter++) {
            this.add(projectilecounter, "projectile", projectilecollection.array[projectilecounter].y, projectilecollection.array[projectilecounter].height);
        }
        for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {
            if (playercollection.array[playercounter].dead == 0) {
                this.add(playercounter, "player", playercollection.array[playercounter].y, playercollection.array[playercounter].height);
            }
        }
        for (explosioncounter = 0; explosioncounter < explosioncollection.count() ; explosioncounter++) {
            this.add(explosioncounter, "explosion", explosioncollection.array[explosioncounter].y, explosioncollection.array[explosioncounter].height);
        }
        for (miscobjectcounter = 0; miscobjectcounter < miscobjectcollection.count() ; miscobjectcounter++) {
            this.add(miscobjectcounter, "miscobject", miscobjectcollection.array[miscobjectcounter].y, miscobjectcollection.array[miscobjectcounter].height);
        }

    }
    this.loadfloors = function()
    {
        for (floorcounter = 0; floorcounter < floorcollection.count() ; floorcounter++) {
            this.addfloor(floorcounter, "floor", floorcollection.array[floorcounter].y, floorcollection.array[floorcounter].height);
        }
    }
    this.execute = function () {

        this.load();
        this.draw();
        //this.draw();
        this.finish();

    }
    this.executefloors = function () {
        this.loadfloors();
        this.drawfloors();
        this.finishfloors();
    }
}