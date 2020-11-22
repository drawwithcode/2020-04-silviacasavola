//DECLARE THE BACKGROUND
let bg;

function setup() {
createCanvas(windowWidth, windowHeight);

//LOAD THE BACKGROUND
bg = loadImage("./assets/background.jpg");


//TITLE
let y_unit = windowHeight/20

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

//ENTER BUTTON
enter = createButton("ENTER");
enter.parent(container);
enter.size(windowWidth/8, y_unit*2)
enter.style("margin", "auto");
enter.style("margin-top", "90%");
enter.style("font-size", "25px");
enter.style("font-family", "Roboto");
enter.style('background-color', color("white"));
enter.style("text-align", "center");
enter.style("cursor", "pointer");
enter.style("border-style", "dashed");
enter.style("border-width", "5px");
enter.style("border-color", "black");
enter.mousePressed(createAlert);
}


//DRAW
function draw() {
//DRAW THE BACKGROUND
  background(bg);
}

//ALERT FUNCTION
function createAlert() {
let y_unit = windowHeight/20

//HIDE THE "ENTER" BUTTON
  enter.hide();

//CREATE ALERT
  alert = createDiv("HALT! <br> You need to check your temperature to get in.")
  alert.parent(container);
  alert.style("position", "absolute")
  alert.style("font-size", "25px");
  alert.style("font-family", "Roboto");
  alert.style("text-align", "center");
  alert.style("padding", "10px")
  alert.style('background-color', color("white"));
  alert.style("border-bottom-style", "dashed");
  alert.style("border-bottom-width", "5px");
  alert.style("border-bottom-color", "black");


//CREATE THE "MEASURE" BUTTON
  measure = createButton("MEASURE");
  measure.parent(container);
  measure.size(windowWidth/8, y_unit*2)
  measure.style("margin", "auto");
  measure.style("margin-top", "90%");
  measure.style("font-size", "25px");
  measure.style('background-color', color("white"));
  measure.style("text-align", "center");
  measure.style("cursor", "pointer");
  measure.style("border-style", "dashed");
  measure.style("border-width", "5px");
  measure.style("border-color", "black");
  measure.mousePressed(function() {
    window.open("second.html", "_self");
  });

//CREATE THE GRADIENT
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
