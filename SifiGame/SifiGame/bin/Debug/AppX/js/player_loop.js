function player_loop() {
    for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {

        for (miscobjectcounter = 0; miscobjectcounter < miscobjectcollection.count() ; miscobjectcounter++) {

            if (collisiondetection1.testcollision(playercollection.array[playercounter], miscobjectcollection.array[miscobjectcounter])/* && playercollection.array[playercounter].type == "player"*/) {
                if (miscobjectcollection.array[miscobjectcounter].interactontouch) {
                    miscobjectcollection.array[miscobjectcounter].interact(playercollection.array[playercounter]);
                }
                if (miscobjectcollection.array[miscobjectcounter].deleteafterinteract && miscobjectcollection.array[miscobjectcounter].used) {
                    miscobjectcollection.delete(miscobjectcounter);
                }
            }

        }

        if (playercollection.array[playercounter].type == "enemy" && playercollection.array[playercounter].dead == 0) {
            var thing1 = 0;
            for (floorcounter = 0; floorcounter < floorcollection.count() ; floorcounter++) {

                if (collisiondetection1.testcollision(playercollection.array[playercounter], floorcollection.array[floorcounter]) == 0) {
                    thing1 = thing1 + 1;
                }

            }



            if (thing1 == floorcollection.count()) {
                playercollection.array[playercounter].falling = 1;
            }
            for (playercounter1 = 0; playercounter1 < playercollection.count() ; playercounter1++) {
                if (playercollection.array[playercounter1].type == "enemy" && playercollection.array[playercounter1].dead == 0 && playercollection.array[playercounter1].dead == 0) {
                    if (playercounter !== playercounter1) {
                        collisiondetection1.stopplayer(playercollection.array[playercounter1], playercollection.array[playercounter]);
                    }

                }
            }
        }
        if (playercollection.array[playercounter].type == "player" && playercollection.array[playercounter].dead == 0) {

            for (playercounter1 = 0; playercounter1 < playercollection.count() ; playercounter1++) {
                if (playercollection.array[playercounter1].type == "enemy" && playercollection.array[playercounter1].dead == 0 && playercollection.array[playercounter1].dead == 0) {
                    if (playercounter !== playercounter1) {
                        collisiondetection1.stopplayer(playercollection.array[playercounter1], playercollection.array[playercounter]);
						
                if (collisiondetection1.testcollision(playercollection.array[playercounter], playercollection.array[playercounter1]) == 1) {
                    playercollection.array[playercounter1].attack(playercollection.array[playercounter]);
                }
                    }

                }
            }
        }


    }
    for (miscobjectcounter = 0; miscobjectcounter < miscobjectcollection.count() ; miscobjectcounter++) {

        if (miscobjectcollection.array[miscobjectcounter].static == false) {
            miscobjectcollection.array[miscobjectcounter].move();

        }
        if (miscobjectcollection.array[miscobjectcounter].deleteaftertime == true && miscobjectcollection.array[miscobjectcounter].timer > miscobjectcollection.array[miscobjectcounter].timermax)
        {
            miscobjectcollection.delete(miscobjectcounter);
        }
        thing1 = 0;
        if (miscobjectcounter < miscobjectcollection.count()) {
            for (floorcounter = 0; floorcounter < floorcollection.count() ; floorcounter++) {

                if (collisiondetection1.testcollision(miscobjectcollection.array[miscobjectcounter], floorcollection.array[floorcounter]) == 0) {
                    thing1 = thing1 + 1;
                }

            }
        }



        if (thing1 == floorcollection.count()) {
            miscobjectcollection.array[miscobjectcounter].falling = 1;
        }

    }
}