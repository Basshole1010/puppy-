var puppy;
var feed = []; // an empty array
var numFood = 10;

var a = [1, 2, 3];

function setup() {
    rectMode(CENTER);
    createCanvas(1024, 768);
    puppy = new Puppy();

    // initializing 10 pieces of food
    for (var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0, 255, 0);
    puppy.display();

    // display all the food
    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    puppy.eat();
}

function Food(x, y) {
    // keyword this
    // makes variables public on the object

    // public instance variables
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;

    this.display = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Puppy() {
    // private instance variables
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    var ate = false;


    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };

    this.eat = function () {
        console.log('try to eat');
        ate = true;
        setTimeout(function () {
            ate = false;
        }, 2000);
        for (var i = feed.length - 1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                diameter = 200;
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
            }
        }
    };

    this.display = function () {
        if (!ate) {
            diameter--;
        }
        x = mouseX;
        y = mouseY;
        noStroke();
        //face
        background('#FFFAED');
        noStroke();
        fill('#FFDAED');
        ellipse(x, y, 200, 200);
        
        //nose 
        fill('#DDDFFF');
        ellipse(x, y + 30, 90, 25);
       
        //eyeleft
        fill('#FFFFFF');
        ellipse(x + 42, y - 26, 64, 64);
       
        //pupilleft
        if (mouseIsPressed) {
            fill('#9400D3');
            ellipse(x + 42, y - 26, 10, 10);    
        }else{
            fill('#EE3E36');
            ellipse(x + 42, y - 26, 10, 10);  
        }
        
        //eyeRight
        fill('#FFFFFF');
        ellipse(x - 42, y - 26, 64, 64);
       
        //pupilright
        if (mouseIsPressed) {
            fill('#9400D3');
            ellipse(x - 42, y - 26, 10, 10);    
        }else{
            fill('#EE3E36');
            ellipse(x - 42, y - 26, 10, 10);  
        }

        //earleft
        fill('#98CFFD');
        push();
        translate(x - 100, y - 70);
        rotate(Math.PI / 4);
        ellipse(0, 0, 50, 4);
        pop();
       
        //earRight 
        fill('#98CFFD');
        push();
        translate(x + 85, y - 80);
        rotate(-Math.PI / 4);
        ellipse(0, 0, 50, 4);
        pop();
    }
}



/**
 //eyeleft
        fill('#FFFFFF');
        ellipse(x + 42, y - 26, 64, 64);
       
        //pupilleft
        fill('#FF6347');
        ellipse(x + 42, y - 26, 10, 10);
        
        //eyeRight
        fill('#FFFFFF');
        ellipse(x - 42, y - 26, 64, 64);
       
        //pupilleft
        fill('#FF6347');
        ellipse(x - 42, y - 26, 10, 10);
**/ 