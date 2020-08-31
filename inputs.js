function keyPressed() {

//TEMP GO undergroundFloor
  if (keyCode ==32) {
    if(isAboveGround == true){isAboveGround = false}
    else isAboveGround = true;
  }

//MOVEMENT WASD
  if (keyCode ==65) {
    if (!player.playerCollision(65)){

      if (player.x == 0){
      player.moveToNextRegion(-1,0)
      }
      else player.move(-1,0);
   }
  }

  if (keyCode ==68) {
    if (!player.playerCollision(68)){
      if (player.x == 13){
        player.moveToNextRegion(1,0)
        }
        else player.move(1,0);
      }
    }
  if (keyCode ==83) {
    if (!player.playerCollision(83)){
      if (player.y == 13){
        player.moveToNextRegion(0,1)
      }
      else player.move(0,1);
    }
  }
  if (keyCode ==87) {
    if (!player.playerCollision(87)){
      if (player.y == 0){
        player.moveToNextRegion(0,-1)
        }
        else player.move(0,-1);
    }
  }



if(isAboveGround == true){
if(mapGroups[curMapRX][curMapRY][0] == undefined){
spawnMap();
//spawnMap()
mapGroups[curMapRX][curMapRY][0] = mapTiles
mapGroups[curMapRX][curMapRY][1] = foreGroundmapTiles;
animalGroups[curMapRX][curMapRY][0] = muffArr;
}else {
mapTiles = mapGroups[curMapRX][curMapRY][0];
foreGroundmapTiles= mapGroups[curMapRX][curMapRY][1];
muffArr = animalGroups[curMapRX][curMapRY][0];
}}
else {
  if(undergroundGroups[curMapRX][curMapRY][0] == undefined){
  spawnMap();
  undergroundGroups[curMapRX][curMapRY][0] = mapTiles
  undergroundGroups[curMapRX][curMapRY][1] = foreGroundmapTiles;}
  else {
  mapTiles = undergroundGroups[curMapRX][curMapRY][0];
  foreGroundmapTiles= undergroundGroups[curMapRX][curMapRY][1];
  muffArr = [];
  }

}

//invant
if (keyCode >=49 && keyCode <=57) {
  inv.curItem = keyCode - 48;
}
}



function mouseClicked() {
let xCoord = floor(mouseX/50);
let yCoord = floor(mouseY/50);
player.playerCutTree(xCoord,yCoord);
}
