let width = 900;
let height = 700;
let introState = false;

let curMapRX = 2;
let curMapRY = 2;
let mapGroups = [];
let mapTiles = [];
let midGroundTiles = [];
let animalGroups = [];
let foreGroundmapTiles = [];
let gameClock = 0;
let muffArr = [];
let musicOn = false;
let isAboveGround = true;
let timeOfDay = 6;
let timeDir = 1;
let undergroundTiles = [];
let undergroundGroups = [];

let floorItemArr = [];
let invArrItemCount = [];
let cabinPlaceArr = [];
let campFirePlaceArr = [];
let mushRoomTrip = false;
var inc = 0;
var incDir = 1;
let tripClock = 0;
let triplevel = 0;
let introTimer = 0;
let lightArr = [];
let timeMult = 250;



function preload() {
  grass = loadImage('assets/tiles/grass.png');
  dirt = loadImage('assets/tiles/dirt.png');
  sand1 = loadImage('assets/tiles/desert/sand1.png');
  sand2 = loadImage('assets/tiles/desert/sand2.png');
  dirtInv = loadImage('assets/tiles/dirtInv.png');
  dirtHole = loadImage('assets/tiles/dirtHole.png');
  cobbleroad = loadImage('assets/tiles/cobbleroad.png');
  tree = loadImage('assets/tiles/tree2.png');
  tree2 = loadImage('assets/tiles/tree2.png');
  rock = loadImage('assets/tiles/rock.png');
  rock2 = loadImage('assets/tiles/rock2.png');
  logs = loadImage('assets/tiles/logs.png');
  bush = loadImage('assets/tiles/ebush.png');
  cactus1 = loadImage('assets/tiles/desert/cactus1.png');
  cactus2 = loadImage('assets/tiles/desert/cactus2.png');
  cactus3 = loadImage('assets/tiles/desert/cactus3.png');
  berries = loadImage('assets/tiles/berries.png');
  bbush = loadImage('assets/tiles/berrybush.png');
  grassMid = loadImage('assets/tiles/grassMid.png');
  following = loadImage('assets/tiles/angry.png');
  treeDead = loadImage('assets/tiles/treeDead.png');
  hamock = loadImage('assets/tiles/hamock.png');
  playerLayingDownL = loadImage('assets/tiles/2wide/playerLayingDownL.png');
  playerLayingDownR = loadImage('assets/tiles/2wide/playerLayingDownR.png');
  hamockL = loadImage('assets/tiles/2wide/hamockL.png');
  hamockR = loadImage('assets/tiles/2wide/hamockR.png');
  //Animals
  muffloPicR = loadImage('assets/tiles/mufflo.png');
  muffloPicL = loadImage('assets/tiles/muffloL.png');
  snakePicR = loadImage('assets/tiles/desert/snake.png');
  snakePicL = loadImage('assets/tiles/desert/snakeL.png');
  sheepR = loadImage('assets/tiles/animals/SheepR.png');
  sheepL = loadImage('assets/tiles/animals/SheepL.png');
  ratR = loadImage('assets/tiles/animals/RatR.png')
  ratL= loadImage('assets/tiles/animals/RatL.png')

  //LAKE Biome
  water1 = loadImage('assets/tiles/lake/water1.png');
  shells1 = loadImage('assets/tiles/lake/shells1.png');
  shells2 = loadImage('assets/tiles/lake/shells2.png');
  shells3 = loadImage('assets/tiles/lake/shells3.png');
  shells4 = loadImage('assets/tiles/lake/shells4.png');
  reeds = loadImage('assets/tiles/reeds.png');
  fishL =loadImage('assets/tiles/lake/fishL.png');
  fishR =loadImage('assets/tiles/lake/fishR.png');
  fishCooked =loadImage('assets/tiles/lake/fishCooked.png');
  furnaceOn = loadImage('assets/tiles/furnace.png');
  furnaceOff =  loadImage('assets/tiles/furnaceOff.png');
  furnaceOffInv =  loadImage('assets/tiles/furnaceOffInv.png');
  //MUSHROOM Biome
  floor1 = loadImage('assets/tiles/mush/floor1.png');
  bigShroom = loadImage('assets/tiles/shroom2.png')
  midMush = loadImage('assets/tiles/mushroom.png')

  //UNDERGROUND
  stalgmite = loadImage('assets/tiles/underground/stalagmite.png')
  ironOre = loadImage('assets/tiles/underground/ironOre.png')
  coalOre = loadImage('assets/tiles/underground/coalOre.png')


  playerPic = loadImage('assets/tiles/player.png');
  invPic = loadImage('assets/invant.png');
  woodPanel = loadImage('assets/wood.png');
  grass2 = loadImage('assets/tiles/grass2.png');
  underGFloor = loadImage('assets/tiles/undergroundFloor.png');
  underGRock = loadImage('assets/tiles/underGRock.png');
  pickaxe1 = loadImage('assets/tools/pickaxe1.png');
  wand = loadImage('assets/tools/wand.png');
  wandInv = loadImage('assets/tools/wandInv.png');
  campfire = loadImage('assets/campfire.png');
  campfireCraft = loadImage('assets/campfire.png');
  tripShroom = loadImage('assets/tiles/mush.png');
  tomb = loadImage('assets/tools/tomb.png');
  cabin = loadImage('assets/tiles/cabin.png');
  cabinInv = loadImage('assets/tiles/cabin.png');
  transparent = loadImage('assets/tiles/transparent.png');
  axe1 = loadImage('assets/tools/axe1.png');
  shovel = loadImage('assets/tools/shovel.png');
  song = loadSound('assets/music/mainSong.mp3');

  torch = loadImage('assets/tools/torch.png');
  spearInv = loadImage('assets/tools/spearInv.png');
  spear = loadImage('assets/tools/spear.png');
  chain = loadImage('assets/crafting/chain.png');


  //intro
  introPic = loadImage('assets/intro/pic.png');
  //vid.size(0, 200);

  //Plants
  wheetSeed = loadImage('assets/seeds/wheetseed.png');
  wheetInv = loadImage('assets/seeds/wheetInv.png');
  wheet1 = loadImage('assets/seeds/wheet1.png');
  wheet2 = loadImage('assets/seeds/wheet2.png');
  wheet3 = loadImage('assets/seeds/wheet3.png');

}


