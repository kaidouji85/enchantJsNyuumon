enchant();

var core;
var GAME_WIDTH = 320;
var GAME_HEIGHT = 320;
var PLAYER_WIDTH = 64;
var PLAYER_HEIGHT = 64;
var PLAYER_PICT = "images/jiki.png";
var PLAYER_SPEED = 4;
var playerSprite;

window.onload = function() {
    initCore();
    preLoad();

    core.onload = function() {
        playerSprite = definePlayerSprite();
        core.rootScene.addChild(playerSprite);
    };
    core.start();
};

function initCore(){
    core = new Core(GAME_WIDTH, GAME_HEIGHT);
    core.fps = 60;
    core.rootScene.backgroundColor = "black";
}

function preLoad(){
    core.preload(PLAYER_PICT);
}

function definePlayerSprite(){
    var player = new Sprite(PLAYER_WIDTH,PLAYER_HEIGHT);
    player.image = core.assets[PLAYER_PICT];
    player.addEventListener(Event.ENTER_FRAME,function(e){
        //移動
        if(core.input.up){
            player.y -= PLAYER_SPEED;
        } else if(core.input.down){
            player.y += PLAYER_SPEED;
        }
        if(core.input.right){
            player.x += PLAYER_SPEED;
        } else if(core.input.left) {
            player.x -= PLAYER_SPEED;
        }

        //画面外移動の防止
        if(player.x<0){
            player.x = 0;
        } else if(player.x > GAME_WIDTH-PLAYER_WIDTH){
            player.x = GAME_WIDTH-PLAYER_WIDTH;
        }
        if(player.y<0){
            player.y = 0;
        } else if(player.y > GAME_HEIGHT-PLAYER_HEIGHT){
            player.y = GAME_HEIGHT-PLAYER_HEIGHT;
        }

    });
    player.x = GAME_WIDTH/2;
    player.y = GAME_HEIGHT/2;
    return player;
}