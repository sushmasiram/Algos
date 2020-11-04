var mrect,frect, brect;

//var gameObj1, gameObj2,gameObj3,gameObj4;
var edges;
function setup() {
  createCanvas(800,600);
  brect = createSprite(400, 200, 50, 50);
 
  brect.velocityX = -4
  edges = createEdgeSprites1();
}

function draw() {
  background("lightgreen")
  bounceOff(brect,edges[1])
  bounceOff(brect,edges[2])
  //console.log(edges[2].x)
  drawSprites();
}
//Boolean values true, false
