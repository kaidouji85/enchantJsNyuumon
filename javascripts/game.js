enchant();

var core;
var GAME_WIDTH = 320;
var GAME_HEIGHT = 320;
var PLAYER_WIDTH = 64;
var PLAYER_HEIGHT = 64;
var ENEMY_WIDTH = 64;
var ENEMY_HEIGHT = 64;
var PLAYER_PICT = "images/jiki.png";
var ENEMY_PICT = "images/enemy.png";
var PLAYER_SPEED = 4;
var ENEMY_SPEED = 3;
var playerSprite;
var enemySprite;

window.onload = function() {
    initCore();
    preLoad();

    core.onload = function() {
        //自機
        playerSprite = definePlayerSprite();
        core.rootScene.addChild(playerSprite);

        //敵
        enemySprite = defineEnemy();
        core.rootScene.addChild(enemySprite);
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
    core.preload(ENEMY_PICT);
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
    player.x = (GAME_WIDTH-PLAYER_WIDTH)/2;
    player.y = GAME_HEIGHT/2;
    return player;
}

function defineEnemy(){
    var enemy = new Sprite(ENEMY_WIDTH,ENEMY_HEIGHT);
    enemy.image = core.assets[ENEMY_PICT];
    enemy.x = (GAME_WIDTH-ENEMY_WIDTH)/2;
    enemy.y = 0;

    var rad = Math.random()*360*Math.PI/180;
    enemy.dx = Math.cos(rad)*ENEMY_SPEED;
    enemy.dy = Math.sin(rad)*ENEMY_SPEED;

    enemy.addEventListener(Event.ENTER_FRAME,function(e){
        enemy.x += enemy.dx;
        enemy.y += enemy.dy;


        if(enemy.x < 0){
            enemy.x = 0;
            enemy.dx = -enemy.dx;
        }
        else if(enemy.x > GAME_WIDTH-ENEMY_WIDTH){
            enemy.x = GAME_WIDTH-ENEMY_WIDTH;
            enemy.dx = -enemy.dx;
        }

        if(enemy.y < 0){
            enemy.y = 0;
            enemy.dy = -enemy.dy;
        }
        else if(enemy.y > GAME_HEIGHT-ENEMY_HEIGHT){
            enemy.y = GAME_HEIGHT-ENEMY_HEIGHT;
            enemy.dy = -enemy.dy;
        }
    });
    return enemy;
}