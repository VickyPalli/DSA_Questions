let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function stringInsertionSort(str){
  // Your code goes here
  str = str.split("");
  for(let i=0;i<str.length;i++){
      let temp =str[i];
      let j=i-1;
      while(j>=0 && str[j] > temp){
          str[j+1]=str[j];
          j--
      }
      str[j+1]=temp;
  }
  return str.join("");
}


//DO NOT CHANGE ANYTHING BELOW THIS LINE

let input_string = readLine()
console.log(stringInsertionSort(input_string))




/* String Insertion
The task is to complete the stringInsertionSort() function which is used to implement Insertion Sort, for string.

The resultant string should have characters in lexicographically sorted order. You don't need to worry about input/output.

Input
One string

Output
Sorted string

Example
Input1:

adcb
Output1:

abcd
*/