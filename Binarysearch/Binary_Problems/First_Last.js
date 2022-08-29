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
let size = parseInt(readLine())
let input = readLine().trim().split(" ").map(Number)
let target  = parseInt(readLine())
function Firstindex(arr,element){
    let start = 0;
    let end = arr.length-1;
    let result = -1;
    for(let mid = Math.floor((start+end)/2);start<=end; mid = Math.floor((start+end)/2)){
        if(arr[mid]===element){
            result = mid;
            end = mid-1;
        }else if(arr[mid]<element){
            start = mid + 1
        }else{
            end = mid-1;
        }
    }
    return result;
}
function Lastindex(arr,element){
    let start = 0;
    let end = arr.length-1;
    let result = -1;
    for(let mid = Math.floor((start+end)/2);start<=end; mid = Math.floor((start+end)/2)){
        if(arr[mid]===element){
            result = mid;
            start = mid+1;
        }else if(arr[mid]<element){
            start = mid + 1
        }else{
            end = mid-1;
        }
    }
    return result;
}

console.log(Firstindex(input,target),Lastindex(input,target))









/*


First & Last
Description
Given a sorted array with possibly duplicate elements, the task is to find indexes of first and last occurrences of an element x in the given array.

Note:
If the number x is not found in the array just print -1 -1. Your algorithm’s runtime complexity must be in the order of O(log n).

Input format
First line contains a positive integer N, denoting the number of elements in the array. The next line contains n space seperated integers. The next line contains a target integer x.

Output format
Two space seperated integers denoting the first and last occurrences of x

Sample input
6
5 7 7 8 8 10 
8
Sample output
3 4
Explanation
The starting index of 8 is 3 and the ending index of 8 is 4.

Sample input
6
5 7 7 8 8 10 
6
Sample output
-1 -1
Explanation
There is no occurence of 6. Hence, the starting and ending index are marked as -1 and -1.

*/
