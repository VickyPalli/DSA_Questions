let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let Test_cases = parseInt(readLine());
for(let i=0;i<Test_cases;i++){
    let input=readLine();
    let unique = new Map();
    unique.set("0 0",1);
    let count_a=0, count_b=0, count_c=0, count=0;
    for(let j=0;j<input.length;j++){
        if(input[j]==="a") count_a++;
        else if(input[j]==="b") count_b++;
        else if (input[j]==="c") count_c++;
        let temp = (count_a-count_b)+" "+(count_a-count_c);
        if(unique.has(temp)){
            count+=unique.get(temp);
            unique.set(temp,unique.get(temp)+1);
        }else{
            unique.set(temp,1)
        }
    }
    console.log(count);
}


/* Question 
Beautiful String
A string is beautiful if it has equal number of a,b,and c in it.

Example "abc" , "aabbcc" , "dabc" , "" are beautiful.

Given a string of alphabets containing only lowercas aplhabets (a-z), output the number of non-empty beautiful substring of the given string.

Input
The first line of the input contains an integer T denoting the number of test cases. The description of T test cases follows. Each test case consists of a line containing a string a length L.

Last contain value of K.

Output
For each test case, output a single line containing the number of beautiful substring.

Example
Input:

2

abacbcba

dbacd

Output:

5

6

Explanation
Test Case 1 The output will be 5 ("abacbc","bac",”acb”, ”acbcba”,"cba")

Test Case 2 The output will be 6 ("d", "dbac", "dbacd", ”bac”, "bacd", "d")

*/