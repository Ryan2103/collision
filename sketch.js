var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving=createSprite(100, 200, 50, 50);
  fixed=createSprite(400,200,50,50);




  moving.shapeColor="red";
fixed.shapeColor="red";
}



function draw() {
  background(0);
  
  if(moving.x-fixed.x<moving.width/2+fixed.width/2 &&
    fixed.x-moving.x<moving.width/2+fixed.width/2 &&
    moving.y-fixed.y<moving.height/2+fixed.height/2 &&
    fixed.y-moving.y<moving.height/2+fixed.height/2 ){
 
    moving.shapeColor="green";
    fixed.shapeColor="blue";

  }

  else{
    moving.shapeColor="red";
    fixed.shapeColor="red";

  }
  moving.x=mouseX;
  moving.y=mouseY;
  
  drawSprites();
}