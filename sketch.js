var bg1;
var boyImg;
var bookImg;
var muderer;
var score=0;


function preload(){
bg1=loadImage("jungle1.webp")
boyImg=loadImage("boy.jpg")
bookImg=loadImage("book.png")
muderer=loadImage("muder.jpg")
}

function setup(){
createCanvas(1200,1000)
boy=createSprite(200,150)
boy.addImage(boyImg)

boy.scale=0.5

murderer=createSprite(80,720,30,30)
murderer.addImage(muderer)
murderer.scale=0.09
murderer.velocityX=7


edges=createEdgeSprites()

}

function draw() {
    background(bg1)

    if (keyDown("s")){
        boy.y = boy.y+3
    }

    if (keyDown("w")){
        boy.y = boy.y-3
    }
   
    if (keyDown("a")){
        boy.x=boy.x-3
    }

    if (keyDown("d")){
        boy.x=boy.x+3
    }

    if (boy.x<0){
        boy.x=1200
    }
    if (boy.x>1200){
        boy.x=0
    }
   
    if (boy.isTouching(murderer)){
        fill("red")
     textSize(80)
    text('GAME OVER', 400,500)
    boy.destroy()
    muder.visible=false;
    
    }

    if (book.isTouching(boy)){
        
        score=score+10;
    }
   

    murderer.bounceOff(edges[0])
murderer.bounceOff(edges[1])

    boy.collide(edges[2])
    boy.collide(edges[3])


 
    

    drawSprites()
   
    fill("red")
    text(mouseX+', '+mouseY,100,500)
    
    books()
    text("score "+score, 30, 30 );
}

function books(){
    
    if (frameCount%150===0){
       
    book=createSprite(1000,800,10,10)
    book.addImage(bookImg)
    book.scale=0.3
    book.x=Math.round(random(40,1180))
    book.y=Math.round(random(710,900))

    book.lifetime=120
    }


    
}