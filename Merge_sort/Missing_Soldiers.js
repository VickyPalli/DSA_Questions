let fs = require("fs");
const { start } = require("repl");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let Obstacles = parseInt(readLine())
let arr=[]
while(Obstacles--){
 let data = readLine().split(' ').map(Number)
 arr.push(data)
}
let Sorted_Arr = MergeSort(arr,0,arr.length-1)
function MergeSort(arr,start,end) {
  let Sorted = []
  if(start===end){
    Sorted[0]=arr[start]
    return Sorted
  }
  let Left_s = start;
  let Left_e = start + parseInt((end-start)/2)
  let Right_s = Left_e+1;
  let Right_e = end;
  let Left = MergeSort(arr,Left_s,Left_e)
  let Right = MergeSort(arr,Right_s,Right_e)
  let i=0,j=0,k=0;
  while(i<Left.length && j<Right.length){
       if(Left[i][0]<Right[j][0]){
        Sorted[k]=Left[i]
        i++,k++;
       }else{
        Sorted[k]=Right[j]
        j++,k++
       }
  }
 while(i<Left.length){
     Sorted[k]=Left[i]
     i++,k++
 }
 while(j<Right.length){
  Sorted[k]=Right[j]
  j++,k++
 }
return Sorted;
}
let Ants_No = Sorted_Arr[0][2]+1;  
let Ant_Stop_line =   Sorted_Arr[0][0]+Sorted_Arr[0][2];
for(let i=1;i<Sorted_Arr.length;i++){
     if(Sorted_Arr[i][0]<=Ant_Stop_line){
        let current_Ant_No = Sorted_Arr[i][0]+Sorted_Arr[i][2] 
        if(current_Ant_No>Ant_Stop_line){
          Ants_No+=current_Ant_No-Ant_Stop_line;
          Ant_Stop_line=current_Ant_No;
        }
     }else{
        Ants_No+=1+Sorted_Arr[i][2]
        Ant_Stop_line = Sorted_Arr[i][0]+Sorted_Arr[i][2]
      }
   }
   console.log(Ants_No)



   /* Question 

   Missing Soldiers
You are given data about an army of ants.

Ant behaviour:

Each ant moves only straight up or down i.e. parallel to the y axis
Only one ant in one vertical line
Ants are spaced apart by 1 unit horizontally
Once an ant faces an obstacle, it stops
Data given about obstacles/barriers:

An array of barriers
Every barrier is parallel to x axis
Each barrier contains data about its location and width
Location is in the form of x,y
Width is an integer
Width of the barrier is measured from start point in the right direction
Barriers can overlap
A barrier of width n can stop n+1 ants
Write a function to find the number of ants stopped by these obstacles.

Input
First line contains an integer n, indicating the number of barriers

This is followed by n lines, each line containing x, y, and width of barrier in a space separated array

Output
Output should contain one line with the number of ants that face an obstacle

Example
Input:

2

1 1 3

2 2 5

Output:

7

*/