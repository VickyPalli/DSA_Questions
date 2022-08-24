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
let N = parseInt(readLine())
let Arr = readLine().split(" ").map(Number)
let Num1 = "";
let Num2 = "";
Arr.sort((a,b) => b-a)
for(let i=0;i<N;i++){
    if(i%2===0){
        Num1+=Arr[i]
    }else{
        Num2+=Arr[i]
    }
}
let Output = addStrings(Num1,Num2)
console.log((Output))
function addStrings(num1, num2){
    //Here num1 & num2 are strings [Return the addition of these two strings as string]
    let i = num1.length-1
    let j = num2.length-1
    let rem = 0
    let carry = 0
    let final = ""
    let sum = 0
    while(i>=0 && j>=0){
        sum = (num1[i] - "0") + (num2[j] - "0") + carry
        carry = Math.floor(sum/10)
        rem = sum%10
        final = final + String(rem)
        i--
        j--
    }
    while(j>=0){
      sum = (num2[j] - "0") + carry
      carry = Math.floor(sum/10)
      rem = sum%10
      final = final + String(rem)
      j--
    }
    while(i>=0){
      sum = (num1[i] - "0") + carry
      carry = Math.floor(sum/10)
      rem = sum%10
      final = final + String(rem)
      i--
    }
    if(carry != 0){
      final += carry
    }
    return final.split("").reverse().join("")
  }


  /*Question
  Maximum sum combination
An array of integers contains integers in range {0,1,2,3,4,5,6,7,8,9}. Using these digits as the digits of a number we create two numbers M and N(difference between the total number of digits of M and N should be smaller than or equal to 1}. Find the maximum sum of M,N possible i.e max(M+N).[ You can use an element of the array at most once for generating the two numbers]

Input
First line of the input contains 'N'. the total numbe of integers in the digits array. The next line contains the N space separated integers(each entry is a digit in range 0-9).

Output
Print the maximum sum possible of the two numbers made from the digits of the array.

Example
Input:

6

1 2 3 3 9 7

Output:

1663

Explanation:

for M=932 and N=731, sum is 1663

Input:

7

1 2 9 0 2 3 8

Output:

10141

Explanation:

for M=9320 and N=821 we have sum=10141

*/