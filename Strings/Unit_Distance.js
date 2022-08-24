let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function isEditDistanceOne (str1,str2){
// Complete this function, and return True/False
if(Math.abs(str1.length - str2.length) > 1) return "False";
let i=0 , j=0 , count=0;
while( i<str1.length || j<str2.length ){
    if(str1[i]===str2[j]){
        i++,j++;
    }else{
        count++;
        if(count>1){
            return "False"
        }
        if(str1.length>str2.length){
        i++;
    }else if (str1.length<str2.length){
        j++
    }else{
        i++,j++;
    }
}
}
if(count===1){
    return "True"
}
return "False";
}
let Test_Cases = parseInt(readLine());
for(let i=0;i<Test_Cases;i++){
  var [input_string1,input_string2]= readLine().split(" ")
  console.log(isEditDistanceOne(input_string1, input_string2))
}





/*    




unit-distance
Description
Check if edit distance between two strings is one or not. If its one, print True else False. Number of edits done to the string a to get string b is called the edit distance.

An edit between two strings is one of the following changes:

- Add a character
- Delete a character
- Change a character
Note:
The strings are case sensitive, and they may also contain symbols or numbers.
Input format
First line denotes t, denoting the number of testcases. Each test case contains two space seperated strings in one line.

Output format
One line for each test case.

Sample input
2
peaks peeks
bbbbb bbbbb
Sample output
True
False
Explanation
Number of edits in first case is 1, hence True. (The edit is to change the 3rd character of first string 'a' to 'e', or vice versa)
Number of edits in first case is 0, hence False.   







*/