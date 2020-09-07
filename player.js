class player{
  constructor(){
    this.x = 4;
    this.y = 4;
    this.hungerVal = 186*2;
    this.health = 186*2;
    this.teleArr = [];
    this.isLayingDown = false;
    this.beforeLayDownX;
    this.beforeLayDownY;
  }

draw(){
  this.hunger();
  if(!this.isLayingDown)image(playerPic,this.x*50,this.y*50);
  this.drawTele();
}
hunger(){

  if(gameClock%360==0){
    if(this.hungerVal == 0){

      this.health -= 20;
      if(this.health <= 0){
        this.health =0;
      }
    }
    this.hungerVal -=2;

  }
}
move(x,y){
  this.x += x;
  this.y += y;
  this.pickUp();

}
moveToNextRegion(xL,yL){
  floorItemArr = [];
  campFirePlaceArr = [];
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

playerCollision(dir){
  //Left
  if(dir == 65){
    if(this.x == 0)return false
    if(foreGroundmapTiles[this.x-1][this.y]==undefined) return false;
    else return true;
  }
  //Right
  if(dir == 68){
    if(foreGroundmapTiles[this.x+1][this.y]==undefined) return false;
    else return true;
  }
  if(dir == 83){
    if(foreGroundmapTiles[this.x][this.y+1]==undefined) return false;
    else return true;
  }
  if(dir == 87){
    if(foreGroundmapTiles[this.x][this.y-1]==undefined) return false;
    else return true;
  }

}
teleport(x,y,time){
  this.teleArr.push([x,y,time]);
}
drawTele(){
  for (let i = 0;i<this.teleArr.length;i++){
    if(this.teleArr[i][2]<1){
      this.teleArr.splice(i,1)
      return 0;
    }
    else
    {
      if(gameClock%1 == 0){
        this.teleArr[i][2]-=10;
      }
      noFill();

      let t1 = this.teleArr[i][0];
      let t2 = this.teleArr[i][1];
      let t3 = this.teleArr[i][2]/2;

      stroke(70+t3*2,70,255);
      ellipse(t1*50+25,t2*50+25,100-t3,100-t3);
      strokeWeight(3);
      ellipse(t1*50+25,t2*50+25,120-t3,60-t3)
      ellipse(t1*50+25,t2*50+25,60-t3,120-t3)
      ellipse(t1*50+25,t2*50+25,60-t3,60-t3);
    }


  }
}
//hi
playerCutTree(xCoord,yCoord){
  if(dist(this.x,this.y,xCoord,yCoord)==1){
    let quantity = floor(random(1,5));
    if(inv.curItem ==3){
      if(xCoord > this.x){
        if(foreGroundmapTiles[this.x+1][this.y]==tree ||foreGroundmapTiles[this.x+1][this.y]==tree2){
        foreGroundmapTiles[this.x+1][this.y] = undefined;
        floorItemArr.push(new grounditems(logs,quantity,xCoord,yCoord,10,10));
        midGroundTiles[xCoord][yCoord] = treeDead;
      }
      }
      else if(xCoord < this.x){
        if(foreGroundmapTiles[this.x-1][this.y]==tree ||foreGroundmapTiles[this.x-1][this.y]==tree2){
        foreGroundmapTiles[this.x-1][this.y] = undefined;
      floorItemArr.push(new grounditems(logs,quantity,xCoord,yCoord,10,10));
      midGroundTiles[xCoord][yCoord] = treeDead;}
      }
      else if(yCoord > this.y){
        if(foreGroundmapTiles[this.x][this.y+1]==tree ||foreGroundmapTiles[this.x][this.y+1]==tree2){
        foreGroundmapTiles[this.x][this.y+1] = undefined;
      floorItemArr.push(new grounditems(logs,quantity,xCoord,yCoord,10,10));
    midGroundTiles[xCoord][yCoord] = treeDead;}
      }
      else if(yCoord < this.y){
        if(foreGroundmapTiles[this.x][this.y-1]==tree ||foreGroundmapTiles[this.x][this.y-1]==tree2){
        foreGroundmapTiles[this.x][this.y-1] = undefined;
      floorItemArr.push(new grounditems(logs,quantity,xCoord,yCoord,10,10));
      midGroundTiles[xCoord][yCoord] = treeDead;
    }
      }

    }
  }
}

playerBigCutTree(xCoord,yCoord){
    let quantity = floor(random(5,15));
    if(inv.curItem ==3){

        foreGroundmapTiles[xCoord][yCoord] = undefined;
        foreGroundmapTiles[xCoord+1][yCoord] = undefined;
        foreGroundmapTiles[xCoord][yCoord+1] = undefined;
        foreGroundmapTiles[xCoord+1][yCoord+1] = undefined;
        floorItemArr.push(new grounditems(logs,quantity,xCoord,yCoord+1,10,10));
        midGroundTiles[xCoord][yCoord+1] = treeDead;


  }
}







playerDigDeadTree(xCoord,yCoord){
  let quantity = floor(random(1,3));
    if(inv.curItem ==2){
        if(midGroundTiles[xCoord][yCoord]==treeDead){
        midGroundTiles[xCoord][yCoord] = undefined;
        floorItemArr.push(new grounditems(logs,quantity,xCoord,yCoord,10,10));
      }



    }

}
playerMineOre(xCoord,yCoord,type){
  let quantity = floor(random(1,3));
  console.log("HI")
    if(inv.curItem ==1){
        if(foreGroundmapTiles[xCoord][yCoord]==type){
        foreGroundmapTiles[xCoord][yCoord] = undefined;
        floorItemArr.push(new grounditems(type,quantity,xCoord,yCoord,10,10));
      }



    }

}



playerMineRock(xCoord,yCoord){
    let quantity = floor(random(1,5));
    if(inv.curItem ==1){

      if(xCoord > this.x){
        if(foreGroundmapTiles[this.x+1][this.y]==rock ||foreGroundmapTiles[this.x+1][this.y]==rock2){
        foreGroundmapTiles[this.x+1][this.y] = undefined;
        floorItemArr.push(new grounditems(rock,quantity,xCoord,yCoord,10,10));
      }
      }
      else if(xCoord < this.x){
        if(foreGroundmapTiles[this.x-1][this.y]==rock ||foreGroundmapTiles[this.x-1][this.y]==rock2){
        foreGroundmapTiles[this.x-1][this.y] = undefined;
      floorItemArr.push(new grounditems(rock,quantity,xCoord,yCoord,10,10));}
      }
      else if(yCoord > this.y){
        if(foreGroundmapTiles[this.x][this.y+1]==rock ||foreGroundmapTiles[this.x][this.y+1]==rock2){
        foreGroundmapTiles[this.x][this.y+1] = undefined;
      floorItemArr.push(new grounditems(rock,quantity,xCoord,yCoord,10,10));}
      }
      else if(yCoord < this.y){
        if(foreGroundmapTiles[this.x][this.y-1]==rock ||foreGroundmapTiles[this.x][this.y-1]==rock2){
        foreGroundmapTiles[this.x][this.y-1] = undefined;
      floorItemArr.push(new grounditems(rock,quantity,xCoord,yCoord,10,10));}
      }

    }

}
playerDigBush(xCoord,yCoord){

    if(inv.curItem ==2){
      if(xCoord > this.x){
        if(foreGroundmapTiles[this.x+1][this.y]==bush){
        foreGroundmapTiles[this.x+1][this.y] = undefined;
        floorItemArr.push(new grounditems(bush,1,xCoord,yCoord,10,10));
      }
      }
      else if(xCoord < this.x){
        if(foreGroundmapTiles[this.x-1][this.y]==bush){
        foreGroundmapTiles[this.x-1][this.y] = undefined;
      floorItemArr.push(new grounditems(bush,1,xCoord,yCoord,10,10));}
      }
      else if(yCoord > this.y){
        if(foreGroundmapTiles[this.x][this.y+1]==bush){
        foreGroundmapTiles[this.x][this.y+1] = undefined;
      floorItemArr.push(new grounditems(bush,1,xCoord,yCoord,10,10));}
      }
      else if(yCoord < this.y){
        if(foreGroundmapTiles[this.x][this.y-1]==bush){
        foreGroundmapTiles[this.x][this.y-1] = undefined;
      floorItemArr.push(new grounditems(bush,1,xCoord,yCoord,10,10));}
      }

    }

}
playerDigDirt(xCoord,yCoord){

    if(inv.curItem ==2){
      if(xCoord > this.x){
        if(mapTiles[this.x+1][this.y]==dirt){
        mapTiles[this.x+1][this.y] = dirtHole;
        floorItemArr.push(new grounditems(dirtInv,2,xCoord,yCoord,10,10));
      }
      }
      else if(xCoord < this.x){
        if(mapTiles[this.x-1][this.y]==dirt){
        mapTiles[this.x-1][this.y] = dirtHole;
      floorItemArr.push(new grounditems(dirtInv,2,xCoord,yCoord,10,10));}
      }
      else if(yCoord > this.y){
        if(mapTiles[this.x][this.y+1]==dirt){
        mapTiles[this.x][this.y+1] = dirtHole;
      floorItemArr.push(new grounditems(dirtInv,2,xCoord,yCoord,10,10));}
      }
      else if(yCoord < this.y){
        if(mapTiles[this.x][this.y-1]==dirt){
        mapTiles[this.x][this.y-1] = dirtHole;
      floorItemArr.push(new grounditems(dirtInv,2,xCoord,yCoord,10,10));}
      }

    }

}


















pickUpNoGroundItem(typePic,quantity){
  for(let j = 2;j<17;j++){
    if (inv.invantArray[j] == typePic){
    invArrItemCount[j] += quantity;
    return 0;
  }
  }
  inv.invantArray.push(typePic);

  for(let j = 2;j<17;j++){
    if(inv.invantArray[j]==typePic)
  invArrItemCount[j]= quantity-1;
  }
  return 0;
}



pickUp(){
  for(let i = 0;i<floorItemArr.length;i++){
  if(this.x == floorItemArr[i].x && this.y == floorItemArr[i].y){
    for(let j = 2;j<17;j++){
      if (inv.invantArray[j] == floorItemArr[i].type){
      invArrItemCount[j] += floorItemArr[i].quantity;
      floorItemArr.splice(i,1);
      return 0;}
    }
    inv.invantArray.push(floorItemArr[i].type);
    for(let j = 2;j<17;j++){
      if(inv.invantArray[j]==floorItemArr[i].type)
    invArrItemCount[j]= floorItemArr[i].quantity-1;
    }
    floorItemArr.splice(i,1);
    return 0;
  }
}
}

playerCutShroom(xCoord,yCoord){
    console.log("HI")
      if(xCoord > this.x){
        if(foreGroundmapTiles[this.x+1][this.y]==tripShroom){
        foreGroundmapTiles[this.x+1][this.y] = undefined;
        floorItemArr.push(new grounditems(tripShroom,2,xCoord,yCoord,10,10));}

      }
      else if(xCoord < this.x){
        if(foreGroundmapTiles[this.x-1][this.y]==tripShroom){
        foreGroundmapTiles[this.x-1][this.y] = undefined;
      floorItemArr.push(new grounditems(tripShroom,2,xCoord,yCoord,10,10));}
      }
      else if(yCoord > this.y){
        if(foreGroundmapTiles[this.x][this.y+1]==tripShroom){
        foreGroundmapTiles[this.x][this.y+1] = undefined;
      floorItemArr.push(new grounditems(tripShroom,2,xCoord,yCoord,10,10));}
      }
      else if(yCoord < this.y){
        if(foreGroundmapTiles[this.x][this.y-1]==tripShroom){
        foreGroundmapTiles[this.x][this.y-1] = undefined;
      floorItemArr.push(new grounditems(tripShroom,2,xCoord,yCoord,10,10));}
      }


}




}
