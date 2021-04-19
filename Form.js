class Form{
constructor(){
     this.title=createElement("h2");
     this.input=createInput("name");
     this.button=createButton("Write name");
     this.greeting=createElement("h5");
     this.reset=createButton("Reset");
}
hide1(){
this.title.hide();
this.input.hide();
this.button.hide();
this.greeting.hide();
}
    display(){
    this.title.html("car racing game");
    this.title.position(displayWidth/2,displayHeight/2-100);
    this.input.position(displayWidth/2,displayHeight/2-50);
    this.button.position(displayWidth/2,displayHeight/2-10);
    this.reset.position(displayWidth-100,20);
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        player.updateRank(0);
    })
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name=this.input.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.name=name;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("hello "+name);
        this.greeting.position(displayWidth/2,displayHeight/2-40);
    })
}
}