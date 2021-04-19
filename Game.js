class Game{
    constructor(){

    }
getGamestate(){
    var reference=database.ref("gamestate");
    reference.on("value",function(data){
        gamestate=data.val();
        console.log(gamestate);
    })
}
update(state){
database.ref("/").update({gamestate:state});
}
async start(){
    if(gamestate==0){
        player=new Player();
        var reference=await database.ref("playerCount").once("value");
        if(reference.exists()){
            playerCount=reference.val()
            player.getCount();
        }
        form=new Form();
        form.display();
    }
    car1=createSprite(250,300)
    car2=createSprite(550,300)
    car3=createSprite(850,300)
    car4=createSprite(1150,300)
    car1.addImage(car1img);
    car2.addImage(car2img);
    car3.addImage(car3img);
    car4.addImage(car4img);
    cars=[car1,car2,car3,car4];
}
play(){
    form.hide1();
    background(rgb(198,135,103)); image(trackimg, 0,-displayHeight*4,displayWidth, displayHeight*5);
    text("The game has started",200,200);
    Player.playerInfo();
    player.getRank();
    var x=0,y=0,index=0
    if(allPlayers!=undefined){
        for(var i in allPlayers){
            index=index+1;
            y=displayHeight-allPlayers[i].distance-100;
            cars[index-1].y=y;
            if(index==player.index){
                fill("red");
                ellipse(cars[index-1].x,cars[index-1].y,100,100)
                 drawSprites();
                camera.position.y=cars[index-1].y;

            }
    }}

if(keyDown("up")&&player.index!=null){
    player.distance=player.distance+20;
    player.update();
}
if(player.distance>4100){
    gamestate=2;
    player.rank+=1
    player.updateRank(player.rank);
}
}

end(){
    textSize(30)
    text("Game Has ended!",displayWidth/2,displayHeight/2);
  console.log("Game Over")
  console.log(player.rank);
}

}