var game = new Phaser.Game(800,600,Phaser.CANVAS,'canvas', {preload:preload,create:create,update:update,render:render});
var image;
var velocity = 250;
function preload(){
	game.load.image('hero','../assets/hero.png');
}


function create(){
	
	image = game.add.sprite(200,200,'hero');	 
	image.anchor.set(0.5);

	var tween = game.add.tween(image);
	tween.to({x:300,y:500},1800);
	tween.start();

	game.physics.arcade.enable(image);

	image.inputEnabled =true;
	image.events.onInputDown.add(stop,this);

	var style = { font:"40px Arial",fill:"#ff0044",align:"center"};
	var text = game.add.text(game.world.centerX-200,32,"Click on the image to \n reverse its direction",style);

}
function update(){
 	if(image.body.y>=300){
	image.body.velocity.x = velocity;
 	}
 	
}


function render(){
	//game.debug.inputInfo(32,32);
}

function stop(){
	velocity = -velocity;
	
}