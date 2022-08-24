let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named as `Rectangle`. 
// Method to get area should be named as `rectangleArea`.
// Method to get perimeter should be named as `rectanglePerimeter`.
// You should be taking `length` and `width` as inputs when creating the object for your class.
class Rectangle {
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
    rectangleArea(){
        if(length>0 && width>0){
            let area=length*width;
            return area;
        }else {
            return 0;
        }
    }
    rectanglePerimeter(){
        if(length>0 && width>0){
            let peri=2*(length+width);
            return peri;
        }else {
            return 0;
        }   
    }
}

let length = parseInt(readLine());
let width  = parseInt(readLine());
let newRectangle =new Rectangle(length,width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());










/*



area and perimeter of rectangle - Classes practice problems - JS
Design a class which has 2 methods. One which computes the Area of the Rectangle. The other computes the Perimeter of the Rectangle. You should be able to pass the length length and width width while creating the object for the class. For all infeasible values of length length and width width, print area and perimeter as 0

Your class should be named as Rectangle. Method to get area should be named as rectangleArea. Method to get perimeter should be named as rectanglePerimeter.

Input
First line contains an integer for the length l Second line contains an integer for the width w

Output
Two lines containing integers. First line containing the Area of the Rectangle Second line containing the Perimeter of the Rectangle

Example
Input:

3
2
Output:

6
10
Explanation

First line is 3 representing the length. Second line is 2 representing the width. Area is 3*2 which is 6 as represented in the first line of the output. Perimeter is 2*(3 + 2) which is 10 as represented in the second line of the output.

*/