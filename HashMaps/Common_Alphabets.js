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
let Testcases= parseInt(readLine())
let First_String = readLine()
let Base_map = new Map()
for(let i=0; i<First_String.length; i++){
    if(Base_map.has(First_String[i])){
        Base_map.set(First_String[i], Base_map.get(First_String[i])+1)
    }else{
        Base_map.set(First_String[i], 1)
    }
}
for(let count=1;count<Testcases-1;count++){
    let compare_map = new Map()
    let Second_String = readLine()
    for(let i=0; i<Second_String.length; i++){
        if(Base_map.has(Second_String[i]) && Base_map.get(Second_String[i])>0){
            if(compare_map.has(Second_String[i])){
                compare_map.set(Second_String[i],compare_map.get(Second_String[i])+1);
            }else{
                compare_map.set(Second_String[i],1);
            }
            Base_map.get(Second_String[i])-1;
        }
    }
    Base_map=compare_map;
}
for(let [key,value] of [...Base_map].sort()){
    console.log(key,value);
}



/* question

Common Alphabets
Given list of strings. The task is to find the frequency of the elements which are common in all strings given in the list of strings.

Input:
First line contains N, number of strings.

Next N lines contians a string in each line.

Output:
N linese each line contains an alphabet and it's frequency in sorted order for each of the input string.

alphabet and the frequency are separated by a space

Problem Constraints:
1<=A.length<=500

1<=A[0].length<=100

Examples:
Input :

3

gefgek

gfgk

kinfgg

Output :

f 1

g 2

k 1

Explanation :
f occurs once in all Strings.

g occurs twice in all the strings.

k occurs once in all string.

Output is in ascending order


*/