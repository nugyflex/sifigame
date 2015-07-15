function projectile_collision() {
    var projectiledeleted = 0;
    for (projectilecounter = 0; projectilecounter < projectilecollection.count() ; projectilecounter++) {

        projectilecollection.array[projectilecounter].calcnewposition();
        for (platformcounter = 0; platformcounter < platformcollection.count() ; platformcounter++) {

            if (collisiondetection1.testcollision(projectilecollection.array[projectilecounter], platformcollection.array[platformcounter]) == 1 && platformcollection.array[platformcounter].type !== 30) {
                if (projectilecollection.array[projectilecounter].canexplode) {


                    projectilecollection.array[projectilecounter].explode();
                }
                if (platformcounter < platformcollection.array.length) {
                    if (platformcollection.array[platformcounter].type == 11) {
                        platformcollection.array[platformcounter].health = platformcollection.array[platformcounter].health - playercollection.array[projectilecollection.array[projectilecounter].pindex].damage * projectilecollection.array[projectilecounter].damagemultiplier;
                        if (platformcollection.array[platformcounter].health == 0) {

                            platformcollection.delete(platformcounter);
                        }
                    }
                    else {
                        if (platformcollection.array[platformcounter].type == 12) {
                            platformcollection.array[platformcounter].health = platformcollection.array[platformcounter].health - playercollection.array[projectilecollection.array[projectilecounter].pindex].damage * projectilecollection.array[projectilecounter].damagemultiplier;
                            if (platformcollection.array[platformcounter].health == 0) {
                                platformcollection.delete(platformcounter);
                            }
                        }
                    }
                }
                projectilecollection.delete(projectilecounter);
                if (projectilecounter > 0) {
                    projectilecounter = projectilecounter - 1;
                }
                projectiledeleted = 1;
                break;
            


        }
            
        }
        if (projectiledeleted == 0) {
            for (playercounter = 0; playercounter < playercollection.count() ; playercounter++) {
                if (collisiondetection1.testcollision(projectilecollection.array[projectilecounter], playercollection.array[playercounter]) == 1) {
                    if (playercollection.array[playercounter].type == "enemy") {
                        if (projectilecollection.array[projectilecounter].canexplode)
                        {

 
                            projectilecollection.array[projectilecounter].explode();
                            projectilecollection.delete(projectilecounter);
                        }
                        else
                        {
                            playercollection.array[playercounter].health = playercollection.array[playercounter].health - playercollection.array[projectilecollection.array[projectilecounter].pindex].damage * projectilecollection.array[projectilecounter].damagemultiplier;
                            game2.addmoney(playercollection.array[projectilecollection.array[projectilecounter].pindex].index, 1);
                        }


						projectilecollection.delete(projectilecounter);
                        break;

                    }

                }
            }

        }

    }
}
