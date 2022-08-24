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
let Test_Cases = parseInt(readLine());
while(Test_Cases--){
    let Arr_Size = parseInt(readLine())
    let Arr = readLine().split(" ").map(Number)
    let map = new Map()
    for(let i=0;i<Arr_Size;i++){
        map.set(Arr[i],i%2)
    }
    Arr.sort((a,b)=> a-b)
    let Cost=0; 
    for(let i=0;i<Arr.length;i++){
        let Data = map.get(Arr[i])
        if(Data !== i%2){
            Cost++
        }
    }
    console.log(Cost/2)
}


/* Question

Cheap Thrills
Sourav is in a game parlor. He is deeply interested in a special version of soft toy claw machine. The toys in the machine are labeled with distinct numbers. The toys are present in a linear sequence from left to right. There are two levers in the machine, Lever type 1 can pick two desired adjacent toys and will swap their order; while Lever type 2 can pick three adjacent toys and will reverse their order. For example if the selected toys are of number ‘4’ , ‘7’ and ‘2’ from left to right respectively, then the second lever will make it ‘2’ , ‘7’ and ‘4’ instead. The game is declared as won if all the toys appear in increasing order from left to right and as a reward, the winner gets all the toys.

Generally the use of any of the lever costs the user a Rupee 1 coin. But Sourav found that due to some technical fault, the Type 2 lever (three toys reverse) can be used any number of times without paying a single penny. But he will still have to spend a coin for each use of Type 1 lever.

Sourav is an opportunist and is thinking of exploiting this condition by winning the game with the least expenditure by minimizing the use of Type-1 lever. Help him pre-calculate the number of coins he will need to win and arrange the toys as required.

Input
First line consists of the number of testcases t.

Each testcase consists of 2 lines.

The first line consists of n i.e the number of toys

The next line consists of n space separated integers denoting toy labels.

Output
For each testcase print in separate line the minimum expenditure of Sourav.

Example
Input:

2

3

3 2 1

5

2 8 5 9 7

Output:

0

1

*/