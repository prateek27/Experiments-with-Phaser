var game = new Phaser.Game(800,600,Phaser.CANVAS,'canvas', {preload:preload,create:create}	);

var text;
var counter=0;
var velocity_x = 5;
var image;

function preload(){
	console.log("In precreate");
	game.load.image('me','../assets/hero.png');
	var counter=0;
}


function create(){
	
	console.log("In create function ");
	
	image = game.add.sprite(300,300,'me');

	image.anchor.set(0.5);
	image.inputEnabled = true;
	

	text = game.add.text(250,16,'',{fill:'#ffff00'});
	
	game.physics.enable(image,Phaser.Physics.ARCADE);

	image.events.onInputDown.add(listener,this);
	image.events.onInputDown.add(move,this);
}

function listener(){
	counter++;
	velocity_x = 1.5 * velocity_x;
	text.text = "You clicked "+counter + " times.";
}

function move(){
	image.body.velocity.x = velocity_x; 
}