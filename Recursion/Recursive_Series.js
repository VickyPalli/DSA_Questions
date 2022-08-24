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
function s(n){
if(n<=9){
  return n;
}
if(n%2===0){
  return s(n-10);
}else{
  return s(n-9);
}
}
let n=parseInt(readLine());
for(let i=0;i<n;i++){
  console.log(s(parseInt(readLine())));
}



/* Question    


Recursive Series
A recursive series is defined as:

S[i] = S[i-9], if i is odd
     = S[i-10] , if i is even
     = i      , if i <= 9 
You have been given an integer n. You need to find the nth term of this series using recursion.

Note: DO NOT USE LOOP/s
Input
First line contains one integer t, denoting number of testcases. Its is followed t lines:

Each line contains one integer denoting n.
Output
One line for each testcase, denoting the result.

Example
Input:

2
5
16
Output:

5
6
*/