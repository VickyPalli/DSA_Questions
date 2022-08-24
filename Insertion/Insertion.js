let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function Convert_to_number(list){
  for(let each in list){
    list[each]=Number(list[each])
  }
}


function insert(arr,n){
  // Your code goes here
  for(let i=0;i<arr.length;i++){
      let temp = arr[i];
      let j=i-1;
      while(j>=0 && arr[j]>temp){
          arr[j+1]=arr[j];
          j--;
      }
      arr[j+1] = temp;
  }
}

// DO NOT EDIT ANYTHING BELOW THIS LINE

let n = parseInt(readLine())
let arr = readLine().split(" ")
Convert_to_number(arr)
insert(arr, n)
console.log(...arr)







/*     



insertion
The task is to complete the insert() function which is used to implement Insertion Sort. You don't need to worry about input/output.

Insertion Sort Visualization

Input
First line denotes n, the size of the given array. The next line denotes the spaces seperated integers, which are the elements of the given array.

Output
Sorted array, as space seperated values.

Example
Input1:

5
4 1 3 9 7
Output1:

1 3 4 7 9
*/