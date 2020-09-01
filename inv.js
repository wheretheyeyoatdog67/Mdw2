class inv{
  constructor(){
    this.x = 700;
    this.y = 200;
    this.w = 250;
    this.h = 700;
    this.invantArray = [];
    this.curItem= 1;
    this.starving=false;
    this.mapOpen = false;
    this.hasBeenX = [];
    this.hasBeenY = [];
    this.cabinLoc = [];
  }
drawInv(){
  image(invPic,this.x,this.y);
  image(woodPanel,700,0,200,200);

  //Map Pos
  if(this.mapOpen == true)this.dispMap()


  //HEALTH
  strokeWeight(2);
  stroke(0);
  //
  fill(60,50,100);
  rect (859,690,37,-480);
  fill(255,0,0);
  rect (859,690,37,-player.health);


  //Hunger
  strokeWeight(2);
  stroke(0);

  fill(60,50,100);
  rect (814,690,37,-480);
  fill(70,180,30);
  if(player.hungerVal<= 0){
    player.hungerVal = 0;
  }
  rect (814,690,37,-player.hungerVal);

  this.highlightItem()
  this.displayItems();

}
dispMap(){

  fill(211,211,211,200);
  rect(0,0,700,700)
  strokeWeight(2);
  stroke(0);
  for (let i = 0;i<10;i ++){
    for (let j = 0;j< 10;j++){
      fill(90,80,50);

      for (let k = 0;k< this.hasBeenX.length;k++){
        if (this.hasBeenX[k]==i && this.hasBeenY[k]==j){
          fill(255,223,0)
        }
      }
      if(i == curMapRX && j == curMapRY){
        fill(255,0,0);
      }
      // if (this.hasBeenX[1]==i && this.hasBeenY[1]==j){
      //   console.log("Tre")
      //
      // } else fill(90,80,50);


      rect(60+i*60,60+j*60,30,30);
    }
  }
}

invantItems(){
  this.invantArray[0] = pickaxe1;
  this.invantArray[1] = shovel;
  this.invantArray[2] = axe1;
  this.invantArray[3] = wandInv;
  this.invantArray[4] = tomb;


}
displayItems(){
  for (let i = 0; i < this.invantArray.length;i++){
    if(this.invantArray[i]!=undefined){
      let offsetX = 0;
      let offsetY = 0;
      if(this.invantArray[i] == logs){
        offsetX = 2;
        offsetY = 13;
      }
      else if(this.invantArray[i] == tomb){
        offsetY = 9;

      }
      else if(this.invantArray[i] == berries){
        offsetX = 4;
        offsetY = 10;
      }
      else if(this.invantArray[i] == tripShroom){
        offsetY = 4;
      }
      else if(this.invantArray[i] == rock){
        offsetY = 8;
      }
      else if(this.invantArray[i] == shovel){
        offsetY = 8;
        offsetX = 4;
      }
      else if(this.invantArray[i] == axe1){
        offsetY = 4;

      }
      else if(this.invantArray[i] == bush){
        offsetY = 10;

      }
      else if(this.invantArray[i] == dirtInv){
        offsetY = 9;
        offsetX = -2;
      }
      else if(this.invantArray[i] == cabinInv){
        offsetY = 9;

      }
      if(i<=8){
      image(this.invantArray[i],710+offsetX,210+i*52+offsetY);
    }else image(this.invantArray[i],765+offsetX,-265+i*52+offsetY);
    }

  }
  this.itemCount();
}
highlightItem(){
  noFill()
  strokeWeight(4)
  stroke(255,223,0);
  if(this.curItem-1 <9){
  rect(714,210+(this.curItem-1)*54,40,48);
}else rect(768,-275+(this.curItem-1)*54,40,48);
  noStroke();

}
itemCount(){
  textSize(20)
  for(let i = 0;i<this.invantArray.length;i++){
    if (invArrItemCount[i]<0){
      console.log(i);
      this.invantArray.splice(i,1);
      invArrItemCount.splice(i,1);
      invArrItemCount.push([]);
    }
    if (invArrItemCount[i]!=0){
      fill(255);
      stroke(0);
      if(i<=8){
      text(invArrItemCount[i]+1,740,265+50*i);}
      else text(invArrItemCount[i]+1,795,-215+50*i);
      noStroke();

    }
  }
}


}
