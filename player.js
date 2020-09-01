class player{
  constructor(){
    this.x = 4;
    this.y = 4;
    this.hungerVal = 480;

  }

draw(){
  this.hunger();
  image(playerPic,this.x*50,this.y*50);
}
hunger(){
  if(gameClock%360==0){
    this.hungerVal -=5;
  }
}
move(x,y){
  this.x += x;
  this.y += y;
  this.pickUp();

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

playerCutTree(xCoord,yCoord){
  if(dist(this.x,this.y,xCoord,yCoord)==1){
    if(inv.curItem ==2){
      if(xCoord > this.x){
        if(foreGroundmapTiles[this.x+1][this.y]==tree ||foreGroundmapTiles[this.x+1][this.y]==tree2){
        foreGroundmapTiles[this.x+1][this.y] = undefined;
        floorItemArr.push(new grounditems(logs,5,xCoord,yCoord,10,10));
      }
      }
      else if(xCoord < this.x){
        if(foreGroundmapTiles[this.x-1][this.y]==tree ||foreGroundmapTiles[this.x-1][this.y]==tree2){
        foreGroundmapTiles[this.x-1][this.y] = undefined;
      floorItemArr.push(new grounditems(logs,5,xCoord,yCoord,10,10));}
      }
      else if(yCoord > this.y){
        if(foreGroundmapTiles[this.x][this.y+1]==tree ||foreGroundmapTiles[this.x][this.y+1]==tree2){
        foreGroundmapTiles[this.x][this.y+1] = undefined;
      floorItemArr.push(new grounditems(logs,5,xCoord,yCoord,10,10));}
      }
      else if(yCoord < this.y){
        if(foreGroundmapTiles[this.x][this.y-1]==tree ||foreGroundmapTiles[this.x][this.y-1]==tree2){
        foreGroundmapTiles[this.x][this.y-1] = undefined;
      floorItemArr.push(new grounditems(logs,5,xCoord,yCoord,10,10));}
      }

    }
  }
}

pickUpNoGroundItem(typePic,quantity){
  for(let j = 2;j<9;j++){
    if (inv.invantArray[j] == typePic){
    invArrItemCount[j] += quantity;
    return 0;}
  }
  inv.invantArray.push(typePic);
  return 0;
}



pickUp(){
  for(let i = 0;i<floorItemArr.length;i++){
  if(this.x == floorItemArr[i].x && this.y == floorItemArr[i].y){
    for(let j = 2;j<9;j++){
      if (inv.invantArray[j] == floorItemArr[i].type){
      invArrItemCount[j] += 1;
      floorItemArr.splice(i,1);
      return 0;}
    }
    inv.invantArray.push(floorItemArr[i].type);
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
        floorItemArr.push(new grounditems(tripShroom,5,xCoord,yCoord,10,10));}

      }
      else if(xCoord < this.x){
        if(foreGroundmapTiles[this.x-1][this.y]==tripShroom){
        foreGroundmapTiles[this.x-1][this.y] = undefined;
      floorItemArr.push(new grounditems(tripShroom,5,xCoord,yCoord,10,10));}
      }
      else if(yCoord > this.y){
        if(foreGroundmapTiles[this.x][this.y+1]==tripShroom){
        foreGroundmapTiles[this.x][this.y+1] = undefined;
      floorItemArr.push(new grounditems(tripShroom,5,xCoord,yCoord,10,10));}
      }
      else if(yCoord < this.y){
        if(foreGroundmapTiles[this.x][this.y-1]==tripShroom){
        foreGroundmapTiles[this.x][this.y-1] = undefined;
      floorItemArr.push(new grounditems(tripShroom,5,xCoord,yCoord,10,10));}
      }


}




}
