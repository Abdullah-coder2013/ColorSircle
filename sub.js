var mainfocus = document.getElementById("a");
var buttonb = document.getElementById("b");
var buttonc = document.getElementById("c");


function randcolorgenerate() {
    var r = Math.round(Math.random() * 240 + 16)
    var g = Math.round(Math.random() * 240 + 16)
    var b = Math.round(Math.random() * 240 + 16)
    var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    console.log(color);
    return color;
}

mainfocus.style.backgroundColor = randcolorgenerate();
mainfocus.style.color = randcolorgenerate();
buttonb.style.backgroundColor = randcolorgenerate();
buttonb.style.color = randcolorgenerate();
buttonc.style.backgroundColor = randcolorgenerate();
buttonc.style.color = randcolorgenerate();

mainfocus.addEventListener('click', function onClick() {
    mainfocus.style.backgroundColor = randcolorgenerate();
    mainfocus.style.color = randcolorgenerate();
});

buttonb.addEventListener('click', function onClick() {
    buttonb.style.backgroundColor = randcolorgenerate();
    buttonb.style.color = randcolorgenerate();
});

buttonc.addEventListener('click', function onClick() {
    buttonc.style.backgroundColor = randcolorgenerate();
    buttonc.style.color = randcolorgenerate();
});

$("#a").hover(
    function () {
        $(this).css("background-color", randcolorgenerate());
    }
);
$("#b").hover(
    function () {
        $(this).css("background-color", randcolorgenerate());
    }
);
$("#c").hover(
    function () {
        $(this).css("background-color", randcolorgenerate());
    }
);
