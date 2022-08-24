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
function N_terms_series (n){
if(n===1){
    return 1
}
let p=1;
for(let i=((n*(n-1))/2)+1;i<=(n*(n+1))/2;i++){
	p*=i
}
return p+N_terms_series(n-1);
}
let N=parseInt(readLine());
for(let i=0;i<N;i++){
	let n=parseInt(readLine());
	console.log(N_terms_series(n));
}


/*  Question  
Recursive Sequence
A function f is defined as follows f(n) = (1) +(2x3) + (4x5x6) ... (n-terms). Given an integer n the task is to print the value of f(n).

Note: f(n) is a fast growing function. So, do not try large values of n, as its value can overflow in many programming languages.

Input
The first line of input contains an integer t denoting the number of test cases. Then t test cases follow. Each test case contains an integer n.

Output
t lines containing 1 integer each, denoting the value of f(n) for that particular test case.

Example
Input:

3

1

2

5

Output:

1

7

365527

Explanation:
f(1) = 1

f(2) = 1 + (2x3) = 1 + 6 = 7

f(5) = 1+(2x3)+(4x5x6)+(7x8x9x10)+(11x12x13x14x15) = 365527

*/
