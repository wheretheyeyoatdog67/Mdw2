function keyPressed() {

//TEMP GO undergroundFloor
  if (keyCode ==32) {
    if(isAboveGround == true){
      if(mapTiles[player.x][player.y] == dirtHole)isAboveGround = false}
    else isAboveGround = true;
  }

//MOVEMENT WASD
  if (keyCode ==65) {
    if (!player.playerCollision(65)){

      if (player.x == 0){
      player.moveToNextRegion(-1,0)
      }
      else player.move(-1,0);
      player.hungerVal -=1;
   }
  }

  if (keyCode ==68) {
    if (!player.playerCollision(68)){
      if (player.x == 13){
        player.moveToNextRegion(1,0)
        }
        else player.move(1,0);
        player.hungerVal -=1;
      }
    }
  if (keyCode ==83) {
    if (!player.playerCollision(83)){
      if (player.y == 13){
        player.moveToNextRegion(0,1)
      }
      else player.move(0,1);
      player.hungerVal -=1;
    }
  }
  if (keyCode ==87) {
    if (!player.playerCollision(87)){
      if (player.y == 0){
        player.moveToNextRegion(0,-1)
        }
        else player.move(0,-1);
        player.hungerVal -=1;
    }
  }
if (keyCode ==67) {
  if(craft.isCraft == true){
    craft.isCraft = false;
  }else craft.isCraft = true;
}
if (keyCode ==81) {
  if(tool.isSheifed==false)
  tool.isSheifed = true;
  else {
    tool.isSheifed = false;
  }
}
if (keyCode ==77) {
  if(inv.mapOpen==false)
  inv.mapOpen = true;
  else {
    inv.mapOpen = false;
  }
}


if(isAboveGround == true){
if(mapGroups[curMapRX][curMapRY][0] == undefined){
spawnMap();
//spawnMap()
mapGroups[curMapRX][curMapRY][0] = mapTiles
mapGroups[curMapRX][curMapRY][1] = foreGroundmapTiles;
mapGroups[curMapRX][curMapRY][2] = midGroundTiles;
animalGroups[curMapRX][curMapRY][0] = muffArr;
}else {
mapTiles = mapGroups[curMapRX][curMapRY][0];
foreGroundmapTiles= mapGroups[curMapRX][curMapRY][1];
midGroundTiles = mapGroups[curMapRX][curMapRY][2];
muffArr = animalGroups[curMapRX][curMapRY][0];
}}
else {
  if(undergroundGroups[curMapRX][curMapRY][0] == undefined){
  spawnMap();
  undergroundGroups[curMapRX][curMapRY][0] = mapTiles
  undergroundGroups[curMapRX][curMapRY][1] = foreGroundmapTiles;
  undergroundGroups[curMapRX][curMapRY][2] = midGroundTiles;}
  else {
  mapTiles = undergroundGroups[curMapRX][curMapRY][0];
  foreGroundmapTiles= undergroundGroups[curMapRX][curMapRY][1];
  midGroundTiles= undergroundGroups[curMapRX][curMapRY][2];
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
console.log(mouseX);
console.log(mouseY);
//spawnCabin(xCoord,yCoord);
if(dist(xCoord,yCoord,player.x,player.y)==1){
if(inv.invantArray[inv.curItem-1] == logs){
  foreGroundmapTiles[xCoord][yCoord] = campfire;
  invArrItemCount[inv.curItem-1] -= 1;
}

else if(foreGroundmapTiles[xCoord][yCoord] == tree || foreGroundmapTiles[xCoord][yCoord] == tree2){
  player.playerCutTree(xCoord,yCoord);

}
else if(foreGroundmapTiles[xCoord][yCoord] == tripShroom){
  player.playerCutShroom(xCoord,yCoord);
}
else if(foreGroundmapTiles[xCoord][yCoord] == rock||foreGroundmapTiles[xCoord][yCoord] == rock2){
  player.playerMineRock(xCoord,yCoord);
}
else if(foreGroundmapTiles[xCoord][yCoord] == bbush){
  foreGroundmapTiles[xCoord][yCoord] = bush;
  player.pickUpNoGroundItem(berries,2);
  //floorItemArr.push(new grounditems(berries,5,player.x,player.y,0,0));
}
else if(foreGroundmapTiles[xCoord][yCoord] == bush){

  player.playerDigBush(xCoord,yCoord);
  //floorItemArr.push(new grounditems(berries,5,player.x,player.y,0,0));
}
else if(mapTiles[xCoord][yCoord] == dirt){

  player.playerDigDirt(xCoord,yCoord);
  //floorItemArr.push(new grounditems(berries,5,player.x,player.y,0,0));
}
else if(midGroundTiles[xCoord][yCoord] == treeDead){

  player.playerDigDeadTree(xCoord,yCoord);
  //floorItemArr.push(new grounditems(berries,5,player.x,player.y,0,0));
}
else if(inv.invantArray[inv.curItem-1] == cabinInv){
  spawnCabin(xCoord,yCoord);
  cabinPlaceArr.push([curMapRX,curMapRY]);
  invArrItemCount[inv.curItem-1] -= 1;
}
else if(inv.invantArray[inv.curItem-1] == bush){
  foreGroundmapTiles[xCoord][yCoord] = bush;
  invArrItemCount[inv.curItem-1] -= 1;
}


}

if(inv.invantArray[inv.curItem-1] == tripShroom){
  mushRoomTrip = true;
  tripClock = 0;
  triplevel += 1;
  player.hungerVal -= 5;
  invArrItemCount[inv.curItem-1] -= 1;
}
if(inv.invantArray[inv.curItem-1] == berries){
  player.hungerVal += 10;
  if( player.hungerVal>480)player.hungerVal = 480;
  invArrItemCount[inv.curItem-1] -= 1;
}
if(inv.invantArray[inv.curItem-1] == rock){
  midGroundTiles[xCoord][yCoord] = cobbleroad;
  invArrItemCount[inv.curItem-1] -= 1;

}
if(inv.invantArray[inv.curItem-1] == wandInv){
  player.x = xCoord;
  player.y = yCoord;
  player.teleport(xCoord,yCoord,100);
  player.hungerVal -= 30;
}

if(craft.isCraft){
  buyToInv(craft.cabinCraft,craft.cabinQuan,craft.cabinSupp)

}









}

function buyToInv(object,quantity,supplies){
  if(object == true){
    console.log("hi")
    for(let i = 0;i<inv.invantArray.length;i++){
      console.log(i);
      craft.cabinCraft = false;
      for(let j = 0;j<supplies.length;j++){
      if(inv.invantArray[i] == supplies[j]){
        invArrItemCount[i] -= quantity[j];
      }
}

}
inv.invantArray.push(cabinInv);
}
}



function mouseWheel(event) {
  console.log(event.delta)
  if(event.delta < 0){
    if(inv.curItem == 1){
      inv.curItem = 1;
    }
    else inv.curItem -= 1;
  }
  else {
    if(inv.curItem == 18){
      inv.curItem = 18;
    }
    else inv.curItem += 1};


}
