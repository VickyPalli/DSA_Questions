let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let test_cas = parseInt(readLine())
while(test_cas--){
    let Fith_No = parseInt(readLine())
    let Fish_Size = []
    let Eating_fac = []
    for(let i=0;i<Fith_No;i++){
        let data = readLine().split(" ").map(Number)
        Fish_Size.push(data[0])
        Eating_fac.push(data[1])
    }
    Fish_Size.sort((a,b) => a-b)
    Eating_fac.sort((a,b) => a-b)
    let output = Fish_Size.length
    let i=0,j=0;
    while(i<Eating_fac.length){
      if(Fish_Size[j]<=Eating_fac[i]){
        output--
         j++
         i++
      }else{
        i++
      }
    }
    console.log(output)
}


/* Question 
Noor Pond
Noor is going fish farming. There are N types of fish. Each type of fish has size(S) and eating factor(E). A fish with eating factor of E, will eat all the fish of size <= E.

Help Noor to select a set of fish such that the size of the set is maximized as well as they do not eat each other.

Input
The first line contains T, the number of test cases. The first line of a test case contains an integers N. N is the number of types of fish. Each of the next N lines contains two integers S and E meaning the size and eating factor of a fish.

Output
For each test cases, print a single integer, the maximum number of fish Noor can have in his pond.

Example
Input:

1

3

4 1

5 4

7 3

Output:

2

Explanation
In the sample input, Noor can select the first and the third fish.

*/