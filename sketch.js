let width = 900;
let height = 700;
let grass;
let dirt;
let curMapRX = 2;
let curMapRY = 2;
let mapGroups = [];
let mapTiles = [];
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
let mushRoomTrip = false;
var inc = 0;
var incDir = 1;
let tripClock = 0;
let triplevel = 0;


function preload() {
  grass = loadImage('assets/tiles/grass.png');
  dirt = loadImage('assets/tiles/dirt.png');
  dirtInv = loadImage('assets/tiles/dirtInv.png');
  dirtHole = loadImage('assets/tiles/dirtHole.png');
  tree = loadImage('assets/tiles/tree.png');
  tree2 = loadImage('assets/tiles/tree2.png');
  rock = loadImage('assets/tiles/rock.png');
  rock2 = loadImage('assets/tiles/rock2.png');
  logs = loadImage('assets/tiles/logs.png');
  bush = loadImage('assets/tiles/ebush.png');
  berries = loadImage('assets/tiles/berries.png');
  bbush = loadImage('assets/tiles/berrybush.png');
  muffloPicR = loadImage('assets/tiles/mufflo.png');
  muffloPicL = loadImage('assets/tiles/muffloL.png');
  playerPic = loadImage('assets/tiles/player.png');
  invPic = loadImage('assets/invant.png');
  woodPanel = loadImage('assets/wood.png');
  grass2 = loadImage('assets/tiles/grass2.png');
  underGFloor = loadImage('assets/tiles/undergroundFloor.png');
  underGRock = loadImage('assets/tiles/underGRock.png');
  pickaxe1 = loadImage('assets/tools/pickaxe1.png');
  wand = loadImage('assets/tools/wand.png');
  campfire = loadImage('assets/campfire.png');
  tripShroom = loadImage('assets/tiles/mushroom.png');

  cabin = loadImage('assets/tiles/cabin.png');
  cabinInv = loadImage('assets/tiles/cabin.png');
  transparent = loadImage('assets/tiles/transparent.png');
  axe1 = loadImage('assets/tools/axe1.png');
  shovel = loadImage('assets/tools/shovel.png');
  song = loadSound('assets/music/mainSong.mp3');


  chain = loadImage('assets/crafting/chain.png');
}


function setup() {


  var cnv =createCanvas(width, height);
  cnv.style('display', 'block');
  background(70, 70, 90);
  setupMapGrid();
  setupMapGroups();
  spawnMap();
  mapGroups[2][2][0] = mapTiles;
  mapGroups[2][2][1] = foreGroundmapTiles;
  animalGroups[2][2][0] = muffArr;
  resizeAssets();
  player = new player();
  inv = new inv();
  inv.invantItems();
  tool = new tool(player);
  craft = new craftingWindow();
  fillInvCountZero();
  song.pause();
}

function draw() {
  background(0);
  timeOfDayCalc();
  if (!song.isPlaying()){
    song.play();}
  gameClock += 1;
  let cabinPosI = [];
  let cabinPosJ = [];
  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
      drawTile(mapTiles[i][j],i,j);
      let curT = foreGroundmapTiles[i][j];
      if (curT != undefined){
        if(curT == cabin){
          cabinPosI.push(i);
          cabinPosJ.push(j);
        }
        else drawTile(foreGroundmapTiles[i][j],i,j)
        }
      }
  }

  for (let i = 0; i<cabinPosI.length;i++){
    drawTile(foreGroundmapTiles[cabinPosI[i]][cabinPosJ[i]],cabinPosI[i],cabinPosJ[i])
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
  inv.drawInv();
  tool.update(player);




//CaveShade and Sun
if(!isAboveGround){
  fill(40,40,70,150);
  rect(0,0,700,700);
}
else{
//fill(207,181,59,10);

if(timeOfDay < 6){
  colorMode(HSB);
  fill(0,0,0,.1+(6-timeOfDay)/12);
  rect(0,0,700,700);
  colorMode(RGB);}
}



for(let i = 0;i<14;i++){
  for(let j = 0;j<14;j++){
    let curTile = foreGroundmapTiles[i][j];
    if ( curTile == campfire){
      campfireLight(i,j);
    }
    else if ( curTile == bush){
      if (random(0,100) > 99.6){
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






function drawTile(tileType,tileX,tileY){
  //background(70, 70, 90);
  image(tileType,50*tileX,50*tileY);
}
function resizeAssets(){
  grass.resize(50,50);
  grass2.resize(50,50);
  dirt.resize(50,50);
  tree.resize(50,50);
  tree2.resize(50,50);
  rock.resize(50,50);
  rock2.resize(50,50);
  bush.resize(50,50);
  bbush.resize(50,50);
  berries.resize(40,40);
  muffloPicR.resize(80,80);
  muffloPicL.resize(80,80);
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
  tripShroom.resize(50,50);
  cabin.resize(100,100);
  wand.resize(55,60);
  dirtInv.resize(50,50);
  dirtHole.resize(50,50);
  cabinInv.resize(50,50);
  chain.resize(100,150);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function fillInvCountZero(){
  for (let i = 0; i<9;i++){
    invArrItemCount[i] = 0;
  }
}

function spawnMap(){

  //TEMPTEMP TEMP TEM PMTETMPEMPREMPRMEPRMERPEMR
  floorItemArr = [];
  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  setupMapGrid();
  if(isAboveGround == true){
  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
    let r = random(-1,1);
    let tileType;
    if (r>-.8){
      if (r<-.3){
        tileType = grass2;
      }else tileType = grass;
    if (r>0 && r <.1)foreGroundmapTiles[i][j] = bbush;
    if (r>.2 && r < 1){
      if(r>=.2&&r<.6)foreGroundmapTiles[i][j] = tree;
      if(r>.6 && r<.8){
        if(r>.75){
          foreGroundmapTiles[i][j] = tripShroom;
        }
        else foreGroundmapTiles[i][j] = tree2;
      }

    if (r>.9){
    if(r < .95)foreGroundmapTiles[i][j] = rock;
    else foreGroundmapTiles[i][j] = rock2;}
  }
}if(r < -.8) tileType = dirt;
    mapTiles[i][j] = tileType;

    //RANDOM Cabins



    }
  }

  // for (let i = 1; i<13;i++){
  //   for (let j = 1; j<13;j++){
  //
  // if(foreGroundmapTiles[i][j] == undefined){
  //   if(foreGroundmapTiles[i+1][j] == undefined){
  //     if(foreGroundmapTiles[i][j+1] == undefined){
  //       if(foreGroundmapTiles[i+1][j+1] == undefined){
  //         if(random(0,5)>4.7){
  //           spawnCabin(i,j);
  //         }
  //       }}}}}}
  spawnAnimals();

}
else{
  //underground
  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
        mapTiles[i][j] = underGFloor;
        let l = caveNoise(i*j+1);
        if (l < 45){
          foreGroundmapTiles[i][j] = underGRock;
        }
      }
    }
  }

}


function setupMapGrid(){
  mapTiles = [];
  foreGroundmapTiles = [];
  muffArr = [];
  for (let x = 0; x < 15; x++) {
    mapTiles[x] = [];
    foreGroundmapTiles[x] = [];
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
function spawnAnimals(){
  for (let i = 0; i < random(0,6);i++){
    muffArr[i] = new animal(curMapRX,curMapRY);
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

function timeOfDayCalc(){
  if (gameClock % 100 == 0){
    if (timeOfDay > 12){
      timeDir*=-1
    }else if (timeOfDay < 0){
      timeDir*=-1
    }
    timeOfDay += timeDir*1;

  }
}

function touchStarted() {
getAudioContext().resume()
}
