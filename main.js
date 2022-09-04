
var balls = [];
setInterval(animate, 36);


class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.floor(Math.random() * 20);
        this.vy = Math.floor(Math.random() * 20);
        this.color = randcolor();
        this.size = randsize();
    }

    draw() {
        var canvas = document.getElementById("screen");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        console.log("a circle has spawned at coordinates: " + this.x + " " + this.y);
        ctx.fill();
    }
    update() {
        var canvas = document.getElementById("screen");
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 + this.size || this.x > canvas.width - this.size) {
            this.vx = -this.vx;
        }
        if (this.x < 0 + this.size || this.x > canvas.height - this.size) {
            this.vy = -this.vy;
        }
    }
}



alert("Enjoy the Animation!")
var normal = true
function randcolor() {
    var r = Math.round(Math.random() * 240 + 16);
    var g = Math.round(Math.random() * 240 + 16);
    var b = Math.round(Math.random() * 240 + 16);
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}

function randsize() {
    size = Math.floor(Math.random() * 100 + 10);
    return size;
}

function draw(e) {
    var canvas = document.getElementById("screen");
    var ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();
    var posx = e.clientX - rect.left;
    var posy = e.clientY - rect.top;
    newball = new Ball(posx, posy);
    newball.draw();
    balls.push(newball);
}

function animate() {
    var canvas = document.getElementById("screen");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var n = 0; n < balls.length; n++) {
        balls[n].update();
        balls[n].draw();

    }
}