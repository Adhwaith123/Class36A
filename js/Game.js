class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hidden();
    textSize(30);
    text("GameStart",120,130);
    Player.getPlayerinfo();
    if(allplayers!== undefined){
      var display_position = 130;
      for(var plr in allplayers){
        if(plr === "player"+ player.index){
          fill("red");

        }
        else{
fill("black");
        }
        display_position += 20;
        textSize(15);
        text(allplayers[plr].name+":"+allplayers[plr].distance,120,distance_position);
      }
    }
    if(keyDown (UP_ARROW)&& player.index!== null){
      player.distance += 15;
      player.update();
    }
  }
}
