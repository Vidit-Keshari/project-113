function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(240, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 120, 70, 400, 350);
    fill(0, 255, 0);
    stroke(0, 0, 255);
    strokeWeight(3)
    circle(100, 40, 50,);
    circle(542, 40, 50,);
    circle(542, 443, 50,);
    circle(100, 443, 50,);
    fill(255, 0, 0);
    stroke(0, 0, 150);
    strokeWeight(3)
    rect(126, 15, 389, 50);
    rect(525, 66, 50, 350);
    rect(126, 425, 389, 50);
    rect(65, 66, 50, 350);
}

function take_snapshot() {
    save('project113.png');
}

function info() {
    window.alert("This is my (Vidit Keshari) first application on p5.js");
}