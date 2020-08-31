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
function preload() {
  grass = loadImage('assets/tiles/grass.png');
  dirt = loadImage('assets/tiles/dirt.png');
  tree = loadImage('assets/tiles/tree.png');
  rock = loadImage('assets/tiles/rock.png');
  rock2 = loadImage('assets/tiles/rock2.png');
  bush = loadImage('assets/tiles/bush.png');
  muffloPic = loadImage('assets/tiles/mufflo.png');
  playerPic = loadImage('assets/tiles/player.png');
  invPic = loadImage('assets/invant.png');
  woodPanel = loadImage('assets/wood.png');
  grass2 = loadImage('assets/tiles/grass2.png');

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

  if (!song.isPlaying()){
    song.play();

  }

  gameClock += 1;
  background(0);
  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
      drawTile(mapTiles[i][j],i,j);
      if (foreGroundmapTiles[i][j] != undefined){
        drawTile(foreGroundmapTiles[i][j],i,j)
        }
      }
  }
  player.draw();
  inv.drawInv();
  for (let i = 0; i < muffArr.length;i++){
    muffArr[i].draw();
    muffArr[i].move();
  }


tool.update(player);
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
  rock.resize(50,50);
  rock2.resize(50,50);
  bush.resize(50,50);
  muffloPic.resize(80,80);
  playerPic.resize(50,50);
  invPic.resize(205,500);
  woodPanel.resize(200,100);
  pickaxe1.resize(50,50);
  axe1.resize(40,50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




function spawnMap(){

  setupMapGrid();

  for (let i = 0; i<14;i++){
    for (let j = 0; j<14;j++){
    let r = random(-1,1);
    let tileType;
    if (r>-.8){
      if (r<-.3){
        tileType = grass2;
      }else tileType = grass;
    if (r>0 && r <.1)foreGroundmapTiles[i][j] = bush;
    if (r>.2 && r < 1){foreGroundmapTiles[i][j] = tree;
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
   }
   for (let i = 0; i < 10; i++) {
     for (let j = 0; j < 10; j++) {
    mapGroups[i][j] = [];
    animalGroups[i][j] = [];

    }
  }

}
function spawnAnimals(){
  for (let i = 0; i < random(0,6);i++){
    muffArr[i] = new animal(curMapRX,curMapRY);
  }
}

let temp = true;
function mouseClicked() {
console.log(mouseX);
console.log(mouseY);





}

function keyPressed() {
//MOVEMENT WASD
  if (keyCode ==65) {
    if (player.x == 0){
    player.moveToNextRegion(-1,0)
  }else player.move(-1,0);
  }

  if (keyCode ==68) {
    if (player.x == 13){
    player.moveToNextRegion(1,0)
  }else player.move(1,0);

}
if (keyCode ==83) {
  if (player.y == 13){
  player.moveToNextRegion(0,1)
}else player.move(0,1);
}
if (keyCode ==87) {
  if (player.y == 0){
  player.moveToNextRegion(0,-1)
}else player.move(0,-1);
}
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
}

//invant
if (keyCode >=49 && keyCode <=57) {
  inv.curItem = keyCode - 48;
}



}

function touchStarted() {
getAudioContext().resume()
}
