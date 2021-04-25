  var car;
  var wall;
  var speed;
  var weight;

function setup() {
  createCanvas(800,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 100, 50);
  wall = createSprite(500, 200, 50, 200);
  car.shapeColor = "lime";
  wall.shapeColor = "brown";
}

function checkCollision(speed, weight) {
  car.velocityX = speed;

    if (car.isTouching(wall)) {
    car.velocityX = 0;
    let deformation = (0.5 * weight * speed * speed)/22500;

    if (deformation < 100) {
      car.shapeColor = "green";
    } else if (deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    } else if (deformation > 180) {
      car.shapeColor = "red";
    }
  }
}

function draw() {
  background("cyan");  
  drawSprites();

  checkCollision(3, 1000000);

}