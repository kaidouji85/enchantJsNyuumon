enchant();

var core;
var GAME_WIDTH = 320;
var GAME_HEIGHT = 320;

window.onload = function() {
    core = new Core(GAME_WIDTH, GAME_HEIGHT);
    core.fps = 60;
    core.rootScene.backgroundColor = "black";
    core.onload = function() {

    };
    core.start();
};

