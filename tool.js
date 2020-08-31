class tool{
  constructor(player){
  this.x = player.x*50;
  this.y = player.y*50;
  this.offsetx;
  this.offsety;
  this.isSheifed = false;
  this.rightWord;
}
  move(player){
    this.x = player.x*50;
    this.y = player.y*50;
  }
  disp(player){
    if (mouseX-player.x*50> 0){this.offsetx = 35;
    this.rightWord = true;}
    else {this.offsetx = 5
    this.rightWord = false};
    if (mouseY-player.y*50< -1){this.offsety = -20;}
    else if (mouseY-player.y*50> 50) this.offsety = 20;
    else this.offsety = 0;
    push();
    this.move(player);
    rectMode(CENTER);
    angleMode(RADIANS);


    translate (player.x*50+this.offsetx,player.y*50+30+this.offsety);

    if (this.isSheifed!=true){
    let rotFact;
    if(this.rightWord == true){
       rotFact = atan2((mouseY-player.y*50)/2,(mouseX-player.x*50)/2);
    }
    else rotFact = 1.1*atan2((-mouseY+player.y*50)/2,(-mouseX+player.x*50)/2);





    rotate(rotFact);}
    if(inv.curItem==1){
      image(pickaxe1,-15,-30);
    }
    if(inv.curItem==2){
      image(axe1,-15,-30);
    }

    pop();

  }


update(player){
  this.move(player);
  this.disp(player);
}
}
