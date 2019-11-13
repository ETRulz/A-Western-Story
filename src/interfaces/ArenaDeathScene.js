export class ArenaDeathScene extends Phaser.Scene
{
    constructor(PhaserGame)
    {
        super({key:"arena-death"});

        this.PhaserGame = PhaserGame;

        this.previousScene = null;
    }

    init(data)
    {
        this.previousScene = data.scene;
    }

    create()
    {
        let scale = this.PhaserGame.scale;

        this.add.image(600 * scale, 300 * scale, 'death').setDisplaySize(1200 * scale, 600 * scale);

        let respawn = this.add.image(600 * scale, 300 * scale, 'respawnButton')
                        .setDisplaySize(360 * scale, 90 * scale)
                        .setInteractive();
        respawn.on('pointerdown', () => {this.respawn()});
    }

    respawn()
    {
        this.scene.start(this.previousScene);
    }
}