function setup() {


  var cnv =createCanvas(width, height);
  cnv.style('display', 'block');

  resizeAssets();
  player = new player();
  inv = new inv();
  tool = new tool(player);
  craft = new craftingWindow();

  setupMapGrid();
  setupMapGroups();
  spawnMap();
  mapGroups[2][2][0] = mapTiles;
  mapGroups[2][2][1] = foreGroundmapTiles;
  mapGroups[2][2][2] = midGroundTiles;
  animalGroups[2][2][0] = muffArr;



  inv.invantItems();

  fillInvCountZero();

  song.setVolume(0.1);

  song.pause();

}

function draw() {
  if(introState == true){
    intro();
  }
  else{
  timeOfDayCalc();
  if (!song.isPlaying()){
    song.play();}
  gameClock += 1;
  if(gameClock>1000){
    gameClock = 0;
  }
  let cabinPosI = [];
  let cabinPosJ = [];
  let bigShroomPosI = [];
  let bigShroomPosJ = [];
  let bigTreeX = [];
  let bigTreeY = [];
  let stagX = [];
  let stagY = [];
  let furX =[];
  let furY = [];
  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
      if(midGroundTiles[i][j]==wheet1){
        plantUpdate(wheet1,i,j);
      }else if(midGroundTiles[i][j]==wheet2){
        plantUpdate(wheet2,i,j);
      }
      drawTile(mapTiles[i][j],i,j);
      if(midGroundTiles[i][j]!=undefined)drawTile(midGroundTiles[i][j],i,j);
      let curT = foreGroundmapTiles[i][j];
      if (curT != undefined){
        if(curT == cabin){
          cabinPosI.push(i);
          cabinPosJ.push(j);
        }
        if(curT == bigShroom){
          bigShroomPosI.push(i);
          bigShroomPosJ.push(j);
        }
        if(curT == tree2){
          bigTreeX.push(i);
          bigTreeY.push(j);
        }
        if(curT == stalgmite){
          stagX.push(i);
          stagY.push(j);
        }
        if(curT == furnaceOff || curT == furnaceOn){
          furX.push(i);
          furY.push(j);
        }
        else drawTile(foreGroundmapTiles[i][j],i,j)
        }
      }
  }

  for (let i = 0; i<cabinPosI.length;i++){
    drawTile(foreGroundmapTiles[cabinPosI[i]][cabinPosJ[i]],cabinPosI[i],cabinPosJ[i])
  }
  for (let i = 0; i<bigShroomPosI.length;i++){
    drawTile(foreGroundmapTiles[bigShroomPosI[i]][bigShroomPosJ[i]],bigShroomPosI[i],bigShroomPosJ[i])
  }
  for (let i = 0; i<stagX.length;i++){
    drawTile(foreGroundmapTiles[stagX[i]][stagY[i]],stagX[i],stagY[i])
  }
  for (let i = 0; i<bigTreeX.length;i++){
    drawTile(foreGroundmapTiles[bigTreeX[i]][bigTreeY[i]],bigTreeX[i],bigTreeY[i])
  }
  for (let i = 0; i<furX.length;i++){
    drawTile(foreGroundmapTiles[furX[i]][furY[i]],furX[i],furY[i])
  }
  //drawMufflo
  for (let i = 0; i < muffArr.length;i++){
    muffArr[i].draw();
    muffArr[i].move();
  }
  for(let i = 0;i<floorItemArr.length;i++){
    floorItemArr[i].update();
  }
  player.draw();
  if(!player.isLayingDown)tool.update(player);
  inv.drawInv();





