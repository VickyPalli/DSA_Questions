let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
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
  let t = parseInt(readLine())
  for(let i=0;i<t;i++){
      var [n1,n2] = readLine().split(" ")
      console.log(addStrings(n1.trim(),n2.trim()))
  }





  /*   Add Strings
Description
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.

Both num1 and num2 contains only digits 0-9.

Both num1 and num2 does not contain any leading zero.

You MUST NOT convert the inputs to integer directly.

Complete the addStrings function. It takes the input as two strings & you need to return the string (which will same as the addition of two number as integers).

*/
