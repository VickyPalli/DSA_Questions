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
let Parent_string = readLine().trim();
let String_Dic = readLine().trim().split(" ");
let max=0;
for(let str of String_Dic){
    let i=0;j=0;
   while(j<Parent_string.length){
       if(str[i]===Parent_string[j]){
           i++,j++; 
       }else{
           j++;
       }
   }
   if(i===str.length){
       max=Math.max(max,str.length); 
   }
}
console.log(max);


/* Question 
Dictionary String
Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. You have to print the length of the longest string only.

Input
First line of input contains the String. Second line of the input contains the Dictionary of strings that need to be found in the String.

Output
Print the length of the longest string in the dictionary which can be made by deleting the characters in the main String

Constraints
The size of the dictionary won't exceed 1,000.

The length of all the strings in the input won't exceed 1,000.

Example
Input:

abcdabcdpple

apple bad desk banana me this that a abc abcd pple

Output:

5

Explanation
the words apple, bad, a, abc, abcd, pple can be made from the main string. The longest among these is "apple" with length=5

*/