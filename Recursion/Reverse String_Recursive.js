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
function Reverse_String(input){
let n=input.length-1;
let output=Sub_Function(n);
function Sub_Function(n){
    if(n===-1){
        return "";
    }
    return input[n]+Sub_Function(n-1);
}
return output;

}

let Test_case=parseInt(readLine());
for(let i=0;i<Test_case;i++){
    let input=readLine();
    console.log(Reverse_String(input));
}


/*  Question 
Reverse String: Recursive
Description
You are given a string. Write a function that reverses the string.

IMPORTANT
Your function should NOT use the following.

Loops (you can use a loop to read the test cases)
In-built functions like reverse
Input format
First line contains n, the number of test cases.
This is followed by n lines, each containing one input string.

Output format
n lines, each containing one string, which is the reverse of the corresponding input string.

Sample input
2
hello
winter
Sample output
olleh
retniw
Explanation
First line contains 2, meaning there are 2 test cases.
Reverse of hello is olleh. So first line of output is olleh.
Reverse of winter is retniw. So second line of output is retniw.

  



Question ---- palindrome  Reverse

Palindrome: Recursive
Description
A palindrome is a string that reads the same forward and backwards.
Write a function that reads a string and returns

True if the given string is a palindrome
False if the given string is not a palindrome
IMPORTANT
Your function should NOT use the following.

Loops (you can use a loop to read the test cases)
In-built functions like reverse
Input format
First line contains n, the number of test cases.
This is followed by n lines , each containing one input string.

Output format
n lines, each containing either True or False, depending on whether the corresponding input string is a palindrome or not

Sample input
2
tenet
ayashdashd
Sample output
True
False
Explanation
First line contains 2, meaning there are 2 test cases.
tenet is a palindrome. So first line of output is True.
ayashdashd is not a palindrome. So second line of output is False.



solution ------



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
function Palindrome_String(input){
    let current_Words= input.substring(0,input.length-1)
    if(input.length<=1){
        return input;
    }
    
    return input[input.length-1]+Palindrome_String(current_Words);
    
}
let N=parseInt(readLine());
for(let i=0;i<N;i++){
    let input=readLine();
    let receive=Palindrome_String(input);
    if(input==receive){
        console.log("True");
    }else{
        console.log("False");
    }
}


*/