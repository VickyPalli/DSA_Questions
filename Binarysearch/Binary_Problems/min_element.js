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
let input = readLine().trim().split(" ");
function PivotIndex(arr){
    let start = 0;
    let end = arr.length-1;
    let result = -1;
    for(let mid = Math.floor((start+end)/2);start<=end;mid = Math.floor((start+end)/2)){
        if(start<=mid-1 && parseInt(arr[mid-1])>parseInt(arr[mid])){
            return mid;
        }else if( mid+1<=end && parseInt(arr[mid])>parseInt(arr[mid+1])){
           return mid+1
        }else if(parseInt(arr[start])<=parseInt(arr[mid])){
            start = mid+1
        }else{
            end = mid-1;
        }
    }
    return result;
}
let pivotindex = PivotIndex(input)
if(pivotindex!==-1){
    console.log(parseInt(input[pivotindex]))
}else{
    console.log(parseInt(input[0]))
}