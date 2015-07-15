function player_loop() {
    for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {
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
}