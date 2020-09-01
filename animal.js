class animal{
  constructor(curMapRX,curMapRY,animalType){
    this.x = random(1,13);
    this.y = random(1,13);
    this.randomTimerOffset = random(0,100);
    this.spawnedRegionX =curMapRX;
    this.spawnedRegionY =curMapRY;
    this.onscreen = true;
    this.Left = true;
    this.type = animalType;
    this.picLeft;
    this.picRight;
    if(this.type == 1){
      this.picLeft =muffloPicL;
      this.picRight =muffloPicR;
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
  if (this.onscreen = true){
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
}
}

}
