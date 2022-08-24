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
var lengthOfLongestSubstring = function(s) {
  if(s.length===0){
      return 0;
  }
  let longest =0;
  let unique = new Set();
  let Left=0,right=0;
  while(right<s.length){
      if(!unique.has(s.charAt(right))){
         unique.add(s.charAt(right));
         longest=Math.max(longest,unique.size);
         right++;
      }else{ 
          unique.delete(s.charAt(Left));
          Left++;
      }
  }
  return longest;
  };
let Test_Cases = parseInt(readLine());
for(let i=0;i<Test_Cases;i++){
    let data = readLine();
    if(data===undefined){
        console.log(lengthOfLongestSubstring(""));
    }else{
      console.log(lengthOfLongestSubstring(data));
    }
}










/*



longest-substring
Description
Given a string s, find the length of the longest substring without repeating characters.

Constraints:

0 <= s.length <= 10^4
s consists of English letters, digits, symbols and spaces.
Input format
First line denotes t, denoting the number of tescases. Each test case contains a string s in one line.

Output format
One line for each test case.

Sample input
3
abcabcbb
bbbbb
Sample output
3
1
0
Explanation
For the first testcase, the answer is "abc", with the length of 3.
For the second testcase, the answer is "b", with the length of 1.
For the third testcase, the answer is "", with the length of 0.
  */