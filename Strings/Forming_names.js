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
let n = parseInt(readLine());
let x = readLine();
let list = readLine().split(" ");
let mymap = new Map();
for(let i =0;i<list.length;i++){
    if(!mymap.has(list[i])){
        mymap.set(list[i]);
    }
}
let flag = true;
for(let i=0;i<x.length;i++){
    if(!mymap.has(x[i])){
        flag=false;
        break;
    }
}
if(flag===true){
    console.log(flag)
}else{
    console.log(false);
}




/* 

Forming names
Description
Given a list of characters of size N and a string x. Return true if characters of the list cqan be used to form string x and if not return false. Note that you can use characters any number of times.

Input format
First line contains a positive integer n that denotes the number of characters in the list. Second line contains a string x that is to be formed using characters of the list. Third line contains n space separated characters of list where each character is a lower case english alphabet.

Output format
For the given list and string print true if string x can be formed using characters of the list any number of times, false otherwise.

Sample input-1
7 
tanmay
y t n m b a r 
Sample output-1
true
Explanation-1
List contains all the alphabets of string 'tanmay'. As characters can be used any number of times we can use 'a' twice to get the string 
Sample input-2
4
ananya
a v n y
Sample output-2
true
Explanation-2
List contains all the alphabets of string 'ananya'. As characters can be used any number of times we can use 'a' thrice, 'n' twice and 'y' once to form the given string. 
Sample input-3
5
anu
a b c u v
Sample output-3
false
Explanation-3
List does not contain 'n', therefore we cannot form string 'anu' by using characters of the list.
*/