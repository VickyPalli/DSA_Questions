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
let K=parseInt(readLine());
let input=readLine().split(" ");
let unique = new Map();
for(let i=0;i<input.length;i++){
    if(unique.has(input[i])){
        unique.set(input[i],unique.get(input[i])+1);
    }else{
        unique.set(input[i],1);
    }
}
let output=[];
for(let value of unique.keys()){
    if(unique.get(value)>K){
        output.push(value);
    }
}
output.sort()
if (output.length > 0) {
   for (let result of output) {
     console.log(result)
   }
} else {
  console.log("no such names in this town!!!")
}


/* Question 
Recurring Names
We are given a list of names in a town and a number k. Find all the names which has occured more than k times.

Names are case Sensitive.

Input format
First lines contains k.

Second line contains names of people in the town. Names are separated by a space.

Output format
N lines, each line containing a name which has occured more than k times.

Print the names in the alphabetical order.

If no such names exists, print exactly no such names in this town!!!

Sample input
2

hughie homelander noir maeve hughie noir a-train stormfornt hughie noir a-train A-train

Sample output
hughie

noir

Explanation
hughie and noir has occured 3 times which is more than given k = 2.

*/