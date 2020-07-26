// get the canvas html
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

//______________________


var mouse = {
    x:undefined,
    y:undefined
}

var maxRadius = 10;
var minRadius = 1;

var colorArray = [
    '#2c3e50',
    '#e74c3c',
    '#ecf0f1',
    '#3498db',
    '#2980b9'
];

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = 15; 
    init();
});

window.addEventListener('mousemove',function(){    
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.radius = radius;
    this.minRadius =radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'blue';
        //c.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function () {
        if (this.x + radius > innerWidth || this.x - radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interactive
        if(mouse.x  - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50 ){
            if(this.radius < maxRadius ){
                this.radius += 1;
            }            
        }
        else if (this.radius > this.minRadius)
        {
            this.radius -=1;
        }

        this.draw();
    }
}

//var circle = new Circle(200, 200, 3, 3, 30);
var circleArray = [];
function init(){
    circleArray = [];    
    for(var i = 0; i<400; i++){
        var radius = Math.random() * 3 + 1; //30;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dy = Math.random() - 0.5 * 3;
        var dx = Math.random() - 0.5 * 3;
       
        circleArray.push(new Circle(x,y,dx,dy,radius));
        //var circle = new Circle(200, 200, 3, 3, 30);
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i <circleArray.length; i++){
        circleArray[i].update();
    }

}
init();
animate();

console.log("canvs render completed on - " + Date());
