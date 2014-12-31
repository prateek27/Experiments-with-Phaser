var game = new Phaser.Game(640, 640, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    game.load.tilemap('mario', 'assets/example.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/grass-tiles-2-small.png');
    game.load.image('littleshrooms','assets/littleshrooms_0.png');
	game.load.image('bushberry','assets/qubodup-bush_berries_0.png');
	game.load.image('treefinal','assets/tree2-final.png');
	game.load.image('player','assets/hero.png');

}

var map;
var layer;
var p;
var cursors;

function create() {

    game.stage.backgroundColor = '#787878';
	/*Add the tileMap to the game and save it in map object*/
    map = game.add.tilemap('mario');

	
    map.addTilesetImage('grass-tiles-2-small','treefinal');
	map.addTilesetImage('tree2-final','treefinal');
	map.addTilesetImage('littleshrooms_0','littleshrooms');
	map.addTilesetImage('qubodup-bush_berries_0','bushberry');
	
    layer = map.createLayer('World1');

    layer.resizeWorld();

    layer.wrap = true;

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    if (cursors.left.isDown)
    {
        game.camera.x -= 8;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 8;
    }

    if (cursors.up.isDown)
    {
        game.camera.y -= 8;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 8;
    }

}