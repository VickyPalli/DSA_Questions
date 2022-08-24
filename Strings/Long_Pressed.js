let fs = require("fs");
const { start } = require("repl");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
var isLongPressedName = function(name, typed) {
  let Start=0;
  for(let i=0;i<typed.length;i++){
    if(name[Start]===typed[i]){
      Start++;
    }else if(typed[i]===name[Start-1]){
         continue;
    }else {
      return "False";
    }
  }
  if(Start===name.length){
    return "True";
  }else{
    return "False";
  }
};
let Test_Cases = parseInt(readLine());
while(Test_Cases--){
  let Given_Str = readLine().split(" ");
  console.log(isLongPressedName(Given_Str[0],Given_Str[1]));
}







/*

Long Pressed
Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed. Else return False

Input format
The first line contains n, the number of test cases

This is followed by n lines, each containing two strings. The first string is the given name; the second string is the tyed name.

Output format
The output file contains n lines, each either True or False

Sample input
2

alex aaleex

saeed ssaaedd

Sample output
True

False

Explanation
The first line contains 2 indicating 2 test cases.

For the first test case, alex is the actual name, aaleex is the typed name

For the second test case, saeed is the actual name, ssaaedd is the typed name

The outputs are True and False respectively.

*/