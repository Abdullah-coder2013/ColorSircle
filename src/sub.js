body = document.querySelector("body");
clearbutton = document.getElementById("clear");

let darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (darkmode) {
    body.style.backgroundColor = "rgb(30,30,30)";
    body.style.color = "black";
    clearbutton.style.backgroundColor = "rgb(71, 85, 105)";
}
else {
    body.style.backgroundColor = "rgb(255,255,255)";
    clearbutton.style.backgroundColor = "rgb(203, 213, 225)";
}


document.getElementById("screen").addEventListener("mouseup", function(){
    draw(event)
});

function randcolor() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return r.toString(16) + g.toString(16) + b.toString(16);
}

clearbutton.addEventListener("mouseover", function(){
    clearbutton.style.backgroundColor = randcolor();
});


