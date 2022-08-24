let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function gcd(dividend, divisor) {
    // Implement this function
    if(dividend%divisor===0){
        return divisor;
    }
     if (divisor === 0) {
         return dividend
     }
     return gcd(divisor, dividend % divisor)
}



let testCases = parseInt(readLine());
while (testCases > 0) {
  let input = readLine().split(" ");
  let dividend = parseInt(input[0]);
  let divisor = parseInt(input[1]);
  console.log(gcd(dividend, divisor));
  testCases--;
}


/* Question  
GCD: Recursive
Description
Write a program that computes the GCD of two positive integers using Euclid's algorithm. Your implementation should be recursive in nature. Given two positive integers a, b (a >= b), Euclid's algorithm is defined as follows.

GCD(a, b) = b, if b is a divisor of a
          = GCD(b, a%b), otherwise
Input/Output format
You only need to implement the gcd function provided in the template. The template takes care of reading the input, passing it on to gcd function and printing the result.

Sample input
2
180 48
105 1001
Sample output
12
7
Explanation
First line contains 2, meaning there are 2 test cases.
First test case is 180 48. The greatest common divisor of 180 and 48 is 12. So, the first line of output is 12.
Second test case is 105 1001. The greatest common divisor of 105 and 1001 is 7. So, the second line of output is 7.

*/