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

playerCollision(dir){
  //Left
  if(dir == 65){
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
}
