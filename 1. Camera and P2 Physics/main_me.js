var game = new Phaser.Game(800,600,Phaser.CANVAS,'game_div',{preload:preload,create:create,update:update,render:render});


function preload(){
	/*Setting a background Color*/
	game.stage.backgroundColor="90CEEF";
	
	/*Loading Images*/
	game.load.image('background','background.png');
	game.load.image('player','hero.png');
}

/*Global player and cursor objects */

var player;
var cursors;

function create(){
	
	/*Add a TileSprite , TileSprite is different from a TileMap*/
	game.add.tileSprite(0,0,1920,1080,'background');
	
	/* Set the bounds on the world , playable game area */
	game.world.setBounds(0,0,1920,1080);
	
	/* Add some Physics to the system - Phaser offers 3 systems
	P2 , Arcade and One More */
	game.physics.startSystem(Phaser.Physics.P2JS);
	
	/*Attach the sprite to player object*/
	player = game.add.sprite(game.world.centerX,game.world.centreY,'player');
	
	/*Enable the physics on player */
	game.physics.p2.enable(player);
	
	/*Setup the input keys*/
	cursors = game.input.keyboard.createCursorKeys();
	
	/*A camera is required if sprite is bigger than canvas .
	A camera is always there .We need to specify the camera.
	Basic camera is added by default. */
	
	game.camera.follow(player,Phaser.Camera.FOLLOW_PLATFORMER);
	 /* Other Types of Cameras.Try experimenting */
	// game.camera.follow(player);
	//game.camera.follow(player,Phaser.Camera.FOLLOW_LOCKON);
	//game.camera.follow(player,Phaser.Camera.FOLLOW_TOPDOWN);
	//game.camera.follow(player,Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
	
	}

function update(){
	/* Set Zero Velocity and move down belongs to P2Physics */
	// TRY TO REMOVE THIS FUNCTION , It will add a none zero velocity to object ! 
	player.body.setZeroVelocity();
	
	if(cursors.up.isDown){
		player.body.moveUp(500);
	}
	else if(cursors.down.isDown){
		player.body.moveDown(500);
	}
	
	if(cursors.left.isDown){
		player.body.moveLeft(500);		
	}
	if(cursors.right.isDown){
		player.body.moveRight(500);
	}

}

function render(){
	/* Display Camera and Sprite Coordinates for debugging purposes*/
	game.debug.cameraInfo(game.camera , 32,32);
	game.debug.spriteCoords(player,32,500);
}