  var car;
  var wall;
  var speed;
  var weight;

  var randomspeed;
  
  var randomweight;


function setup() {
  createCanvas(800,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 100, 50);
  wall = createSprite(500, 200, 50, 200);
  car.shapeColor = "lime";
  wall.shapeColor = "brown";

  
  randomspeed = Math.floor(random(1, 8));

  randomweight = Math.floor(Math.random()* 1000000);

  console.log(`randomspeed: ${randomspeed} pixels per second and randomweight: ${randomweight} kg's`)

}

function checkCollision(speed, weight) {
  car.velocityX = speed;

    if (car.isTouching(wall)) {
    car.velocityX = 0;
    let deformation = (0.5 * weight * speed * speed)/22500;

    if (deformation < 100) {
      car.shapeColor = "green";
      console.log("car was not much damaged.");
    } else if (deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
      console.log("car was damaged severely");
    } else if (deformation > 180) {
      car.shapeColor = "red";
      console.log("you gotta buy a new car :)");
    }
  }
}

function draw() {
  background("cyan");  
  drawSprites();

  checkCollision(randomspeed, randomweight);

}
