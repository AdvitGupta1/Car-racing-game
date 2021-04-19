var database,form,player,game;
var gamestate=0,playerCount,allPlayers,car1,car2,car3,car4,cars,car1img,car2img,car3img,car4img,trackimg;

function preload(){
car1img=loadImage("car1.png");
car2img=loadImage("car2.png");
car3img=loadImage("car3.png");
car4img=loadImage("car4.png");
trackimg=loadImage("track.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  game=new Game();
  game.getGamestate();
  game.start();
  console.log(gamestate);
}

function draw() {
  background(255,255,255);
  if(playerCount==2){
    game.update(1);
  }  
  if(gamestate==1){
    clear();
    game.play();
  }
  if(gamestate==2){
    game.end();
  }
}