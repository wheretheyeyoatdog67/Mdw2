class inv{
  constructor(){
    this.x = 700;
    this.y = 200;
    this.w = 250;
    this.h = 700;
  }
drawInv(){
  image(invPic,this.x,this.y);
  image(woodPanel,700,0,200,200);

  //Map Pos
  for (let i = 0;i<10;i ++){
    for (let j = 0;j< 10;j++){
      if(i == curMapRX && j == curMapRY){
        fill(255,0,0);
      }else fill(90,80,50);
      rect(710+i*19,15+j*18,10,10);
    }
  }
  //HEALTH
  strokeWeight(2);
  stroke(0);
  fill(255,0,0);
  rect (859,210,37,480);


  //MANA
  strokeWeight(2);
  stroke(0);
  fill(100,10,200);
  rect (814,210,37,480);
}

}