//CaveShade and Sun
if(!isAboveGround){
  for(let i = 0;i<14;i++){
    for(let j = 0;j<14;j++){
      if(inv.curItem == 5){
      if(dist(i,j,player.x,player.y)<2.4){
        lightArr[i][j] = 1;
      }
    }
    for(let q = 0;q < campFirePlaceArr.length;q++){
      if(dist(i,j,campFirePlaceArr[q][0],campFirePlaceArr[q][1])<2.4){
       lightArr[i][j] = 1;
      }
    }
    }
  }

  for(let i = 0;i<14;i++){
    for(let j = 0;j<14;j++){
      if(lightArr[i][j] == 1){
        colorMode(RGB);
        fill(255,255,0,20+ gameClock%15);
      }
      else {
        colorMode(HSB);
        fill(0,0,0,.94);
      }
      lightArr[i][j] = 0;
      rect(50*i,50*j,50,50);
    }}
colorMode(RGB);
}
else{
//fill(207,181,59,10);

if(timeOfDay < 6){

  colorMode(HSB);
  fill(0,0,0,.2+(6-timeOfDay)/12);
  for(let i = 0;i<14;i++){
    for(let j = 0;j<14;j++){
      if(inv.curItem == 5){
      if(dist(i,j,player.x,player.y)<2.4){
        lightArr[i][j] = 1;
      }
    }
    for(let q = 0;q < campFirePlaceArr.length;q++){
      if(dist(i,j,campFirePlaceArr[q][0],campFirePlaceArr[q][1])<1.3){
       lightArr[i][j] = 1;
      }
    }



    }
  }
  for(let i = 0;i<14;i++){
    for(let j = 0;j<14;j++){
      if(lightArr[i][j] == 1){
        colorMode(RGB);
        fill(255,255,0,20+ gameClock%15);
      }
      else {
        colorMode(HSB);
        fill(0,0,0,.2+(6-timeOfDay)/12);
      }
      lightArr[i][j] = 0;
      rect(50*i,50*j,50,50);
    }}


  colorMode(RGB);}
}



