var game = new Phaser.Game(800,600,Phaser.CANVAS,'canvas', {preload:preload,create:create}	);

function preload(){
	console.log("In precreate");
	game.load.image('me','../assets/hero.png');
}
function create(){
	console.log("In create function ");
	game.add.sprite(0,0,'me');
}