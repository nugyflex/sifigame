# Sifi Game

##Debug Mode

We have recently added a __debug mode__ which allows a player to see statistics about the game.

```javascript
 if (this.debugmode == 1)
            {
        ctx.fillText("X  " + playercollection.array[0].x, this.canvastranslatex + 20, this.canvastranslatey + cheight-30);
        ctx.fillText("Y  " + playercollection.array[0].y, this.canvastranslatex + 20, this.canvastranslatey + cheight - 50);

        ctx.fillText("players: " + playercollection.count(), this.canvastranslatex + cwidth - 300, this.canvastranslatey + cheight - 150);
        ctx.fillText("platforms: " + platformcollection.count(), this.canvastranslatex + cwidth - 300, this.canvastranslatey + cheight - 130);
        ctx.fillText("projectiles: " + projectilecollection.count(), this.canvastranslatex + cwidth - 300, this.canvastranslatey + cheight - 110);
        ctx.fillText("floating_numbers: " + floating_numbercollection.count(), this.canvastranslatex + cwidth - 300, this.canvastranslatey + cheight - 90);
        ctx.fillText("floors: " + floorcollection.count(), this.canvastranslatex + cwidth - 300, this.canvastranslatey + cheight - 70);
        ctx.fillText("explosions: " + explosioncollection.count(), this.canvastranslatex + cwidth - 300, this.canvastranslatey + cheight - 50);
        ctx.fillText("total objects: " + (floating_numbercollection.count() + playercollection.count() + projectilecollection.count() + platformcollection.count() + floorcollection.count() + explosioncollection.count()), this.canvastranslatex + cwidth - 300, this.canvastranslatey + cheight - 30);
    }
 ```

## Instructions

###Movement
| Key | Description          |
| ------------- | ----------- |
| 'w' | Go Forward |
| 'a' | Go Left |
| 's' | Go Backward |
| 'd' | Go Right |
| 'a' | Go Left |

###Barriers
| Key | Description          |
| ------------- | ----------- |
| 'x' | Place a Vertical Barrier |
| 'z' | Place a Horizontal Barrier |

###Weaponry
| Key | Description          |
| ------------- | ----------- |
| Left/Right Click | Fire Red Laser |
| Spacebar | Fire Green Laser |

###Miscellaneous
| Key | Description          |
| ------------- | ----------- |
| 'k' | Enter Debug Mode |
| 'e' | Disable Enemy AI |
| 'f' | Begin New Round |
