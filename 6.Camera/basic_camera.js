var game = new Phaser.Game(800,600,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update,render:render});

var hero;
var cursors;

function preload(){
	game.load.image('hero','../assets/hero.png');
	game.load.image('background','../assets/background.jpg');
}

function create(){
	game.add.tileSprite(0,0,1920*2,1080,'background');
	game.world.setBounds(0,0,1920*2,1080);

	game.physics.startSystem(Phaser.Physics.P2JS);
	
	hero = game.add.sprite(game.world.centerX,game.world.centerY,'hero');
	game.physics.p2.enable(hero);
	cursors = game.input.keyboard.createCursorKeys();
	game.camera.follow(hero);
}


function update(){
	hero.body.setZeroVelocity();
		
	
	//hero.body.velocity.x = 0;
	//hero.body.velocity.y = 0;

	if(cursors.up.isDown){
		//These functions are part of P2PhysicsOnly
			hero.body.moveUp(300);
	}
	else if(cursors.down.isDown){

			hero.body.moveDown(300);
	}
	if(cursors.left.isDown){

			hero.body.moveLeft(300);
	}
	
	else if(cursors.right.isDown){
		hero.body.moveRight(300);
	}

}

function render(){
	game.debug.cameraInfo(game.camera,32,32);
	game.debug.spriteCoords(hero,32,500);
}