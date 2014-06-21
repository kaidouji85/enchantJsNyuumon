enchant();

var core;
var GAME_WIDTH = 320;
var GAME_HEIGHT = 320;
var PLAYER_WIDTH = 64;
var PLAYER_HEIGHT = 64;
var PLAYER_PICT = "images/jiki.png";
var playerSprite;

window.onload = function() {
    initCore();
    preLoad();

    core.onload = function() {
        playerSprite = new Sprite(PLAYER_WIDTH,PLAYER_HEIGHT);
        playerSprite.image = core.assets[PLAYER_PICT];
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