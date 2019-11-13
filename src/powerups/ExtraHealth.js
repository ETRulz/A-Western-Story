import { PowerUp } from "./PowerUp.js";

export class ExtraHealth extends PowerUp
{
    constructor(scene, imageKey, x, y)
    {
        super(scene, imageKey, x, y);
        this.activatePowers();
    }

    activatePowers()
    {
        this.scene.matterCollision.addOnCollideStart({
            objectA: this,
            objectB: this.player,
            callback: () => {
                this.player.changeHealth(5);
                this.destroy();
            },
            context: this
        });
    }
}