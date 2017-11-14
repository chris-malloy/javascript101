// console.log("I'm loaded!");

var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
// rect takes 4 arg:
// 1. upper x 
// 2. upper y 
// 3. lower x
// 4. lower y

// context.rect(100, 100, 300, 300);
// context.stroke();
// context.moveTo(100, 100);
// context.lineTo(300, 300);
// context.stroke();

// a constructor function to make a new ball
function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.sr = 0;
    this.xDirection = 1;
    this.yDirection = 1;
    this.er = Math.PI * 2
    this.randX = Math.ceil(Math.random() * 15);
    this.randY = Math.ceil(Math.random() * 15);
    this.drawBall = this.drawBall.bind(this);
    this.updateBallPosition = this.updateBallPosition.bind(this);
}
Ball.prototype.radius = 50;
Ball.prototype.drawBall = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.sr, this.er);
    // context.closePath();
    context.fill();
}
Ball.prototype.updateBallPosition = function() {
    context.clearRect(0, 0, 500, 500);
    this.drawBall();
    if (this.x >= 500 - this.radius) {
        this.xDirection = -this.xDirection;
    }
    if (this.x <= 0 + this.radius) {
        this.xDirection = -this.xDirection;
    }
    if (this.y >= 500 - this.radius) {
        this.yDirection = -this.yDirection
    }
    if (this.y <= 0 + this.radius) {
        this.yDirection = -this.yDirection
    }
    // var randX = Math.ceil(Math.random() * 15)
    // var randY = Math.ceil(Math.random() * 15)
    this.x += this.randX * this.xDirection;
    this.y += this.randY * this.yDirection;
}



// instantiation
ball = new Ball(100, 100);
console.log(ball);
var ballInterval = setInterval(ball.updateBallPosition, 50);

canvas.addEventListener("click", function() {

});


// you could use this ^ to click on ball and change properties of the ball
// HOMEWORK - collision detection and change ball behavior



// var ballInterval = setInterval(drawBall, 50);
// var centerX = 200;
// var centerY = 200;

// function drawBall() {
//     centerX++;
//     centerY++;
//     context.arc(centerX, centerY, 50, 0, 2 * Math.PI);
//     // context.stroke();
//     // just like pygame.screen.flip(), we have clearRect()
//     context.clearRect(0, 0, 500, 500);
//     context.fill();
//     // setInterval(function() { alert("Hello";) })

// }