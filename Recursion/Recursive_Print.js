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
function Recursive_Print(L,R){
if(L>R){
    return "";
}
return L+" "+Recursive_Print(L+1,R);
}
let input=parseInt(readLine());
for(let i=0;i<input;i++){
    let L_R=readLine().split(" ");
    let L=parseInt(L_R[0]);
    let R=parseInt(L_R[1]);
    console.log(Recursive_Print(L,R));
}



/* Question  

Recursive Print
You have been given two integers L and R respectively. You need to print all the number between L and R (both inclusive) without using loop, as space seperated values.

Note: DO NOT USE LOOP/s
Input
First line contains one integer t, denoting number of testcases. Its is followed t lines:

Each line contains two space seperated values denoting L and R respectively.
Output
One line for each testcase, containing space seperated values (between L and R, both inclusive).

Example
Input:

2
10 17
56 66
Output:

10 11 12 13 14 15 16 17
56 57 58 59 60 61 62 63 64 65 66
*/