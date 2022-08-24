let fs = require("fs");
const { toASCII } = require("punycode");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function Finding_Factors(nums){
  let count=0;
  for(let i=1;i<=nums;i++){
   if(nums%i===0){
       count++;
   }
  }
  return count;
}
let N=parseInt(readLine());
let unique = new Map();
let input=readLine().split(" ");
for(let i=0;i<N;i++){
  unique.set(parseInt(input[i]),Finding_Factors(parseInt(input[i])));
}
let pair=0;
let Divisors=new Map();
for(let value of unique.values()){
    if(Divisors.has(value)){
        pair+=Divisors.get(value);
        Divisors.set(value,Divisors.get(value)+1);
    }else{
        Divisors.set(value,1);
    }
}
console.log(pair);



/* Question 
Chocolate Bars
There are N chocolates denoted by array A where A[i] is the length of the i-th chocolate. Alice can melt each chocolate and then convert it into a chocolate whose length is any divisor of the number A[i]. So, a chocolate of length A[i] can be converted into X different types of chocolate where X is the count of divisors of the number A[i]. So you need to count the total unordered pair (i, j) of chocolates such that their X value is same.

Input
The first line contains an integer N as input denoting the total number of elements in the array A. The next line contains N space-separated integers that denote the elements of the array A.

Output
In the output, print the total number of ways as mentioned in the statement.

Example
Input:

3

2 3 4

Output:

1

Explanation
X values of each number .

A[1] = 2 , divisors of A[1] are 1, 2.Thus X value of A[1] is 2.

similarly, A[2] = 3, divisors of A[2] are 1, 3.Thus X value of A[2] is 2.

A[3] = 4, divisors of A[3] are 1, 2, 4. Thus X value of A[3] is 3.

Thus we have only one pair (1, 2) for which X value is 2.

*/