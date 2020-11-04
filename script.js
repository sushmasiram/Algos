function setup(){
    createCanvas(600,600)
    rect1 = createSprite(200,200,50,100)
    rect2 = createSprite(400,200,100,50)

}

function draw(){
    background("cyan")
    rect2.x = mouseX
    rect2.y = mouseY
    drawSprites()

}