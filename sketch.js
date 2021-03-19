var ball,img,paddle,edges;
function preload() {
  ballimg=loadImage("ball.png")
  paddleimg=loadImage("paddle.png")
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
   player_paddle=createSprite(390,190,15,100);
  player_paddle.addImage(paddleimg);
  
  ball=createSprite(200,200,20,20);
  ball.addImage(ballimg);
  ball.velocityX=5;
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(player_paddle,randomVelocity);
  
  
  
  /* create Edge Sprites here */
  drawSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    player_paddle.y=player_paddle.y-5
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
     
  {
    player_paddle.y=player_paddle.y+5
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */

ball.velocityY=random(-5,5);  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

