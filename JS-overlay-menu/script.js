
var menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener('click', toggleMenu);



function toggleMenu(e) {

    var overlay = document.getElementsByClassName("overlay")[0];


    var speed = 10;

    var eventTarget = e.target;

    if (eventTarget.className == "btn-open") {
        fadeIn(overlay, speed);
        eventTarget.className = "btn-close";
    }
    else if (eventTarget.className == "btn-close") {
        fadeOut(overlay, speed);
        eventTarget.className = "btn-open";
    }

}

function fadeIn(element, speed) {
    var inInterval = setInterval(function () {
        element.style.opacity = Number(element.style.opacity) + 0.02;
        if (element.style.opacity >= 1) {
            element.style.opacity = 1;
            clearInterval(inInterval)
        }
    }, speed)  //10ms == .01s
}


function fadeOut(element, speed) {
    var outInterval = setInterval(function () {
        element.style.opacity = Number(element.style.opacity) - 0.02;
        if (element.style.opacity <= 0) {
            element.style.opacity = 0;
            clearInterval(outInterval)
        }
    }, speed)  //10ms == .01s
}