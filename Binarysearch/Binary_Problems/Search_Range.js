let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking Given_Data, it will read one line of from the Given_Data  and is stored in string format

let size = parseInt(readLine())
let Given_Data = readLine().trim().split(" ").map(Number)
let range = readLine().trim().split(" ").map(Number)
let output = [-1,-1]
function Firstindex(array,element){
    let start = 0;
    let end = array.length-1;
    for(let mid = Math.floor((start+end)/2);start<=end; mid = Math.floor((start+end)/2)){
        if(array[mid]===element){
            output[0]=mid
            end = mid-1;
        }else if(array[mid]<element){
            start = mid + 1
        }else{
            output[0]=mid;
            end = mid-1;
        }
    }
}
function Lastindex(array,element){
    let start = 0;
    let end = array.length-1;
    for(let mid = Math.floor((start+end)/2);start<=end; mid = Math.floor((start+end)/2)){
        if(array[mid]===element){
            output[1] = mid;
            start = mid+1;
        }else if(array[mid]<element){
            output[1]=mid;
            start = mid + 1
        }else{
            end = mid-1;
        }
    }
}

Firstindex(Given_Data,range[0])
Lastindex(Given_Data,range[1])
if(output[0]>output[1]){
    output[0]=-1;
    output[1]=-1;
    console.log(...output)
}else{
    console.log(...output) 
}


/*

Search Range
Given a sorted arrayay of integers A of size N. Find the start and the ending index of the numbers in the given range (inclusive of start and ending point).

Your algorithm’s runtime complexity must be in the order of O(log n).

Return -1 -1 if there are no elements in the given range.

Given_Data format
First line contains a positive integer N, denoting the number of elements in the arrayay. The next line of the Given_Data contains N space seperated integers, which are the elements of the given arrayay. The next line contains 2 integers, which specifies the range, we need to search.

Output format
2 space seperated integers, denoting the result.

Sample Given_Data1
6
1 2 3 3 4 5
3 4
Sample output1
2 4
Explanation1
The starting index of 3 is 2 and the ending index of 4 is 4.

Sample Given_Data2
10
1 2 3 3 4 4 7 7 10 10
5 6
Sample output2
-1 -1
Explanation2
There are no elements in the range of 5 to 6. Hence, the output is -1,-1.

*/
