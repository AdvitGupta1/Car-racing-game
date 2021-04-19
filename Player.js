class Player{
constructor(){
this.index=null;
this.distance=0;
this.name=null;
this.rank=null;
    }
    getCount(){
        var reference=database.ref("playerCount");
    reference.on("value",function(data){
        playerCount=data.val();
    })
    }
    updateCount(count){
        database.ref("/").update({playerCount:count});
    }
    update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).update({name:this.name,distance:this.distance});
    }
   static playerInfo(){
       var reference=database.ref("players");
       reference.on("value",function(data){
        allPlayers=data.val();
    })
    }
   getRank(){
    var reference=database.ref("rank");
    reference.on("value",(data)=>{
    this.rank=data.val();
    })
}
 updateRank(rank){
    database.ref('/').update({rank:rank});
}
}