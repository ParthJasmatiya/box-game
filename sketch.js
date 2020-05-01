
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(800, 600);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(625, 550);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200,590,1200,30);
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Rect(mouseX, mouseY, random(20, 80),random(20,80)));
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    Engine.update(engine)
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for (var i = 1; i < boxes.length; i++) {
        boxes[i].display();
}
 noStroke();
ground.display();
fill("red");
textSize(15);
text("Gravity " + fVal, 660, 593);
}
