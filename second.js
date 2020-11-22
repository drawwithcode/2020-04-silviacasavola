//WDECLARE THE BACKGROUND
let bg;

//DECLARE THE WEBCAM CAPTURE
let capture;

//RANDOM TEMPERATURE
let randomcounter;
let temperature;

// GRADIENT COLORS
let c1, c2, c3;

// LOAD URL
const urlString = window.location.href;
const url = new URL(urlString);

//SETUP
function setup() {
createCanvas(windowWidth, windowHeight);
bg = loadImage("assets/background.jpg");

let y_unit = windowHeight/20

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


//BUTTON
stop = createButton("STOP");
stop.size(windowWidth/8, y_unit*2);
stop.style("position", "absolute");
stop.position((windowWidth/4)*3, y_unit*14.6);
stop.style("font-size", "25px");
stop.style("font-family", "Roboto");
stop.style('background-color', color("white"));
stop.style("text-align", "center");
stop.style("cursor", "pointer");
stop.style("border-style", "dashed");
stop.style("border-width", "5px");
stop.style("border-color", "black")
stop.mousePressed(stopCount);



//FRAMERATE
frameRate(4);
}

function draw() {
//DRAW THE BACKGROUND
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

//RANDOM POINTER
var randomcounter = random(34, 41);
var temperature = round(randomcounter, 1);
let x_line = map(temperature, 34, 41, gradient_x, gradient_x + gradient_width * 2)

  push();
  fill("white")
  stroke("white")
  rect(x_line, gradient_y, 10, gradient_height)
  loop();
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

	p1.setup = function() {
		var cnv = p1.createCanvas(380, 480);

    //PUT THE CANVAS INSIDE THE DIV
		cnv.parent(container);
    cnv.style("z-index", "-1");

    //SET UP CAM
    capture = p1.createCapture(VIDEO);
    capture.hide();

    //FRAMERATE
    p1.frameRate(4);
	};

p1.draw = function() {
  p1.background("white");

  //TEMPERATURE
  var randomcounter = random(34, 41);
  var temperature = round(randomcounter, 1);


  //CAM
let r;
let g;
let b;
if (temperature <35.5) {
r = 100; g = 100; b = 200;
} else if (temperature <37){
r= 100; g = 200; b = 150;
} else {
r= 200; g =100; b = 100;
}

push();
if (capture.loadedmetadata);
p1.imageMode(CORNER);
let web = p1.image(capture, -170,-20, 650, 500);
p1.tint(r, g, b, 200);
pop();

//RANDOM TEMPERATURE
push()
p1.text(temperature + "°C", 190, 250);
p1.textSize(100);
p1.fill("white");
p1.strokeWeight(3);
p1.textFont("Roboto");
p1.textAlign(CENTER);
pop();
	};
}

let p1 = new p5(sketch);


// STOP COUNT FUNCTION
function stopCount() {
  var randomcounter = random(34, 41);
  var temperature = round(randomcounter, 1);
  if (temperature <35.5) {
  window.open(url.origin + "2020-04-silviacasavola/result1.html?yourTemperature=" + temperature, "_self")
} else if (temperature <37){
  window.open(url.origin + "2020-04-silviacasavola/result2.html?yourTemperature=" + temperature, "_self")
} else {
  window.open(url.origin + "2020-04-silviacasavola/result3.html?yourTemperature=" + temperature, "_self")
}
}
