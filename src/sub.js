body = document.querySelector("body");
screenss = document.getElementById("screen")
clearbutton = document.getElementById("clear");
colorbutton = document.getElementById("color");
sizebutton = document.getElementById("size");
mainstuff = document.getElementById("main");

let darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (darkmode) {
    body.style.backgroundColor = "rgb(30,30,30)";
    body.style.color = "black";
    clearbutton.style.backgroundColor = "rgb(71, 85, 105)";
    clearbutton.style.color = "white";
    colorbutton.style.backgroundColor = "rgb(71, 85, 105)";
    colorbutton.style.color = "white";
    sizebutton.style.backgroundColor = "rgb(71, 85, 105)";
    sizebutton.style.color = "white";
}
else {
    body.style.backgroundColor = "rgb(255,255,255)";
    clearbutton.style.backgroundColor = "rgb(203, 213, 225)";
    colorbutton.style.backgroundColor = "rgb(203, 213, 225)";
    sizebutton.style.backgroundColor = "rgb(203, 213, 225)";
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

// function screensizer() {
//   screenss.style.width = `${window.innerWidth - 100}px`;
//   screenss.style.height = `${window.innerHeight - 100}px`;
// }
// // s
// screensizer()

darkmodebutton = document.getElementById('dm');



