var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render });

function preload() {
	game.stage.backgroundColor='#90CEEF';
    game.load.image('background','background.png');
    game.load.image('player','hero.png');

}

var player;
var cursors;

function create() {
		
	/*World can be smaller than tile sprite but not the vice versa. If Background is smaller than tile sprite
	only then it will be tiled ! */
    
	game.add.tileSprite(0, 2000-1080, 1920, 1080, 'background');

    game.world.setBounds(0, 0, 1920, 2000);

    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

    game.physics.p2.enable(player);

    cursors = game.input.keyboard.createCursorKeys();


/* 5 Types of cameras 
Basic follow: this.camera.follow(player);
Lockon: this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
Platformer: this.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
Topdown: this.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
Topdown tight: this.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
Last two modes tilt the player 
*/
	// game.camera.follow(player);
	//game.camera.follow(player,Phaser.Camera.FOLLOW_LOCKON);
	game.camera.follow(player,Phaser.Camera.FOLLOW_PLATORMER);
	//game.camera.follow(player,Phaser.Camera.FOLLOW_TOPDOWN);
	//game.camera.follow(player,Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
	}

function update() {

    player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(500)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(500);
    }

    if (cursors.left.isDown)
    {
       //BOTH STATEMENTS DO THE SAME WORK
	   //player.body.velocity.x = -500;
		player.body.moveLeft(500);
	}
    else if (cursors.right.isDown)
    {
        player.body.moveRight(500);
    }

}

function render() {

   //game.debug.cameraInfo(game.camera, 32, 32);
  // game.debug.spriteCoords(player, 32, 500);

}