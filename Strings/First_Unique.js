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
let test_cases = parseInt(readLine());
while(test_cases--){
    let input = readLine();
    let mymap = new Map();
    for(let i=0;i<input.length;i++){
        if(mymap.has(input[i])){
            mymap.set(input[i],[mymap.get(input[i])[0]+1,i]);
        }else{
            mymap.set(input[i],[1,i]);
        }
    }
    let flag = true;
    for(let key of mymap.keys()){
        if(mymap.get(key)[0]===1){
           flag=false;
           console.log(mymap.get(key)[1]);
           break;
        }
    }
    if(flag){
        console.log(-1);
    }
}






/*   First Unique
Description
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Note: A non repeating character is the one that occcurs only one time.

Input
First line of each input contains an integer T denoting the number of test cases.

First line of each test case contains a string .

Output
For each test case print the index of first non-repeating character or else return -1 if no non-repeating character exists.

Example
Input:

2

abc

aa

Output:

0

-1

Explanation
In first test case, 'a' is the first non repeating character and its index is 0.

In second test case, 'a' occurs 2 times thus only repeating character exists hence answer is -1.



*/