let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
class Circle {
    constructor(radius){
        this.radius=radius;
    }
    getArea(){
        if(this.radius>0){
        let area=3.14*this.radius*this.radius;
        if(area>parseInt(area)){
            area++
        }
        return parseInt(area);
    }else {
        return 0;
    }
    }
    getCircumference(){
        if(this.radius>0){
        let circum=2*3.14*this.radius;
        if(circum>parseInt(circum)){
            circum++
        }
        return parseInt(circum);
    }else {
        return 0;
    }    
    }

}



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.



let oneCircle = new Circle(parseFloat(readLine()));
console.log(parseFloat(oneCircle.getArea()));
console.log(parseFloat(oneCircle.getCircumference()));