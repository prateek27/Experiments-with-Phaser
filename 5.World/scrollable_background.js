var game = new Phaser.Game(800,600,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update});

var background;
var btn1;
var btn2;
var btn3;

function preload(){
	game.load.spritesheet('button','../assets/button_sprite_sheet.png',193,71);
	game.load.image('sky0','../assets/space2.png');
 	game.load.image('sky1','../assets/chrome.png');
       	
}

function create(){
	background = game.add.image(0,0,'sky0');
	
}


function update(){



}

function render(){



}
