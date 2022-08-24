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
let Str_Size = parseInt(readLine())
let Str = readLine()
let Upper_case = []
let Lower_Case = []
for(let i=0;i<Str_Size;i++){
    let index = Str[i].charCodeAt(0)
    if(index>=65 && index<=90){
        Upper_case.push(Str[i])
    }else{
      Lower_Case.push(Str[i])
    }
}
Upper_case.sort()
Lower_Case.sort()
let pointer1 =0;
let pointer2 =0;
Str=Str.split("");
for(let i=0;i<Str_Size;i++){
    if(Str[i]===Str[i].toLowerCase()){
        Str[i]=Lower_Case[pointer1]
        pointer1++
    }else{
        Str[i]=Upper_case[pointer2]
        pointer2++
    }
}
console.log(Str.join(""))


/* Question 
Case Sort
Given a string S consisting of uppercase and lowercase characters. The task is to sort uppercase and lowercase letters separately such that if the ith place in the original string had an Uppercase character then it should not have a lowercase character after being sorted and vice versa.

Expected Time Complexity: O(N*Log(N)). Expected Auxiliary Space: O(N).

Constraints:
1 ≤ N ≤ 10^3

Input
The first line of input contains integer N the size if the string. Next line denotes the given string.

Output
Print the resultant string

Example
Input1:

12

defRTSersUXI

Output1:

deeIRSfrsTUX

Explanation1:
Sorted form of given string with the same case of character as that in original string is deeIRSfrsTUX

Input2:

6

srbDKi

Output2:

birDKs

Explanation2:
Sorted form of given string with the same case of character will result in output as birDKs.

*/