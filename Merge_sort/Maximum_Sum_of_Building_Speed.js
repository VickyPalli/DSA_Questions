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
let N = parseInt(readLine());
let workers = readLine().split(" ")
workers.sort((a,b) => a-b)
let result =0
for(let i =0;i<workers.length;i=i+2){
    result += Math.min(workers[i],workers[i+1])
}
console.log(result)


/* Question  
Maximum Sum of Building Speed
You are the king of Pensville where you have 2N workers.

All workers will be grouped in association of size 2,so a total of N associations have to be formed. The building speed of the ith worker is Ai.

To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x. You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.

Input
First line contains an integer N, representing the number of associations to be made.

Next line contains 2N space separated integers, denoting the building speeds of workers.

Output
Print the maximum value possible of the sum of building speeds of all the associations.

Example
Input:

2

1 3 1 2

Output:

3

*/