class inv{
  constructor(){
    this.x = 700;
    this.y = 200;
    this.w = 250;
    this.h = 700;
    this.invantArray = [];
    this.curItem= 1;
  }
drawInv(){
  image(invPic,this.x,this.y);
  image(woodPanel,700,0,200,200);

  //Map Pos
  strokeWeight(2);
  stroke(0);
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

  fill(60,50,100);
  rect (814,690,37,-480);
  fill(70,180,30);
  rect (814,690,37,-player.hungerVal);

  this.highlightItem()
  this.displayItems();

}
invantItems(){
  this.invantArray[0] = pickaxe1;
  this.invantArray[1] = axe1;
  this.invantArray[2] = wand;


}
displayItems(){
  for (let i = 0; i < this.invantArray.length;i++){
    if(this.invantArray[i]!=undefined){
      let offsetX = 0;
      let offsetY = 0;
      if(this.invantArray[i] == logs){
        offsetX = 5;
        offsetY = 13;
      }
      else if(this.invantArray[i] == berries){
        offsetX = 4;
        offsetY = 10;
      }

      image(this.invantArray[i],710+offsetX,210+i*52+offsetY);
    }

  }
  this.itemCount();
}
highlightItem(){
  noFill()
  strokeWeight(4)
  stroke(255,223,0);
  rect(714,210+(this.curItem-1)*54,40,48);
  noStroke();
  // noSt
}
itemCount(){
  textSize(20)
  for(let i = 0;i<this.invantArray.length;i++){
    if (invArrItemCount[i]<0){
      console.log(i);
      this.invantArray.splice(i,1);
      invArrItemCount.splice(i,1);
    }
    if (invArrItemCount[i]!=0){
      fill(255);
      stroke(0);
      text(invArrItemCount[i]+1,740,265+50*i);
      noStroke();

    }
  }
}


}
