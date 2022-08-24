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

let Test = parseInt(readLine());
while (Test--){
    let N = parseInt(readLine())
    let Box_Stengths = readLine().trim().split(" ").map(Number);
    let sum = 0;
    Box_Stengths.sort((a,b) => a-b)
    for(let i=0;i<N;i++){
      sum+=i*Box_Stengths[i]-(Box_Stengths.length-1-i)*Box_Stengths[i]
    }
    let ans = ((sum % ((10 ** 9) + 7)) * (Math.max(...Box_Stengths) % ((10 ** 9) + 7))) % ((10 ** 9) + 7);
    console.log(ans)
}


/* Question 
Game of Strength
Andrew is very fond of Maths.He has N boxes with him,in each box there is some value which represents the Strength of the Box.The ith box has strength A[i]. He wants to calculate the Overall Power of the all N Boxes.

Overall Power here means Sum of Absolute Difference of the strengths of the boxes(between each pair of boxes) multiplied by the Maximum strength among N boxes. Since the Overall Power could be a very large number,output the number modulus 10^9+7(1000000007).

Input
First line of the input contains the number of test cases T. It is followed by T test cases. Each test case has 2 lines. First line contains the number of boxes N. It is followed by a line containing N elements where ith element is the strength of Andrew's ith box.

Output
For each test case, output a single number, which is the Overall Power for that testcase.

Example
Input:

2

2

1 2

5

4 5 3 1 2

Output:

2

100

*/