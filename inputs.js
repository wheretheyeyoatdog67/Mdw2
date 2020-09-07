function keyPressed() {

//TEMP GO undergroundFloor
  if (keyCode ==32) {
    if(isAboveGround == true){
      if(mapTiles[player.x][player.y] == dirtHole){isAboveGround = false
        campFirePlaceArr=[];}}
    else {campFirePlaceArr=[];
      isAboveGround = true;}
  }

//MOVEMENT WASD
if(!player.isLayingDown){
  if (keyCode ==65) {
    if (!player.playerCollision(65)){

      if (player.x == 0 && curMapRX != 0){
      player.moveToNextRegion(-1,0)
      }
      else if (player.x == 0&&curMapRX == 0){}
      else player.move(-1,0);
      player.hungerVal -=1;
   }
  }

  if (keyCode ==68) {
    if (!player.playerCollision(68)){
      if (player.x == 13 && curMapRX != 9){
        player.moveToNextRegion(1,0)
        }
        else if (player.x == 13&&curMapRX == 9){}
        else player.move(1,0);
        player.hungerVal -=1;
      }
    }
  if (keyCode ==83) {
    if (!player.playerCollision(83)){
      if (player.y == 13 && curMapRY != 9){
        player.moveToNextRegion(0,1)
      }
      else if (player.y == 13&&curMapRY == 9){}
      else player.move(0,1);
      player.hungerVal -=1;
    }
  }
  if (keyCode ==87) {
    if (!player.playerCollision(87)){
      if (player.y == 0&& curMapRY != 0){
        player.moveToNextRegion(0,-1)
        }
        else if (player.y == 0 &&curMapRY == 0){}
        else player.move(0,-1);
        player.hungerVal -=1;
    }
  }
}else if( keyCode ==65 ||keyCode ==68||keyCode ==83|| keyCode ==87){
  player.isLayingDown = false;
  foreGroundmapTiles[player.x][player.y] = hamockL;
  foreGroundmapTiles[player.x+1][player.y] = hamockR;
  timeMult = 250;
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
for(let i = 0;i<14;i++){
  for(let j = 0;j<14;j++){
    if(foreGroundmapTiles[i][j]==campfire || midGroundTiles[i][j]== torch)
    {
      campFirePlaceArr.push([i,j])
    }
  }
}
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
  for(let i = 0;i<14;i++){
    for(let j = 0;j<14;j++){
      if(foreGroundmapTiles[i][j]==campfire || midGroundTiles[i][j]== torch)
      {
        campFirePlaceArr.push([i,j])
      }
    }
  }
  }

}

//invant
if (keyCode >=49 && keyCode <=57) {
  inv.curItem = keyCode - 48;
}
}



