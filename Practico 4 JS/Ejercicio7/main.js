let click = document.getElementById("click");
let dbclick = document.getElementById("dbclick");
let mover = document.getElementById("mover");
let mout = document.getElementById("mout");
let cmenu = document.getElementById("cmenu");
let mdown = document.getElementById("mdown");
let mup = document.getElementById("mup");
let menter = document.getElementById("menter");
let wheel = document.getElementById("wheel");

let i = 0;

function randomColor() {
    let color = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
    if (i >= color.length) {
        i = 0;
    }
    let seleccionado = color[i];
    i++;
    return seleccionado;
}

click.addEventListener("click", function () {
    click.style.backgroundColor = randomColor();
});

dbclick.addEventListener("dblclick", function () {
    if (dbclick.style.transform == "scale(1)") {
        dbclick.style.transform = "scale(1.5)";
    }
    else {
        dbclick.style.transform = "scale(1)";
    }
});

mover.addEventListener("mouseover", function () {
    if (mover.style.textAlign == "center") {
        mover.style.textAlign = "left";;
    }else {
        mover.style.textAlign = "center";
    }
    
});

mout.addEventListener("mouseout", function () {
    if (mout.style.textAlign == "center") {
        mout.style.textAlign = "left";;
    }else {
        mout.style.textAlign = "center";
    }
});   

cmenu.addEventListener("contextmenu", function () {
    alert("NO SE PUEDE HACER CLICK DERECHO EN ESTE ELEMENTO");
});

mdown.addEventListener("mousedown", function () {
    if (mdown.style.border == "") {
        mdown.style.border = "1px solid red";
    }else {
        mdown.style.border = "";
    }
});

mup.addEventListener("mouseup", function () {
    if (mup.style.border == "") {
        mup.style.border = "1px solid red";
    }else {
        mup.style.border = "";
    }
});

menter.addEventListener("mouseenter", function () {
    if (menter.style.border == "") {
        menter.style.border = "1px solid red";
    }else {
        menter.style.border = "";
    }
});

wheel.addEventListener("wheel", function (e) {
    let escala = 1

    e.preventDefault();
    if (e.deltaY < 0) {
        escala = 1.1;
    } else {
        escala = 0.9;
    }

    wheel.style.transform = `scale(${escala})`;
    wheel.style.transition = "transform 0.5s ease";
});