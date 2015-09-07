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
	
	btn1 = game.add.button(game.world.centerX,game.world.centerY,'button',changeBackground,this,2,1,0);
	btn1.name = 'sky1';
    btn1.angle = -32;
    btn1.scale.setTo(1.5, 1.5);
    btn1.anchor.setTo(0.5, 0.5);

    btn2 = game.add.button(100,100,'button',removeBackground,this,2,1,0);

    btn3 = game.add.button(600,400,'button',colorBackground,this,2,1,0);
}

function changeBackground(button){
	console.log("Changing Background to");
	background.loadTexture(button.name);
}		

function removeBackground(button){
background.loadTexture(null);
console.log("Removing Background...");
}

function colorBackground(button){
console.log("Coloring Background...");
background.visible =! background.visible;
}


function update(){



}

function render(){



}
