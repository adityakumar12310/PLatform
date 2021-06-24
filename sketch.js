var countDistanceX = 0;
var gap = 150;
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  
  for (i=0;i<6;i++){
    platform1 = new Platform(countDistanceX);
    gap = random([0,0,0,0,80]);
    countDistanceX = countDistanceX + platform1.rh + gap;
  }
  
}

function draw() {
  background('skyblue'); 


  


 drawSprites();
}

