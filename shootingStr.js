var xPos = 200;
var yPos = 200;
var starX = 200;

var speedX = 5;
var speedY = -3;

//bonus create a moon
var moonX = 300;
var moonY = 70;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    //move the shooting star
    
    starX += speedX; 
    starY += speedY;
    
    if(starY < 0) {
        starY= height;
        starX = random(50, width - 50);
    }
    
    fill(225, 255, 0);
    ellipse(starX + 100, starY + 50, 8, 8);
    
    fill(250, 200, 0);
    triangle(starX, starY, starX - 15, starY + 15, starX + 15, starY + 10);
    
    fill(225,  225, 255);
    ellipse(moonX, moonY, 30, 30);
};

