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
function Palindrome_Checker(str){
  let start=0,end=str.length-1;
  while(start<end){
    if(str[start]!==str[end]){ 
      if(isValid(str,start+1,end) || isValid(str,start,end-1)){
       return "True";
      }else{
        return "False";
      }
    }
    start++;
    end--;
  }
  return "True";
}
function isValid(str,start,end){
while(start<end){
  if(str[start]!==str[end]){
    return false;
  }
  start++;
  end--;
}
return true;
}
let Test_Cases = parseInt(readLine());
for(let i=0;i<Test_Cases;i++){
    console.log(Palindrome_Checker(readLine()));
}






/*   
Modified Palindrome
Description
Given a non-empty string s. You may delete at most one character. Return True if s can be made palindrome, else return False.

Input format
First line denotes t, denoting the number of testcases. Each test case contains a string s in one line.

Output format
One line for each test case denoting True or False.

Sample input
3
aba
abca
abcd
Sample output
True
True
False
Explanation
The first testcase is already a palindrome.
The second one will become palindrome if we delete the character `c`.
The third one cannot become palindrome by removing atmost one character.
*/