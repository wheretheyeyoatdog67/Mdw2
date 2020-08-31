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



function preload() {
  grass = loadImage('assets/tiles/grass.png');
  dirt = loadImage('assets/tiles/dirt.png');
  tree = loadImage('assets/tiles/tree.png');
  tree2 = loadImage('assets/tiles/tree2.png');
  rock = loadImage('assets/tiles/rock.png');
  rock2 = loadImage('assets/tiles/rock2.png');
  logs = loadImage('assets/tiles/logs.png');
  bush = loadImage('assets/tiles/bush.png');
  muffloPicR = loadImage('assets/tiles/mufflo.png');
  muffloPicL = loadImage('assets/tiles/muffloL.png');
  playerPic = loadImage('assets/tiles/player.png');
  invPic = loadImage('assets/invant.png');
  woodPanel = loadImage('assets/wood.png');
  grass2 = loadImage('assets/tiles/grass2.png');
  underGFloor = loadImage('assets/tiles/undergroundFloor.png');
  underGRock = loadImage('assets/tiles/underGRock.png');
  pickaxe1 = loadImage('assets/tools/pickaxe1.png');
  axe1 = loadImage('assets/tools/axe.png');
  song = loadSound('assets/music/mainSong.mp3');
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

  song.pause();
}

function draw() {
  background(0);
  timeOfDayCalc();
  if (!song.isPlaying()){
    song.play();}
  gameClock += 1;

  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
      drawTile(mapTiles[i][j],i,j);
      if (foreGroundmapTiles[i][j] != undefined){
        drawTile(foreGroundmapTiles[i][j],i,j)
        }
      }
  }
  //drawMufflo
  for (let i = 0; i < muffArr.length;i++){
    muffArr[i].draw();
    muffArr[i].move();
  }
  for(let i = 0;i<floorItemArr.length;i++){
    floorItemArr[i].disp();
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
fill(40+timeOfDay*16,40,255-timeOfDay*15,70-19*timeOfDay);
rect(0,0,700,700);}
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
  muffloPicR.resize(80,80);
  muffloPicL.resize(80,80);
  playerPic.resize(50,50);
  invPic.resize(205,500);
  woodPanel.resize(200,100);
  underGRock.resize(50,50);
  underGFloor.resize(50,50);
  pickaxe1.resize(50,50);
  axe1.resize(40,50);
  logs.resize(40,40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
    if (r>0 && r <.1)foreGroundmapTiles[i][j] = bush;
    if (r>.2 && r < 1){
      if(r>=.2&&r<.6)foreGroundmapTiles[i][j] = tree;
      if(r>.6 && r<.8)foreGroundmapTiles[i][j] = tree2;
    if (r>.9){
    if(r < .95)foreGroundmapTiles[i][j] = rock;
    else foreGroundmapTiles[i][j] = rock2;}
  }
}if(r < -.8) tileType = dirt;
    mapTiles[i][j] = tileType;

    }
  }
  spawnAnimals();
}
else{
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





function timeOfDayCalc(){
  if (gameClock % 250 == 0){
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
