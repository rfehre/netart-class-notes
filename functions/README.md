# Homework

-make a brush in p5.js that has to follow certain rules
-has to be its own encapsulated function
-has to take in arguments, at the very least x and y
-can't be pure function, has to have side effect -> specifically -that it must render some kind of image to the p5 canvas
-when you use brush, see something on the Canvas



## very simple example

function brush(x, y) {
    let s = 10
    ellipse(x-s/2, y, s)
    ellipse(x+s/2, y, s)
}


function setup(){
    createCanvas(innerWidth, innerHeight)
}

function draw() {
    brush(mouseX, mouseY)
}

jsfiddle.net/xL3hjwu6/
