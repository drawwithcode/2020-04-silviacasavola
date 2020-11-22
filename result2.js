let bg;
let capture;
let temperature;

// GRADIENT
let c1, c2, c3;

//TAKE PARAMETER FROM THE STRING
const urlString = window.location.href;
const url = new URL(urlString);
let parameter = url.searchParams.get("yourTemperature");

//SETUP
function setup() {
bg = loadImage("./assets/background.jpg");
let y_unit = windowHeight/20

createCanvas(windowWidth, windowHeight);

//TITLE
title = createElement("h1", "Hot or not");

title.position(30, y_unit*13.1);
title.style("font-size", "85px");
title.style("color", "white");
title.style("font-family", "Ubuntu Mono");
title.style("padding", "0px")

//SUBTITLE
subtitle = createElement("h2", "2020 edition");
subtitle.style("color", "white");

subtitle.position(y_unit*2, y_unit*16.3);
subtitle.style("font-size", "35px");
subtitle.style("font-family", "Roboto");


//COMMENT
comment = createDiv("You're not hot and you're not cold. <br> You're not yes and you're not no. <br> You're not in and you're not out. <br> Spice it up next time.");
comment.style("position", "absolute");
comment.position(y_unit, windowHeight/3);
comment.style("font-size", "25px");
comment.style("padding", "10px");
comment.style("font-family", "Roboto");
comment.style('background-color', color("white"));
comment.style("border-style", "dashed");
comment.style("border-width", "5px");
comment.style("border-color", "black")


//TRY AGAIN
tryagain = createButton("TRY AGAIN");
tryagain.size(windowWidth/8, y_unit*2);
tryagain.style("position", "absolute");
tryagain.position((windowWidth/4)*3, y_unit*14.6);
tryagain.style("font-size", "25px");
tryagain.style("font-family", "Roboto");
tryagain.style('background-color', color("white"));
tryagain.style("text-align", "center");
tryagain.style("cursor", "pointer");
tryagain.style("border-style", "dashed");
tryagain.style("border-width", "5px");
tryagain.style("border-color", "black")
tryagain.mousePressed(function() {
window.open("second.html", "_self");
})
}

//DRAW
function draw() {
  background(bg);

let y_unit = windowHeight/20;


//GRADIENT COLORS
  c1 = color(0, 0, 255);
  c2 = color(0, 255, 0);
  c3 = color(255, 0, 0);

//GRADIENT
let gradient_y = y_unit*17;
let gradient_width = width/8;
let gradient_height = y_unit;
let gradient_x = (width / 8)*3;

  setGradient(gradient_x, gradient_y, gradient_width, gradient_height, c1, c2);
  setGradient((width / 8)*4, gradient_y, gradient_width, gradient_height, c2, c3);

//LINE
let x_line = map(parameter, 34, 41, gradient_x, gradient_x + gradient_width * 2)

push();
fill("white")
stroke("white")
rect(x_line, gradient_y, 10, gradient_height)
noLoop();
pop();
}


//GRADIENT FUNCTION
function setGradient(x, y, w, h, c1, c2) {
  noFill();
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }


//WINDOW RESIZED
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//WEBCAM CANVAS
let sketch = function(p1) {
let capture;

//SETUP 2
	p1.setup = function() {
		var cnv = p1.createCanvas(380, 480);
		cnv.parent(container);
    cnv.style("z-index", "-1");

//SET UP CAM
    capture = p1.createCapture(VIDEO);
    capture.hide();

p1.frameRate(3);
	};

//DRAW 2
p1.draw = function() {
  p1.background("white");

//COLORI MEDIO
let r = 100;
let g = 200;
let b = 150;


push();
if (capture.loadedmetadata);
p1.imageMode(CORNER);
let web = p1.image(capture, -170,-20, 650, 500);
p1.tint(r, g, b, 200);
pop();

push()
p1.text(parameter + "°C", 190, 250);
p1.textSize(100);
p1.fill("white")
p1.strokeWeight(3);
p1.textFont("Roboto");
p1.textAlign(CENTER);
pop();
	};
}

let p1 = new p5(sketch);
