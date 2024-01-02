// Bucky's buckteeth are drawn as rectangles, and the last number is the height of the rectangle. Create a variable to store the length of the teeth so that you can change the length of both buckteeth at once.

ellipse(150, 70, 60, 120);  // left ear
ellipse(240, 70, 60, 120);  // right ear

ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);
var big = 50;
ellipse(170, 150, big, big);  // left eye
ellipse(230, 150, big, big);  // right eye

line(150, 200, 250, 200);   // mouth

noFill();
var teth = 20;
rect(185, 200, 15, teth); // left tooth
rect(200, 200, 15, teth); // right tooth

