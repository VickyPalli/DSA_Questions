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
let TestCases = parseInt(readLine())
while(TestCases--){
    let Arr_Size = parseInt(readLine())
    let arr = readLine().split(" ").map(Number)
    if(Arr_Size===2){
      console.log(Math.abs(arr[0]-arr[1]))
    }else{
      let Copy = arr.slice()
      arr.sort((a,b) => b-a)
      if(Copy[0]===arr[0] && Copy[Copy.length-1]===arr[arr.length-1]){
        let max1 = arr[0]-arr[arr.length-2]
        let max2 = arr[1]-arr[arr.length-1]
        console.log(Math.max(max1,max2))
      }else{
        console.log(arr[0]-arr[arr.length-1])
      }
    }
}



/* Question 
Full Power
Given an array A having N distinct integers.

The power of the array is defined as:

max(A[i]-A[j]) where 2 <= i <= N
for each i, j is the largest index less than i such that A[j] < A[i].
Let's say the array is {1,2,5}, then the power of the array is max((2-1), (5-2)), which simplifies to max(1,3) which is equal to 3.

Operation Allowed: If you are allowed to choose any two indices x and y and swap A[x] and A[y], find out the maximum power that can be achieved.

Note:
You are allowed to perform the above operation at most once.

Input
First line consists of a single integer, T, denoting the number of test cases. First line of each test case consists of a single integer, denoting N. Second line of each test case consists of N space separated integers denoting the array A.

Output
For each test case, print the maximum achievable power on a new line.

Constraints:
1 ≤ T ≤ 10
1 ≤ N ≤ 10^5
1 ≤ A[i] ≤ 10^9
Example
Input:

2

2

9 10

4

2 3 4 1

Output:

1

3

Explanation
In the first test case, we don't need to do any swaps, the max achievable power is 1. In second test case we can swap A[3] and A[4] so the array will be 2 3 1 4 and the power will be 3.

*/