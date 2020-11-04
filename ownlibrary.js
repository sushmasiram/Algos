function isTouching(rectA,rectB){
    if(Math.abs(rectA.x-rectB.x) < rectA.width/2 + rectB.width/2 
    && Math.abs(rectA.y-rectB.y) < rectA.height/2 + rectB.height/2){
      return true
  
    }else{
      return false
    }
  }
/* topEdge = createSprite(width/2,0,width,5);
  bottomEdge = createSprite(width/2,height,width,5);
  rightEdge = createSprite(width,height/2, 5, height);
  leftEdge = createSprite(0, height/2, 5, height);*/

function MyCreateEdgeSprites(){
  //print(width)
  topEdge = createSprite(width/2,0,width,5);
  bottomEdge = createSprite(width/2,height,width,5);
  rightEdge = createSprite(width,height/2, 5, height);
  leftEdge = createSprite(0, height/2, 5, height);
  topEdge.visible = false;
  bottomEdge.visible = false;
  rightEdge.visible = false;
  leftEdge.visible = false;
  edges = [topEdge,rightEdge,leftEdge,bottomEdge];
  return edges;
}

function bounce(rectA, rectB){
    if (Math.abs(rectA.x-rectB.x) < rectA.width/2 + rectB.width/2 && 
    Math.abs(rectA.y-rectB.y) < rectA.height/2 + rectB.height/2){
        rectA.velocityX = -1*rectA.velocityX
        rectA.velocityY = -1*rectA.velocityY
        rectB.velocityX = -1*rectB.velocityX
        rectB.velocityY = -1*rectB.velocityY;
      }
}

function bounceOff(rectA, rectB){
    if (Math.abs(rectA.x-rectB.x) < rectA.width/2 + rectB.width/2 && 
    Math.abs(rectA.y-rectB.y) < rectA.height/2 + rectB.height/2){
        rectA.velocityX = -1*rectA.velocityX
        rectA.velocityY = -1*rectA.velocityY
      }
}

function displace(rectA, rectB){
    if (Math.abs(rectA.x-rectB.x) < rectA.width/2 + rectB.width/2 && 
    Math.abs(rectA.y-rectB.y) < rectA.height/2 + rectB.height/2){
        var a = rectA.velocityX
        rectA.velocityX = rectB.velocityX
        rectB.velocityX = a;
      }
}