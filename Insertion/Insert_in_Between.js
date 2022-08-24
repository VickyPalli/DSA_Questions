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
let N_X = readLine().split(" ");
let arr = readLine().split(" ").map(Number);
let j=arr.length-1;
while(j>=0 && arr[j]>parseInt(N_X[1])){
  arr[j+1]=arr[j];
  j--;
}
arr[j+1]=parseInt(N_X[1]);
console.log(...arr);











/* 
Insert in Between
You have been given a sorted array arr and one integer x. You need to insert x into the given array, such that the array still remains sorted.

Input
Two space seperated values, denoting n and x respectively. One line containing n space seperated values, denoting the elements of the array.

Output
Resultant array.

Example
Input1:

5 3
1 2 3 4 5
Output1:

1 2 3 3 4 5
*/