var game = new Phaser.Game(800,600,Phaser.CANVAS,'canvas', {preload:preload,create:create,update:update,render:render});


function preload(){
	console.log("In precreate");
	game.load.image('me','../assets/hero.png');
	var counter=0;
}


function create(){
	
	console.log("In create function ");
	
	image = game.add.sprite(game.world.centreX,game.world.centreY,'me');

	image.anchor.set(0.5);
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.enable(image,Phaser.Physics.ARCADE);

}
function update(){
	if(game.physics.arcade.distanceToPointer(image,game.input.activePointer)>8){
		game.physics.arcade.moveToPointer(image,300);
	}
	else{
		image.body.velocity.x = 0;
		image.body.velocity.y = 0;
		// Or you can use
		//image.body.velocity.set(0);
	}

}

function render(){

	game.debug.inputInfo(32,32);

}