for(let i = 0;i<14;i++){
  for(let j = 0;j<14;j++){
    let curTile = foreGroundmapTiles[i][j];
    if ( curTile == campfire){
      campfireLight(i,j);
    }
    else if ( curTile == bush){
      if (random(0,100) > 99.97){
        foreGroundmapTiles[i][j] = bbush;
      }
    }
    // if(isAboveGround){
    //   if(tileType == bush){
    //     if (random(0,50) > 40){
    //
    //     }
    //   }
    // }
    if(mapTiles[i][j] == water1){
      waterMovement(i,j);
    }

    if(mushRoomTrip == true){
      colorMode(HSB);
      if (gameClock%.5==0){
      inc += incDir;
    }
      if(inc>100||inc<0 ){
        incDir = incDir*-1;

      }
      if(tripClock == 500){
        mushRoomTrip = false;
        tripClock = 0;
        triplevel = 0;
      }
      fill((tan((j)/(i+13))*170)+inc,255,150,.3+triplevel/10);
      rect(50*i,50*j,50,50);

      noFill();
      colorMode(RGB);


    }

    }
//fill(j*i+inc+random(0,20),10,100,.5);
//rect(50*i,50*j,50,50); cloud texture
  }

if(mushRoomTrip == true){
  tripClock += 1;
}

if(craft.isCraft == true){
  craft.draw();
}



}
}





