let angle = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');
}

function draw() {
    background(0, 100);
    angle = sin(frameCount * 0.008) * PI / 2;
    strokeWeight(1);
    translate(width / 2, height * 0.75);
    branch(120);
}

function branch(len) {
    let gradient = lerpColor(color('#e2c08d'), color('#ffdfba'), len / 120);
    stroke(gradient);

    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
