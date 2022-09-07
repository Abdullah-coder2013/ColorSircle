var mainfocus = document.getElementById("a");
var buttonb = document.getElementById("b");


function randcolorgenerate() {
    var r = Math.round(Math.random() * 240 + 16)
    var g = Math.round(Math.random() * 240 + 16)
    var b = Math.round(Math.random() * 240 + 16)
    var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    console.log(color);
    return color;
}

mainfocus.addEventListener('click', function onClick() {
    mainfocus.style.backgroundColor = randcolorgenerate();
    mainfocus.style.color = randcolorgenerate();
});

buttonb.addEventListener('click', function onClick() {
    buttonb.style.backgroundColor = randcolorgenerate();
    buttonb.style.color = randcolorgenerate();
});

