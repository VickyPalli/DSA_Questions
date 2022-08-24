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
function Hack_money(i,f){   
	if(i>f){    
		return false;
	}
	if(i===f){
		return true;
	}
	return Hack_money(i*10,f) || Hack_money(i*20,f);    
}

let input=parseInt(readLine());
for(let i=0;i<input;i++){
let result =Hack_money(1,parseInt(readLine()));
if(result===true){
	console.log("Yes");
}else{
	console.log("No");
}
}


/*  Question  
Hack Money
Description
You are a bank account hacker. Initially you have 1 rupee in your account, and you want exactly N rupees in your account. You wrote two hacks, First hack can multiply the amount of money you own by 10, while the second can multiply it by 20. These hacks can be used any number of time . Can you achieve the desired amount N using these hacks.

Input
The first line of the input contains a single integer T denoting the number of test cases.

The description of T test cases follows.The first and only line of each test case contains a single integer N.

Output
For each test case, print a single line containing the string "Yes" if you can make exactly N rupees or "No" otherwise.

Example
Input:

5

1

2

10

25

200

Output:

Yes

No

Yes

No

Yes

Explanation
In the 5th case hacker can get Rs. 200 by first using 10x hack and using 20x hack.

*/