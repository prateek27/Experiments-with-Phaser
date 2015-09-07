var game = new Phaser.Game(800,600,Phaser.CANVAS,'canvas', {preload:preload,create:create,update:update,render:render});
var bot;

function preload(){
	game.load.atlasJSONHash('bot','../assets/running_bot.png','../assets/running_bot.json');

}


function create(){
	bot = game.add.sprite(450,450,'bot');

	// Add one or more animations and play it . You can also specify the frames to play.
	bot.animations.add('run');
	bot.animations.play('run',15,true);	

	//game.physics.startSystem(Phaser.Physics.ARCADE);
	
	//NoTE : THis way should be preferred to Enable Physics on an object.
	// The older way  
	game.physics.arcade.enable(bot);
	bot.body.velocity.x = -100;
	

}
function update(){

	if(bot.body.y <=0){
		bot.body.velocity.x = +100;
	}
	else if(bot.body.y>=800){
		bot.body.velocity.x = -100;
	}	

}

function render(){
	game.debug.inputInfo(32,32);
}