function mouseClicked() {
  if(introState==true)introState = false;
let xCoord = floor(mouseX/50);
let yCoord = floor(mouseY/50);
console.log(mouseX);
console.log(mouseY);
//spawnCabin(xCoord,yCoord);
if(dist(xCoord,yCoord,player.x,player.y)==1){
// if(inv.invantArray[inv.curItem-1] == logs){
//   foreGroundmapTiles[xCoord][yCoord] = campfire;
//   invArrItemCount[inv.curItem-1] -= 1;
//   campFirePlaceArr.push([xCoord,yCoord]);
// }

if(foreGroundmapTiles[xCoord][yCoord] == tree){
  player.playerCutTree(xCoord,yCoord);

}
if(foreGroundmapTiles[xCoord][yCoord] == ironOre || foreGroundmapTiles[xCoord][yCoord] == coalOre){
  player.playerMineOre(xCoord,yCoord,foreGroundmapTiles[xCoord][yCoord]);

}
if(foreGroundmapTiles[xCoord][yCoord] == hamockR){
  foreGroundmapTiles[xCoord][yCoord] = playerLayingDownR;
  foreGroundmapTiles[xCoord-1][yCoord] = playerLayingDownL;
  player.isLayingDown = true;
  player.x = xCoord-1;
  player.y = yCoord;
  timeMult = 10;
}
if(foreGroundmapTiles[xCoord][yCoord] == hamockL){
  foreGroundmapTiles[xCoord][yCoord] = playerLayingDownL;
  foreGroundmapTiles[xCoord+1][yCoord] = playerLayingDownR;
  player.isLayingDown = true;
  player.x = xCoord;
  player.y = yCoord;
  timeMult = 10;
}
//
//if(foreGroundmapTiles[xCoord][yCoord] == tree2||foreGroundmapTiles[xCoord-1][yCoord]==tree2||foreGroundmapTiles[xCoord][yCoord-1]==tree2||foreGroundmapTiles[xCoord-1][yCoord-1]==tree2){
if(foreGroundmapTiles[xCoord][yCoord] == tree2 || foreGroundmapTiles[xCoord][yCoord] == transparent){
  if(foreGroundmapTiles[xCoord][yCoord] == transparent){
    if(foreGroundmapTiles[xCoord-1][yCoord] == tree2){
      player.playerBigCutTree(xCoord-1,yCoord);
    }
    else if (foreGroundmapTiles[xCoord-1][yCoord-1] == tree2){
      player.playerBigCutTree(xCoord-1,yCoord-1);
    }
    else if (foreGroundmapTiles[xCoord][yCoord-1] == tree2){
      player.playerBigCutTree(xCoord,yCoord-1);
    }
  }
  else player.playerBigCutTree(xCoord,yCoord);

}
else if(foreGroundmapTiles[xCoord][yCoord] == tripShroom){
  player.playerCutShroom(xCoord,yCoord);
}
else if(foreGroundmapTiles[xCoord][yCoord] == rock||foreGroundmapTiles[xCoord][yCoord] == rock2){
  player.playerMineRock(xCoord,yCoord);
}
else if(foreGroundmapTiles[xCoord][yCoord] == bbush){
  if(random(0,50)<25){
  foreGroundmapTiles[xCoord][yCoord] = bush;}
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
else if(inv.invantArray[inv.curItem-1] == torch){
  midGroundTiles[xCoord][yCoord] = torch;
  campFirePlaceArr.push([xCoord,yCoord])
  //invArrItemCount[inv.curItem-1] -= 1;
}
else if(inv.invantArray[inv.curItem-1] == coalOre){

  if(foreGroundmapTiles[xCoord][yCoord] == furnaceOff || foreGroundmapTiles[xCoord][yCoord] == furnaceOn)
  {
    console.log("hhi")
    foreGroundmapTiles[xCoord][yCoord] = furnaceOn
    //invArrItemCount[inv.curItem-1] -= 1;
  }
  else if(foreGroundmapTiles[xCoord-1][yCoord] == furnaceOff || foreGroundmapTiles[xCoord-1][yCoord] == furnaceOn){
    foreGroundmapTiles[xCoord-1][yCoord] = furnaceOn
    //invArrItemCount[inv.curItem-1] -= 1;
    console.log("hhi2")
  }

}
if(inv.invantArray[inv.curItem-1] == spearInv){

  for(let i = 0;i< muffArr.length;i++){
    if(muffArr[i].isFishStat  == true){
      console.log("hi")
    if (muffArr[i].x == xCoord && muffArr[i].y == yCoord){
      muffArr.splice(i,1);
      player.pickUpNoGroundItem(fishL,1);
    }
    }
  }
}
if(inv.invantArray[inv.curItem-1] == fishL){
  if(foreGroundmapTiles[xCoord][yCoord] = campfire){
    player.pickUpNoGroundItem(fishCooked,1);
    invArrItemCount[inv.curItem-1] -= 1;
  }
}
if(inv.invantArray[inv.curItem-1] == campfire){
  foreGroundmapTiles[xCoord][yCoord] = campfire;
  campFirePlaceArr.push([xCoord,yCoord]);
  invArrItemCount[inv.curItem-1] -= 1;
}
if(inv.invantArray[inv.curItem-1] == dirtInv){
  mapTiles[xCoord][yCoord] = dirt;

  invArrItemCount[inv.curItem-1] -= 1;
}
if(inv.invantArray[inv.curItem-1] == wheetSeed && mapTiles[xCoord][yCoord] == dirt){
  midGroundTiles[xCoord][yCoord] = wheet1

  invArrItemCount[inv.curItem-1] -= 1;
}
if(inv.invantArray[inv.curItem-1] == furnaceOffInv){
  if(foreGroundmapTiles[xCoord][yCoord] == undefined){
    if(foreGroundmapTiles[xCoord+1][yCoord] == undefined){
      if(foreGroundmapTiles[xCoord+1][yCoord+1] == undefined){
        if(foreGroundmapTiles[xCoord][yCoord+1] == undefined){
          foreGroundmapTiles[xCoord][yCoord] = furnaceOff;
        }
      }
    }
  }
}
if(inv.invantArray[inv.curItem-1] == hamock){
  if(foreGroundmapTiles[xCoord-1][yCoord] == tree){
    if(foreGroundmapTiles[xCoord+2][yCoord] == tree){
      foreGroundmapTiles[xCoord][yCoord] = hamockL;
      foreGroundmapTiles[xCoord+1][yCoord] = hamockR;
    }
  }
  else if(foreGroundmapTiles[xCoord+1][yCoord] == tree){
    if(foreGroundmapTiles[xCoord-2][yCoord] == tree){
      foreGroundmapTiles[xCoord][yCoord] = hamockR;
      foreGroundmapTiles[xCoord-1][yCoord] = hamockL;
    }
  }

  //invArrItemCount[inv.curItem-1] -= 1;
}
if(midGroundTiles[xCoord][yCoord] == wheet3){
  player.pickUpNoGroundItem(wheetInv,floor(random(1,5)));
  player.pickUpNoGroundItem(wheetSeed,floor(random(1,5)));
  midGroundTiles[xCoord][yCoord] = undefined;

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
if(inv.invantArray[inv.curItem-1] == fishCooked){
  player.hungerVal += 100;
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
  if(craft.cabinCraft == true){
  buyToInv(craft.cabinCraft,craft.cabinQuan,craft.cabinSupp)}
  else if(craft.campFireCraft == true){
  buyToInv(craft.campFireCraft,craft.campFireQuan,craft.campFireSupp)}

}









}

function buyToInv(object,quantity,supplies){
  if(object == true){

    for(let i = 0;i<inv.invantArray.length;i++){

      craft.cabinCraft = false;
      for(let j = 0;j<supplies.length;j++){
      if(inv.invantArray[i] == supplies[j]){
        invArrItemCount[i] -= quantity[j];
      }
}

}
player.pickUpNoGroundItem(craft.invIcon,1);

}
}


function mouseWheel(event) {

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
