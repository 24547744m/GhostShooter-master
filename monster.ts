/**
 * Created by 47419119l on 05/04/16.
 */

class monster extends Phaser.State
{


    constructor(angle:, monsterType:String) {


    }

    public createMonster(monsterType:String)
    {
        this.monsters.setAll('anchor.x', 0.5);
        this.monsters.setAll('anchor.y', 0.5);
        this.monsters.setAll('health', this.MONSTER_HEALTH);
        this.monsters.forEach(this.setRandomAngle, this);
        this.monsters.forEach((explosion:Phaser.Sprite) =>monsterType , this);
    }

}