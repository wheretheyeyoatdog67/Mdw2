class craftingWindow{
  constructor(){
    this.isCraft = false;
    this.cabinCraft = false;
    this.cabinSupp= [rock,logs]
    this.cabinQuan= [10,20]
  }
  draw(){
    image(chain,150,0);
    image(chain,450,0);
    stroke(165,42,42)
    strokeWeight(5);
    fill(210,180,140);
    rect(30,150,640,400);
    this.drawCabinS();
  }
  drawCabinS(){
    textSize(35);
    strokeWeight(2)
    stroke(0);
    fill(255)
    text("Cabin",65,185);
    image(cabin, 60,190);


    image(rock, 60, 290);
    image(logs, 110, 290);
    textSize(17)
    text("10",60,340);
    text("20",110,340);

    if(dist(mouseX,mouseY,107,243)<50){
      if(this.checkCanBuy(this.cabinQuan[0],rock)){
        if(this.checkCanBuy(this.cabinQuan[1],logs)){
          fill(255, 204, 0,60);
          rect(65,193,90,96);
          fill(255)
          text("Craft",67,207);
          this.cabinCraft = true;
        }
      }
    }else this.cabinCraft = false;
}


checkCanBuy(quantity,type){
  let canBuy = false;
    for(let i = 0;i<inv.invantArray.length;i++){
      if(inv.invantArray[i] == type){
        if (invArrItemCount[i] >=quantity-1){
          canBuy = true;
        }else canBuy = false
      }
    }
    return canBuy;

}


}


//   console.log(i);
//   this.invantArray.splice(i,1);
//   invArrItemCount.splice(i,1);
// }
