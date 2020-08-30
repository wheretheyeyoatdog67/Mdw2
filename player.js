class player{
  constructor(){
    this.x = 4;
    this.y = 4;

  }

draw(){
  image(playerPic,this.x*50,this.y*50);
}
move(x,y){
  this.x += x;
  this.y += y;
}
moveToNextRegion(xL,yL){
  curMapRX = curMapRX + xL;
  curMapRY = curMapRY + yL;
  if (xL < 0){
    this.x = 13
  }
  if (xL > 0){
    this.x = 0;
  }

  if (yL < 0){
    this.y = 13
  }
  if (yL > 0){
    this.y = 0;
  }
}

playerCollision(){

}
inhand(){
  
}
}
