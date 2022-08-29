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
let N_Q = readLine().trim().split(" ").map(Number);
let input = readLine().trim().split(" ").map(Number);
let Q = readLine().trim().split(" ").map(Number);
let result = [];
for(let i=0;i<Q.length;i++){
    let output = BinarySearch(input,Q[i]);
    result.push(output)
}
function BinarySearch(arr,element){
    if(element<=arr[0]){
        return arr[0]
    }
    if(element>=arr[arr.length-1]){
        return arr[arr.length-1]
    }
   let start = 0;
   let end = arr.length-1;
   for(let mid=Math.floor((start+end)/2);start<=end;mid=Math.floor((start+end)/2)){
         if(arr[mid]===element){
            return arr[mid]
         }else if(arr[mid]<element){  
            if(element<arr[mid+1]){
                if(element-arr[mid]>=arr[mid+1]-element){
                    return arr[mid+1]
                }else{
                    return arr[mid]
                }
            }
            start = mid+1;
         }else{
            if(element>arr[mid-1]){  
                if(arr[mid]-element<=element - arr[mid-1]){
                    return arr[mid]
                }else{
                    return arr[mid-1]
                }
            }
               end = mid-1;
         }
   }
   return result;
}

console.log(...result)