function drawTile(tileType,tileX,tileY){
  //background(70, 70, 90);

  image(tileType,50*tileX,50*tileY);
}
function resizeAssets(){
  grass.resize(50,50);
  grass2.resize(50,50);
  dirt.resize(50,50);
  tree.resize(50,50);
  tree2.resize(100,100);
  rock.resize(50,50);
  rock2.resize(50,50);
  bush.resize(50,50);
  bbush.resize(50,50);
  berries.resize(40,40);
  muffloPicR.resize(80,80);
  muffloPicL.resize(80,80);
  sheepR.resize(60,60);
  sheepL.resize(60,60);
  ratR.resize(40,40);
  ratL.resize(40,40);
  playerPic.resize(50,50);
  invPic.resize(205,500);
  woodPanel.resize(200,100);
  underGRock.resize(50,50);
  underGFloor.resize(50,50);
  pickaxe1.resize(50,50);
  axe1.resize(50,50);
  shovel.resize(40,40);
  logs.resize(50,50);
  campfire.resize(50,50);
  campfireCraft.resize(100,100);
  tripShroom.resize(50,50);
  cabin.resize(100,100);
  wand.resize(55,60);
  wandInv.resize(60,60);
  dirtInv.resize(50,50);
  dirtHole.resize(50,50);
  cabinInv.resize(50,50);
  chain.resize(100,150);
  tomb.resize(50,50);
  sand1.resize(50,50);
  sand2.resize(50,50);
  cactus1.resize(50,50);
  cactus2.resize(50,50);
  cactus3.resize(50,50);
  snakePicR.resize(50,50);
  snakePicL.resize(50,50);
  water1.resize(50,50);
  shells1.resize(30,30);
  shells2.resize(30,30);
  shells3.resize(30,30);
  shells4.resize(30,30);
  cobbleroad.resize(50,50);
  grassMid.resize(40,40);
  reeds.resize(40,40);
  treeDead.resize(65,65);
  torch.resize(50,50);
  bigShroom.resize(100,100);
  floor1.resize(50,50);
  midMush.resize(50,50);
  following.resize(20,20);
  hamock.resize(50,80);
  stalgmite.resize(100,100);
  ironOre.resize(50,50);
  coalOre.resize(50,50);
  fishL.resize(50,50);
  fishR.resize(50,50);
  spear.resize(50,50);
  spearInv.resize(50,50);
  furnaceOn.resize(100,100);
  furnaceOn.resize(100,100);
  furnaceOff.resize(100,100);
  furnaceOff.resize(100,100);
  fishCooked.resize(50,50);
  introPic.resize(700,700);


  wheetSeed.resize(50,50);
  wheetInv.resize(40,40);
  wheet1.resize(50,50);
  wheet2.resize(50,50);
  wheet3.resize(50,50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function fillInvCountZero(){
  for (let i = 0; i<18;i++){
    invArrItemCount[i] = 0;
  }
}

function spawnMap(){
  floorItemArr = [];
  inv.hasBeenX.push(curMapRX);
  inv.hasBeenY.push(curMapRY);
  setupMapGrid();
  if(isAboveGround == true){
    //CreateWoodlandsBiome();
    let m = (random(0,100));

    if (m <= 50)CreateWoodlandsBiome();
    else if (m <= 80 )CreateLakeBiome();
    else if (m <= 90 )CreateDesertBiome();
    else CreateMushBiome();




}
else{
  //underground
  var yoff = gameClock;

  for (let i = 0; i<14;i++){
    var xoff =gameClock;

    for (let j = 0; j<14;j++){
      var index = (i+j*width)*4;
      var r = noise(xoff,yoff)*255
      xoff += .6;
      //arr[i][y][0] = r;
      if(r>145){
        mapTiles[i][j] = water1
      }else mapTiles[i][j] = underGFloor;
        //let l = caveNoise(i*j+1);
        let  l = random(0,100);
        if(foreGroundmapTiles[i][j]!=transparent){
        // if (l < 45){
        //   foreGroundmapTiles[i][j] = underGRock;
        // }


        if(l<15){
        if(i < 13 && j<13 ){
        if(foreGroundmapTiles[i][j] == undefined&& mapTiles[i][j]!= water1){
          if(foreGroundmapTiles[i+1][j] == undefined){
            if(foreGroundmapTiles[i][j+1] == undefined){
              if(foreGroundmapTiles[i+1][j+1] == undefined && mapTiles[i+1][j+1]!= water1){

            foreGroundmapTiles[i][j] = stalgmite;
            foreGroundmapTiles[i+1][j] = transparent;
            foreGroundmapTiles[i][j+1] = transparent;
            foreGroundmapTiles[i+1][j+1] = transparent;

            }
          }

          }

        }
      }
    }

    else if(l<17&&mapTiles[i][j]!= water1){
      foreGroundmapTiles[i][j] = ironOre
    }
    else if (l < 19&&mapTiles[i][j]!= water1){
      foreGroundmapTiles[i][j] = coalOre
    }
      }



      }
      yoff += .2
    }
  }

}

//midGroundGroups = [];

function setupMapGrid(){
  mapTiles = [];
  midGroundTiles = [];
  foreGroundmapTiles = [];
  muffArr = [];
  for (let x = 0; x < 15; x++) {
    mapTiles[x] = [];
    midGroundTiles[x] = [];
    foreGroundmapTiles[x] = [];
    lightArr[x] = [];
  }
}
function setupMapGroups(){
  for (let x = 0; x < 10; x++) {
       mapGroups[x] = [];
       animalGroups[x] = [];
       undergroundGroups[x] = [];
   }
   for (let i = 0; i < 10; i++) {
     for (let j = 0; j < 10; j++) {
    mapGroups[i][j] = [];
    animalGroups[i][j] = [];
    undergroundGroups[i][j] = [];
    }
  }

}
function spawnAnimals(biome){
  for (let i = 0; i < random(0,6);i++){
    if(biome ==1){
    muffArr[i] = new animal(curMapRX,curMapRY,1,false,0,0);}
    else if(biome == 2){
    muffArr[i] = new animal(curMapRX,curMapRY,2,false,0,0);
    }
    else if(biome == 3){
    muffArr[i] = new animal(curMapRX,curMapRY,3,false,0,0);
    }
  }
}



function caveNoise(input){
  let posState = noise(input*random(0,50))*100;
  return posState;
}

function campfireLight(x,y){
  noStroke();
  fill(255,255,0,20+ gameClock%10);
  rect(x*50,y*50,50,50);
  rect((x-1)*50,y*50,50,50);
  rect((x+1)*50,y*50,50,50);
  rect(x*50,(y-1)*50,50,50);
  rect(x*50,(y+1)*50,50,50);
}
function waterMovement(x,y){
  if(isAboveGround==true){
  noStroke();
  fill(0,0,255,(5*x+5*y)+ gameClock%10);
  rect(x*50,y*50,50,50);
}
}


function spawnCabin(x,y){
  if(foreGroundmapTiles[x][y] == undefined){
    if(foreGroundmapTiles[x+1][y] == undefined){
      if(foreGroundmapTiles[x][y+1] == undefined){
        if(foreGroundmapTiles[x+1][y+1] == undefined){
          foreGroundmapTiles[x][y] = cabin;
          foreGroundmapTiles[x+1][y] = transparent;
          foreGroundmapTiles[x][y+1] = transparent;
          foreGroundmapTiles[x+1][y+1] = transparent;
        }
      }
    }
  }
}

function CreateWoodlandsBiome(){
  var yofff = gameClock;
  for (let i = 0; i<14;i++){
    var xofff = gameClock;
    for (let j = 0; j<14;j++){
      var index = (i+j*width)*4;
      var l = noise(xofff,yofff)*255
      xofff += .6;
      //arr[i][y][0] = r;

    let r = random(-1,1);
    if(r > -.5 && r < -.3&& l<160){
    midGroundTiles[i][j]=grassMid;
    }
    let tileType;
    if (r>-.8&&l<=170){
      if (r<-.3){
        tileType = grass2;
      }else tileType = grass;
    if (foreGroundmapTiles[i][j]!=transparent){
    if (r>0 && r <.1)foreGroundmapTiles[i][j] = bbush;
    if (r>.2 && r < 1){
      if(r>=.2&&r<.6)foreGroundmapTiles[i][j] = tree;
      if(r>.6 && r<.8){
        if(r>.79){
          foreGroundmapTiles[i][j] = tripShroom;

        }
        else {
          if(i < 13 && j<13){
          if(foreGroundmapTiles[i][j] == undefined){
            if(foreGroundmapTiles[i+1][j] == undefined){
              if(foreGroundmapTiles[i][j+1] == undefined){
                if(foreGroundmapTiles[i+1][j+1] == undefined){

              foreGroundmapTiles[i][j] = tree2;
              foreGroundmapTiles[i+1][j] = transparent;
              foreGroundmapTiles[i][j+1] = transparent;
              foreGroundmapTiles[i+1][j+1] = transparent;

              }
            }

            }

          }
        }




        }
      }
    if (r>.9){
    if(r < .95)foreGroundmapTiles[i][j] = rock;
    else foreGroundmapTiles[i][j] = rock2;
  }
  }
}

  }if(r < -.8) tileType = dirt;

      if(l>170){
        if(foreGroundmapTiles[i][j]==transparent){
          mapTiles[i][j] = grass;
        }else
        mapTiles[i][j] = water1
      }
      else


      mapTiles[i][j] = tileType;




      }
      yofff +=.6
    }
  spawnAnimals(1);
}
function CreateDesertBiome(){
  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
      //midGroundTiles[i][j] = grassMid;
    let r = random(0,100);
    let tileType;
      if (r>=0){
        if (r<20)tileType = sand2;
        else {
          tileType = sand1;
          if(r<25) foreGroundmapTiles[i][j] = cactus1;
          else if (r<30) foreGroundmapTiles[i][j] = cactus2;
          else if (r<35) foreGroundmapTiles[i][j] = cactus3;
        }


        mapTiles[i][j] = tileType;
        }

      }
    }
    spawnAnimals(2);
}

