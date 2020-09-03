class animal{
  constructor(curMapRX,curMapRY,region){
    this.x = random(1,13);
    this.y = random(1,13);
    this.randomTimerOffset = random(0,100);
    this.spawnedRegionX =curMapRX;
    this.spawnedRegionY =curMapRY;
    this.onscreen = true;
    this.Left = true;
    this.type = region;
    this.picLeft;
    this.picRight;
    this.isFollowing = false;
    this.followTic = 0;

    if(this.type == 1){
      let l = floor(random(0,3));
      if( l == 0){
      this.picLeft =muffloPicL;
      this.picRight =muffloPicR;
    }else if( l == 1){
    this.picLeft =sheepL;
    this.picRight =sheepR;
  }
  else{
  this.picLeft =ratL;
  this.picRight =ratR;
}

    }
    else if(this.type == 2){
      this.picLeft =snakePicL;
      this.picRight =snakePicR;
    }
  }

draw(){
  if (this.spawnedRegionX == curMapRX &&  this.spawnedRegionY ==curMapRY) {

  if(this.Left == true){image(this.picLeft,this.x*46,this.y*48);}
  else image(this.picRight,this.x*46,this.y*48);
  this.onscreen = true;
}else this.onscreen = false;
}

move(x,y){
  if (this.onscreen == true){
    this.isFollow();
  if(this.isFollowing == false){
  let timer = gameClock + this.randomTimerOffset;
  if (timer % 150 < 1){
      let r = random(-1,1);
      let l = random(-1,1);
      if (abs(r)>abs(l)){
        if (r > 0 && this.x < 13) {this.x += 1;
        this.Left = false;}
        else if (r < 0 && this.x > 0){this.x -= 1;
          this.Left = true;}
      }
      else{
      if (l > 0 && this.y < 13)this.y += 1;
      else if (l < 0 && this.y > 0) this.y -=1;
    }
  }
}else this.followPlayer();
}
}

isFollow(){
  if (this.type == 2 && dist(this.x,this.y,player.x,player.y)< 5){
    this.isFollowing = true;
  }else this.isFollowing = false;
}

followPlayer(){
  console.log(this.x)
  console.log(this.y)
  if(floor(this.x) == player.x && floor(this.y) == player.y){
    console.log("attack")
  }
    if(gameClock%40==0){
    if(this.followTic == 0){
      this.followTic=1;
    if(player.x>this.x){
      this.x +=1;
      this.Left = false;

    }else {this.x -=1;
    this.Left = true;}}

    else if(player.y>this.y){
      this.y +=1;
      this.followTic=0;
    }else {this.y -=1;
  this.followTic=1;}

}

}
}
