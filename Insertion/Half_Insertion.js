let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let str = readLine().split("");
let count = str.length-1;
for(let count=parseInt(str.length/2);count<str.length;count++){
  let temp = str[count];
  let k=count-1;
  while(k>=parseInt(str.length/2) && str[k]>temp){
     str[k+1]=str[k];
     k--;
  }
  str[k+1]=temp;
}
console.log(str.join(""));




/* 
Half Insertion
You have been given a string containing numbers, alphabets and special characters. You only need to sort the secoond half of the string using Insertion sort. (If the length of the string is odd, consider the middle character as the part of the second half as well.)

Input
One string

Output
Resultant string, with first half unsorted & second half sorted.

Example
Input1:

adcbe
Output1:

adbce
*/