function CreateMushBiome(){
  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
      //midGroundTiles[i][j] = grassMid;
    let r = random(0,100);
    let tileType;
        if (r<100) tileType = floor1;

          //tileType = dirt;
            if (foreGroundmapTiles[i][j]!=transparent){
            if(r<15) foreGroundmapTiles[i][j] = tripShroom;
            else if (r<25) {
              if(i < 13 && j<13){
              if(foreGroundmapTiles[i][j] == undefined){
                if(foreGroundmapTiles[i+1][j] == undefined){
                  if(foreGroundmapTiles[i][j+1] == undefined){
                    if(foreGroundmapTiles[i+1][j+1] == undefined){

                  foreGroundmapTiles[i][j] = bigShroom;
                  foreGroundmapTiles[i+1][j] = transparent;
                  foreGroundmapTiles[i][j+1] = transparent;
                  foreGroundmapTiles[i+1][j+1] = transparent;

                  }
                }

                }

              }
            }
            }
            else if(r<35){
              midGroundTiles[i][j]=midMush;
            }
        }



          //
          // else if (r<35) foreGroundmapTiles[i][j] = cactus3;

        mapTiles[i][j] = tileType;

      //mapTiles[i][j] = floor1;
      }
    }
    //spawnAnimals(2);
}

function CreateLakeBiome(){
  let randomX = random(4,10);
  let randomY = random(4,10);
  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
      //midGroundTiles[i][j] = grassMid;
    let r = random(0,100);
    let tileType;
      if (r>=0){
        if (dist(i,j,randomX,randomY)>=6+floor(random(-1,1))){
          if(r>55)tileType = grass;
          else tileType = grass2;
        }
        else if (dist(i,j,randomX,randomY)>=4+floor(random(-1,1))){
          tileType = sand1;
          if(r<5){
            midGroundTiles[i][j] = shells1;
          }
          else if (r<8){
            midGroundTiles[i][j] = shells2;
          }else if (r<11){
            midGroundTiles[i][j] = shells3;
          }
          else if (r<25){
            midGroundTiles[i][j] = reeds;
            //midGroundTiles[i][j] = shells4;
          }
        }
        else {
          // let l = random(0,100)
          //   if(l>60){
          //     midGroundTiles[i][j] = reeds;
          //   }

          tileType = water1;


        }

        if(tileType == grass || tileType == grass2){
          if (foreGroundmapTiles[i][j]!=transparent){
          if(r<30){
            foreGroundmapTiles[i][j] = tree;
          }
          else if (r<35){
            if(i < 13 && j<13){
            if(foreGroundmapTiles[i][j] == undefined){
              if(foreGroundmapTiles[i+1][j] == undefined){
                if(foreGroundmapTiles[i][j+1] == undefined){
                  if(foreGroundmapTiles[i+1][j+1] == undefined){

                foreGroundmapTiles[i][j] = tree2;
                foreGroundmapTiles[i+1][j] = transparent;
                foreGroundmapTiles[i][j+1] = transparent;
                foreGroundmapTiles[i+1][j+1] = transparent;
              }
                }
              }

              }

            }
          }
          else if(r<40){
            foreGroundmapTiles[i][j] = bbush;
          }
          else if(r<45){
            foreGroundmapTiles[i][j] = rock2;
          }

        }
        }
        mapTiles[i][j] = tileType;

        }

      }
    }
    spawnAnimals(3);
    for(let i = 0;i<14;i++){
      for(let j = 0;j<14;j++){
        if(mapTiles[i][j] == water1){
          if(random(0,100)<30){
            muffArr.push(new animal(curMapRX,curMapRY,3,true,i,j));
          }
        }
      }
    }
}

function intro(){
  image(introPic,0,0);

}

function timeOfDayCalc(){
  if (gameClock % timeMult == 0){
    if (timeOfDay > 12){
      timeDir*=-1
    }else if (timeOfDay < 0){
      timeDir*=-1
    }
    timeOfDay += timeDir*1;

  }
}
function plantUpdate(planyType,i,j){
  let l = random(0,300);
    if (l>299.8){
      if (planyType == wheet1){
        midGroundTiles[i][j] = wheet2;
      }
      if (planyType == wheet2){
        midGroundTiles[i][j] = wheet3;
      }

    }

}


function touchStarted() {
getAudioContext().resume()
}
